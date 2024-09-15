import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0.8,
  },
};
function Home() {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="exit">
      <motion.div variants={textVariants}>
        <motion.h2>Welcome to Pizza Joint</motion.h2>
      </motion.div>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;
