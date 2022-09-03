import React, { useEffect, useState } from 'react'
import Service from '../services/Service'
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { usePagination } from '../Contexts/PaginationContext';
import { useLayout } from '../Contexts/LayoutContext';

// default for api
const PAGE_LIMIT = 20;

export default function Home() {
  const [locations, setLocations] = useState(
    {
      isLoading: "",
      isError: false,
      data: []
    }
  );
  const {
    activePage,
    setActivePage,
    isInitialRender,
    numOfPage,
    setNumOfPage,
    totalCount,
    setTotalCount,
    modifiedPages,
    designPagination
  } = usePagination();

  const { setHeaderTitle } = useLayout();
  const [isLoadingShow, setIsLoadingShow] = useState();
  const navigate = useNavigate();

  async function fetchLocations() {
    setLocations({ ...locations, isLoading: true })
    await Service.getAllLocations(activePage)
      .then(res => res.json()
        .then(result => {
          setLocations({ ...locations, data: result.results, isLoading: false });
          setNumOfPage(result.info.pages);
          setTotalCount(result.info.count);
          designPagination(result.info.pages);
        })
        .catch(error => {
          console.error(error);
          setLocations(
            {
              ...locations,
              isLoading: false,
              isError: true,
            }
          )
        })
      )
      .catch(err => {
        console.error(err);
        setLocations(
          {
            ...locations,
            isLoading: false,
            isError: true
          }
        )
      });
  }

  useEffect(() => {
    setHeaderTitle("Locations")
    setIsLoadingShow(isInitialRender)
    fetchLocations();
  }, [activePage])

  function renderPagination() {
    return (
      <tfoot id="footer">
        <tr>
          <td>Total Locations: {totalCount}</td>
          <td>{(activePage - 1) * PAGE_LIMIT + 1}/{activePage * PAGE_LIMIT}</td>
          <td>
            <div
              className='page-button'
              style={{ backgroundColor: activePage !== 1 ? "white" : "RGB(10,10,10,0.2)" }}
              onClick={() => {
                if (activePage !== 1) {
                  setActivePage(activePage - 1);
                }
              }}
            >
              {'<'}
            </div>
            {modifiedPages.map((page, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setActivePage(page);
                  }}
                  className="page-button"
                  style={{ backgroundColor: page === activePage ? "RGB(202,242,242)" : "white" }}
                >
                  {page}
                </div>
              )
            })}
            <div
              className='page-button'
              style={{ backgroundColor: activePage !== numOfPage ? "white" : "RGB(100,100,100,0.1)" }}
              onClick={() => {
                if (activePage !== numOfPage) {
                  setActivePage(activePage + 1);
                }
              }}
            >
              {'>'}
            </div>
          </td>
        </tr>
      </tfoot>
    )
  }

  if (locations?.isError) {
    return (
      <div className="error">
        Error occured while fetching data
      </div>
    )
  }
  // isLoadingShow prevents showing loading message when the active page is change
  if (locations?.isLoading && isLoadingShow) {
    return (
      <div className="loading">
        Loading
      </div>
    )
  }

  return (
    <div className='parent' >
      <div className="tableArea">
        <table id="locations">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th style={{ width: "25%" }}>Name</th>
              <th style={{ width: "25%" }}>Type</th>
              <th style={{ width: "30%" }}>Dimension</th>
              <th style={{ width: "10%" }}>Resident Counts</th>
              <th style={{ width: "5%" }}>Info</th>
            </tr>
          </thead>
          <tbody id="body">
            {locations && locations.data && locations.data.map((location) => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.name}</td>
                <td>{location.type}</td>
                <td>{location.dimension}</td>
                <td>{location.residents.length}</td>
                <td id="actions">
                  <img
                    id="infoIcon"
                    src="/images/info.png"
                    alt="my image"
                    onClick={() => {
                      navigate(`/residentsof-${location.id}`, {
                        state:
                        {
                          id: location.id,
                          residents: location.residents,
                          name: location.name
                        }
                      })
                    }
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
          {renderPagination()}
        </table>
      </div>
    </div>
  )
}
