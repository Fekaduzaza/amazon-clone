import React, { createContext, useContext, useReducer } from 'react'

 const StateContext=createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// push and pull information from data layer
export const useStateValue=()=>useContext(StateContext);