import { node } from 'prop-types';
import React, { useContext, useState } from 'react';
import Header from '../Components/Header';


const LayoutContext = React.createContext();

export function useLayout() {
  return useContext(LayoutContext);
}
export function LayoutProvider({ children }) {
  const [headerTitle, setHeaderTitle] = useState();
  
  const value = {
    setHeaderTitle,
  };
  return (
    <LayoutContext.Provider
      value={value}
    >
      <Header title={headerTitle} />
      {children}
    </LayoutContext.Provider>
  );
}

LayoutProvider.propTypes = {
  children: node
};

LayoutProvider.defaultProps = {
  children: null
};
