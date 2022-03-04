import React, {createContext, useState} from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext({inView: false, id: undefined});

export const GlobalStore = ({children}) => {
  const [state, setState] = useState({
    inView: false,
    id: undefined
  })

  return (
    <GlobalContext.Provider value={{state, setState}}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalStore.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}
