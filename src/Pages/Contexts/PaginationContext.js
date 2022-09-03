import { node } from 'prop-types';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';


const PaginationContext = React.createContext();

export function usePagination() {
  return useContext(PaginationContext);
}
export function PaginationProvider({ children }) {
  const [activePage, setActivePage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [numOfPage, setNumOfPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [modifiedPages, setModifiedPages] = useState([]);

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
  
  function designPagination(numOfPage) {
    var designedPagination = [];
    if (numOfPage > 7) {
      if ((activePage - 1 > 3) && numOfPage - activePage > 3) {
        // middle
        designedPagination = [1, '...', activePage - 1, activePage, activePage + 1, '...', numOfPage];
      } else if (activePage - 1 <= 3) {
        // aligned left
        designedPagination = [1, 2, 3, 4, 5, '...', numOfPage];
      } else {
        // aligned right
        designedPagination = [1, '...', numOfPage - 4, numOfPage - 3, numOfPage - 2, numOfPage - 1, numOfPage];
      }
    } else {
      designedPagination = Array.from({ length: numOfPage }, (_, i) => i + 1);
    }
    setModifiedPages(designedPagination);
  }

  const value = {
    activePage,
    setActivePage,
    isInitialRender,    
    numOfPage,
    setNumOfPage,
    totalCount,
    setTotalCount,
    modifiedPages,
    setModifiedPages,
    designPagination
  };

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
