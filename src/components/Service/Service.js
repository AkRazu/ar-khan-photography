import React from "react";
import { useLoaderData } from "react-router-dom";

const Service = () => {
  const { name, image, price, description } = useLoaderData();
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-6">
        <div 
            data-aos="fade-right"
            data-aos-duration="1000"
        >
          <img src={image} alt="service" />
        </div>
        <div className="text-start flex items-center"
            data-aos="fade-left"
            data-aos-duration="1000"
        >
          <div>
            <h1 className="text-4xl text-gray-900 font-extrabold dark:text-white">
              {name}
            </h1>
            <p className="mb-3 text-lg font-light text-gray-500 md:text-xl dark:text-gray-400">
              {description}
            </p>
            <h1 className="text-4xl text-gray-800  fon font-bold dark:text-white">
              ${price}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div class="my-10">
          <form>
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">
                  Your review
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Give a review..."
                  required
                ></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Write review
                </button>
                
              </div>
            </div>
          </form>
          <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
            Remember, contributions to this topic should follow our{" "}
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Community Guidelines
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
