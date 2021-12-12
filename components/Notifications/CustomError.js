import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function CustomError({ err_state, seterr_state }) {
  return (
    <div className="">
      <AnimatePresence>
        {err_state && (
          <motion.div
            initial={{
              x: "100vw",
              opacity: 0,
            }}
            animate={{
              transition: { duration: 1, ease: "easeInOut" },
              opacity: 1,
              x: 0,
            }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <div className="border mt-2">
              <div className=" border-l-4 border-green-500  p-4  ">
                <div>Username and Password not matching</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomError;
