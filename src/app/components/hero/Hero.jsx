import React from "react";

const HeroSection = () => {
  return (
    <div className="mb-36 xlg:mb-48 container mx-auto flex flex-col md:flex-row items-center mt-24">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-5xl font-bold mb-6">
          Organize your work and life, finally.
        </h1>
        <p className="text-lg mb-6">
          Simplify life for both you and your team with the world’s #1 task
          manager and to-do list app.
        </p>

        <div className="pb-8 flex items-center justify-center md:justify-start">
          <p className="text-base font-semibold">374K+ ★★★★★ reviews from </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="inline-block ml-2 text-white"
            fill="currentColor"
          >
            <path d="M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            className="inline-block ml-2 text-white"
            fill="currentColor"
          >
            <path d="M 12.736328 2.7402344 A 0.50005 0.50005 0 0 0 12.289062 3.0039062 L 11.220703 4.8828125 C 10.227282 4.4425367 9.1553577 4.15625 8 4.15625 C 6.8446423 4.15625 5.7727177 4.4425367 4.7792969 4.8828125 L 3.7109375 3.0039062 A 0.50005 0.50005 0 0 0 3.2558594 2.7441406 A 0.50005 0.50005 0 0 0 2.8417969 3.4980469 L 3.9316406 5.4160156 C 1.799127 6.7035252 0.2374068 8.8459191 -0.001953125 11.455078 A 0.50005 0.50005 0 0 0 0.49414062 12 L 15.505859 12 A 0.50005 0.50005 0 0 0 16.001953 11.455078 C 15.762593 8.8459191 14.200873 6.7035252 12.068359 5.4160156 L 13.158203 3.4980469 A 0.50005 0.50005 0 0 0 12.736328 2.7402344 z M 8 5.15625 C 11.474409 5.15625 14.271434 7.6961188 14.851562 11 L 1.1484375 11 C 1.7285656 7.6961188 4.5255906 5.15625 8 5.15625 z M 4.5488281 7.875 C 4.2038281 7.875 3.9238281 8.156 3.9238281 8.5 C 3.9238281 8.845 4.2048281 9.125 4.5488281 9.125 C 4.8938281 9.125 5.1738281 8.844 5.1738281 8.5 C 5.1738281 8.155 4.8928281 7.875 4.5488281 7.875 z M 11.451172 7.875 C 11.106172 7.875 10.826172 8.156 10.826172 8.5 C 10.826172 8.845 11.107172 9.125 11.451172 9.125 C 11.795172 9.125 12.075172 8.844 12.076172 8.5 C 12.076172 8.155 11.795172 7.875 11.451172 7.875 z"></path>
          </svg>
        </div>

        <div className="">
          <a
            className="text-lg font-semibold bg-red-600 text-white px-6 py-4 rounded-xl hover:bg-red-700 "
            href="/login"
          >
            Start for free
          </a>
        </div>
      </div>

      <div className="hero_illustration__UFeKS md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="hero_imageContainer__eIT1j relative bg-gray-950">
          <img
            alt="Background for desktop"
            loading="lazy"
            width="690"
            height="690"
            className="hidden md:block product-ui-frame-background_image__UioT5"
            src="/hero/image_1.avif"
          />
          <img
            alt="Mobile view of the Todoist app interface showing today's tasks."
            fetchPriority="high"
            width="500"
            height="466"
            className="md:hidden hero_foregroundImage__qSBWY hero_mobile__24rPS"
            src="/hero/image_2.avif"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
