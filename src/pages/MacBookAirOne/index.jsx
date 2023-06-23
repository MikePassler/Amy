import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const MacBookAirOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-start justify-start mx-auto pb-[39px] sm:pr-5 pr-[39px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-start justify-start md:px-5 w-[79%] md:w-full">
          <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
            <Img
              className="common-pointer h-[177px] md:h-auto object-cover w-full"
              src="images/img_66f7386bd5a727d.png"
              alt="66f7386bd5a727d"
              onClick={() => navigate("/macbookairtwo")}
            />
            <Img
              className="common-pointer h-[177px] md:h-auto object-cover w-full"
              src="images/img_66f7386bd5a727d.png"
              alt="66f7386bd5a727d_One"
              onClick={() => navigate("/macbookairthree")}
            />
            <Img
              className="common-pointer h-[177px] md:h-auto object-cover w-full"
              src="images/img_66f7386bd5a727d.png"
              alt="66f7386bd5a727d_Two"
              onClick={() => navigate("/macbookairfour")}
            />
            <Text
              className="common-pointer md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
              size="txtInterRegular32"
              onClick={() => navigate("/macbookairfive")}
            >
              READ ME
            </Text>
          </div>
          <Img
            className="h-[715px] sm:h-auto md:mt-0 mt-[78px] object-cover w-[715px] md:w-full"
            src="images/img_amyradiocopy22.png"
            alt="amyradiocopyTwentyTwo"
          />
        </div>
      </div>
    </>
  );
};

export default MacBookAirOnePage;
