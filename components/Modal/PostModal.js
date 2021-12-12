import { useRouter } from "next/router";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
function PostModal({ post, setmodalstate, modalstate }) {
  const router = useRouter();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.div exit={{ opacity: 0 }}>
          <motion.div
            className="bg-yellow-200  fixed  "
            initial={{ opacity: 0, x: 100 }}
            animate={{ x: "0", opacity: 1, transition: { duration: 1 } }}
            exit={{ x: "-10vw", opacity: 0, transition: { duration: 1 } }}
          >
            {" "}
            {modalstate ? (
              <motion.div exit={{ opacity: 0 }}>
                <motion.div
                  className="bg-yellow-200  fixed  "
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ x: "0", opacity: 1, transition: { duration: 1 } }}
                  exit={{ x: "-10vw", opacity: 0, transition: { duration: 1 } }}
                >
                  <button
                    onClick={() => {
                      console.log("button triggered");
                      setmodalstate(false);
                      router.push("/post", undefined, { shallow: true });
                    }}
                    className="bg-green-300 px-2 py-1 rounded-full "
                  >
                    back
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <button
                onClick={() => {
                  router.push("/post");
                }}
                className="px-2 py-1 bg-red-400 rounded-full "
              >
                Render back link here
              </button>
            )}
            <p>{post.id}</p>
            <p>{post.title}</p>
            <div>{post.description}</div>
            <div>{post.categroy}</div>
            <div>{post.weekly_length}</div>
            <div>{post.total_length}</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default PostModal;
