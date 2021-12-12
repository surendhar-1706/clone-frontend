import React from "react";
import { AnimatePresence, motion } from "framer-motion";
function CustomModal({ modal, setmodal, children }) {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {modal && (
          <motion.div className="fixed  md:pl-40 " exit={{ opacity: 0 }}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{ x: 50 }}
            >
              <div className="">Modal text</div>
              {children}
              <button
                className="px-2 py-1 bg-green-400"
                onClick={() => {
                  setmodal(false);
                }}
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomModal;
