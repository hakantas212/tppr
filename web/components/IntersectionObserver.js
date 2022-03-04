import React, {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {GlobalContext} from "./GlobalStore";
import {useInView} from "react-intersection-observer";

export const IntersectionContext = React.createContext({inView: true});

export const IntersectionObserver = ({children, reset = false, id}) => {
  const [inView1, setInView] = useState(false);
  const {setState} = useContext(GlobalContext);
  const {ref, inView, entry} = useInView({
    threshold: .3,
  });

  console.log("entry:", {id, entry})

  useEffect(() => {
    const inViewNow = entry && entry.isIntersecting;
    if (inViewNow) {
      setState({
        inView,
        id
      })
      return setInView(inViewNow);
    } else if (reset) {
      setState({
        inView,
        id
      })
      return setInView(false);
    }
  }, [entry, id]);

  return (
    <IntersectionContext.Provider value={{inView: inView1}}>
      <div ref={ref}>
        {children}
      </div>
    </IntersectionContext.Provider>
  );
};

IntersectionObserver.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  reset: PropTypes.bool,
  id: PropTypes.string,
}
