import React from "react";
import { MdModeEdit } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import WorkHistory from "./WorkHistory";
import StarRatings from "react-star-ratings";
function AboutProfile() {
  return (
    <div>
      <div className="px-4 pb-8 pt-3 border-l border-b">
        <div className="flex gap-x-4 items-start justify-between  py-3 md:pb-6">
          <div className="font-bold text-xl break-words">
            Python web scraping scripts developer
          </div>
          <div className="font-bold text-xl ">$15.00/hr </div>
          <div>
            <button>
              <MdModeEdit
                className="bg-white rounded-full text-gray-600 border border-gray-300 px-0.5 "
                size={25}
              />
            </button>
          </div>
        </div>

        <ShowMoreText
          lines={2}
          more=" more "
          less="less "
          className="text-gray-900"
          anchorClass="text-green-600"
          expanded={false}
        >
          <div>
            I write scripts that scrape data from the static and dynamic web
            pages My expertise are: * Python-Scrapy * Selenium * pandas and
            regex Projects I have worked on : * Real Estate Properites and
            agents contacts data * Extracting images from pngmart for ML
            purposes * Fetching Youtube data *Famouse Ecomerce webites * Jobs
            from huntr. co etc..
          </div>
        </ShowMoreText>
      </div>
      <div className="md:px-4 border-b md:py-4">
        {" "}
        <WorkHistory />
      </div>
      <div className="md:px-4 border-b md:py-4">
        <div className="font-semibold text-lg text-upworkgreen-light">
          REAL TIME DATA EXTRACTION FROM GOOGLE FINANCE OR OTHER WEBSITES USING
          API
        </div>
        <div className="flex items-end gap-x-2">
          {" "}
          <StarRatings
            starDimension="15px"
            starSpacing="2px"
            rating={5}
            starRatedColor="#14a800"
            numberOfStars={5}
          />
          <div className="font-semibold text-xs">5.00</div>
          <div className="text-xs text-gray-500">
            {" "}
            Dec 28, 2020 - Jan 9, 2021
          </div>
        </div>
        <div className="text-sm font-sans md:pr-16 text-gray-600 ">
          It was great working with Surendhar .Very cooperative, understanding
          and clear in communication. I would love to work with him in future
        </div>
        <div className="flex items-center gap-x-24">
          <div className="font-semibold">$10.00</div>
          <div className="font-sans font-thin">Fixed Price</div>
        </div>
      </div>
    </div>
  );
}

export default AboutProfile;
