import { Disclosure, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
function Disclosurecomponent() {
  return (
    <motion.div>
      <Disclosure>
        {({ open }) => (
          <div className="py-2">
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="font-semibold text-lg">Popular Skills</span>
              <IoIosArrowDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you are unhappy with your purchase for any reason, email us
              within 90 days and we will refund you in full, no questions asked.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <hr />
      <Disclosure>
        {({ open }) => (
          <div className="py-2">
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="font-semibold text-lg">Arabian Dialects</span>
              <IoIosArrowDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you are unhappy with your purchase for any reason, email us
              within 90 days and we will refund you in full, no questions asked.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <hr />
      <Disclosure>
        {({ open }) => (
          <div className="py-2">
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="font-semibold text-lg">Writing Topics</span>
              <IoIosArrowDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you are unhappy with your purchase for any reason, email us
              within 90 days and we will refund you in full, no questions asked.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <hr />
      <Disclosure>
        {({ open }) => (
          <div className="py-2">
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="font-semibold text-lg">Chinese Dialects</span>
              <IoIosArrowDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you are unhappy with your purchase for any reason, email us
              within 90 days and we will refund you in full, no questions asked.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <hr />
      <Disclosure>
        {({ open }) => (
          <div className="py-2">
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="font-semibold text-lg">German Dialects</span>
              <IoIosArrowDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you are unhappy with your purchase for any reason, email us
              within 90 days and we will refund you in full, no questions asked.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <hr />
      <Disclosure>
        {({ open }) => (
          <div className="py-2">
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="font-semibold text-lg">French Dialects</span>
              <IoIosArrowDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you are unhappy with your purchase for any reason, email us
              within 90 days and we will refund you in full, no questions asked.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <hr />
      <Disclosure>
        {({ open }) => (
          <div className="py-2">
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span className="font-semibold text-lg">English Dialects</span>
              <IoIosArrowDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              If you are unhappy with your purchase for any reason, email us
              within 90 days and we will refund you in full, no questions asked.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
      <hr />
    </motion.div>
  );
}

export default Disclosurecomponent;
