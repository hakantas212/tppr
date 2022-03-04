import React, {useContext, useMemo} from "react";
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import {IntersectionContext} from "./IntersectionObserver";

function MotionBox({
   children,
   delayOrder,
   duration = 1,
   easing = [0.42, 0, 0.58, 1]
 }) {
  const {inView} = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      ease: easing
    }),
    [duration, delayOrder, easing]
  );

  const variants = {
    hidden: {
      y: 250,
      opacity: 0,
      transition
    },
    show: {
      y: 0,
      opacity: 1,
      transition: transition
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

MotionBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  duration: PropTypes.number,
  delayOrder: PropTypes.bool,
  easing: PropTypes.array,
}

export default MotionBox
