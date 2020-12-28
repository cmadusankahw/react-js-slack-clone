// implementing REACT Context API usages (REDUX)
// Data Layer
// Using Global data throught the whole app
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// Here {children} is basically the whole App
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// returning the value from the data layer
export const useStateValue = () => useContext(StateContext);
