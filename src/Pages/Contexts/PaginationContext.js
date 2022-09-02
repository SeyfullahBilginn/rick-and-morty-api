import { node } from 'prop-types';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';


const PaginationContext = React.createContext();

export function usePagination() {
  return useContext(PaginationContext);
}
export function PaginationProvider({ children }) {
  const [activePage, setActivePage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const value = {
    activePage,
    setActivePage,
    isInitialRender,
    setIsInitialRender
  };

  useLayoutEffect(() => {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    if (params.get("page")) {
      setActivePage(Number(params.get("page")));
    }
  }, [])

  useEffect(() => {
    // set is initial render to true
    //after first render of dashboard
    //it is required for showing loading page for only first render
    setIsInitialRender(false)
  }, [])
  

  return (
    <PaginationContext.Provider
      value={value}
    >
      {children}
    </PaginationContext.Provider>
  );
}

PaginationProvider.propTypes = {
  children: node
};

PaginationProvider.defaultProps = {
  children: null
};
