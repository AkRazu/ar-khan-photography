import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import Works from "./components/Works/Works";
import Service from "./components/Service/Service";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/service/:id",
          element: <Service />,
          loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
