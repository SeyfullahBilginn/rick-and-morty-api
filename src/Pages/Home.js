import React, { useEffect, useState } from 'react'
import Service from '../services/Service'
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import Header from './Header';

// default for api
const PAGE_LIMIT = 20;

export default function Home() {
  const [locations, setLocations] = useState(
    {
      isLoading: "",
      isError: "",
      data: []
    }
  );
  const [numOfPage, setNumOfPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [activePage, setactivePage] = useState(1);
  const [modifiedPages, setModifiedPages] = useState([]);
  const navigate = useNavigate();

  async function fetchLocations() {
    await Service.getAllLocations(activePage)
      .then(res => res.json()
        .then(result => {
          setLocations({ ...locations, data: result.results });
          setNumOfPage(result.info.pages);
          setTotalCount(result.info.count);
          designPagination(result.info.pages);
        })
        .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  }

  function designPagination(pages) {
    var designedPagination = [];
    if (pages > 7) {
      if ((activePage - 1 > 3) && pages - activePage > 3) {
        // middle
        designedPagination = [1, '...', activePage - 1, activePage, activePage + 1, '...', pages];
      } else if (activePage - 1 <= 3) {
        // aligned left
        designedPagination = [1, 2, 3, 4, 5, '...', pages];
      } else {
        // aligned right
        designedPagination = [1, '...', pages - 4, pages - 3, pages - 2, pages - 1, pages];
      }
    } else {
      designedPagination = Array.from({ length: pages }, (_, i) => i + 1);
    }
    setModifiedPages(designedPagination);
  }

  useEffect(() => {
    fetchLocations();
  }, [activePage])

  return (
    <>
      <Header title="Locations" />
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
                        navigate('/residents', {
                          state:
                          {
                            id: location.id,
                            residents: location.residents,
                            name: location.name
                          }
                        })
                      }
                      } />
                  </td>
                </tr>
              ))}
            </tbody>
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
                        setactivePage(activePage - 1)
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
                          setactivePage(page);
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
                        setactivePage(activePage + 1)
                      }
                    }}
                  >
                    {'>'}
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}
