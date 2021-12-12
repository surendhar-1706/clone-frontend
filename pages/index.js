import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import Layouttwo from "../components/Layout/Layouttwo";
import { motion } from "framer-motion";

function Home({ post }) {
  return (
    <Layouttwo>
      <motion.div
        initial={{ fontSize: "200px" }}
        animate={{ fontSize: "50px" }}
        transition={{ duration: 5, type: "tween" }}
        className="h-screen font-bold  bg-gray-100"
      >
        <Link href="/post">Post</Link>
      </motion.div>
    </Layouttwo>
  );
}
export default Home;
// export default Home;
