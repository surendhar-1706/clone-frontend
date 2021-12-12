import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import Layouttwo from "../components/Layout/Layouttwo";
import { motion } from "framer-motion";

function Example({ post }) {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return <div>from example page</div>;
}
export default Example;
