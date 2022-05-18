import React from "react";

const Pagenotfound = () => {
  return (
    <div>
      <div
        className={` relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90"></div>
        <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h1 className="text-skin-base text-4xl uppercase text-center">
            ✋ 404 NOT FOUND
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Pagenotfound;
