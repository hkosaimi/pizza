import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

function Model({ showModel, setShowModel }) {
  return (
    <>
      <AnimatePresence>
        {showModel && (
          <motion.div
            className="backdrop"
            variants={backdrop}
            animate="visible"
            initial="hidden"
            exit="hidden">
            <motion.div className="modal" variants={modal}>
              <p>Want to make another pizza?</p>
              <Link to="/">
                <button onClick={() => setShowModel(false)}>Start again</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Model;
