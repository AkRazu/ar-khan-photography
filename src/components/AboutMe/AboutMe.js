import React from "react";
import AboutPhotography from "../../images/AboutPhotography/AboutPhotography.jpg";
const AboutMe = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            data-aos="fade-right"
            className="w-full dark:hidden"
            src={AboutPhotography}
            alt="About Photography"
            data-aos-duration="1000"
          />
          <img
            className="w-full hidden dark:block"
            src={AboutPhotography}
            alt="About Photography"
          />
          <div data-aos="fade-left" data-aos-duration="1000" className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              About
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Hi, my name is AR. I am an artist and photographer. Nemo enim
              ipsam voluptatem quia voluptas aspernatur aut odit aut fugit.
              Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam
              voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
