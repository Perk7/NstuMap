import React, { useContext, useState } from 'react';
import { Context } from './Context';

export function useAppContext() {
    const context = useContext(Context);
    return context;
}

export const useCreateAppContext = function(props) {
    
    const [obj, changeObj] = useState(props.obj || '1_d')
    const [closed, changeClose] = useState(props.closed || true)
   
    const toggleClose = () => {
      changeClose(_closed => !_closed);
    };
    const toggleObj = obj => {
      changeObj(_obj => obj);
    };
  
    return {
      toggleClose,
      toggleObj,
      obj,
      closed
    };
}

export const AppContextProvider = ({ children, ...props }) => {
    const context = useCreateAppContext(props);
    return <Context.Provider value={context}>{children}</Context.Provider>;
};