import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeatDelay: 0,
        duration: 0.5,
        ease: "easeOut",
      },
      y: {
        repeatDelay: 0,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
function Loader() {
  return (
    <>
      <motion.div className="loader" variants={loaderVariants} animate="animationOne"></motion.div>
    </>
  );
}

export default Loader;
