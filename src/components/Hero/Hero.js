import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Services from "../Services/Services";
import AboutMe from "../AboutMe/AboutMe";
const Hero = () => {
  return (
    <div>
      <div data-aos="zoom-in" data-aos-duration="1000" className="hero-section">
        <section class=" dark:bg-gray-900 h-fit">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              Where creative process happens
            </h1>
            <p class="lg:mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Your creativity, our inspiration whatever your story, set it free
            </p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get in Touch
                <svg
                  class="ml-2 -mr-1 w-5 h-5"
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
        {/* My Services section */}
      </div>
      <div
        className="my-10"
      >
        <h1 className="text-4xl font-extrabold dark:text-white">My Services</h1>
        <p className="mb-3 py-5 font-light text-gray-500 dark:text-gray-400">
          Photography is a way of feeling, of touching, of loving. What you have
          caughton film is captured forever... if remember little things
        </p>
      </div>
      <div>
        <div>
          <Services/>
        </div>
      <div className="flex justify-center my-10">
        <Link to='/service'
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See all
        </Link>
      </div>
      <div>
        <AboutMe/>
      </div>
      </div>
    </div>
  );
};

export default Hero;
