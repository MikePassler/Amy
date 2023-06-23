import React from "react";

import { Img } from "components";

const MacBookAirTwoPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center justify-start mx-auto w-full">
        <Img
          className="h-[832px] sm:h-auto object-cover w-full"
          src="images/img_amycollage1.png"
          alt="amycollageOne"
        />
      </div>
    </>
  );
};

export default MacBookAirTwoPage;
