import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Service from "../services/Service";
import "./Residents.css";
import ResidentCard from "../Components/ResidentCard";
import Header from "../Components/Header";

export default function Residents() {
  const location = useLocation();
  const [residents, setResidents] = useState(
    {
      data: [],
      isError: false,
      isLoading: true
    }
  );

  async function fetchResident(url) {
    Service.getResident(url)
      .then(res => res.json()
        .then(result => {
          setResidents(prevState => ({
            ...prevState,
            data: [...prevState.data, result],
          }
          ))
        })
        .catch(err => {
          console.log(err)
          setResidents(
            {
              ...residents,
              isError: true,
              isLoading: false
            }
          )
        })
      )
      .catch(err => {
        console.log(err)
        setResidents(
          {
            ...residents,
            isError: true,
            isLoading: false
          }
        )
      })
      .finally(() => {
        setResidents(prevState => ({ ...prevState, isLoading: false }));
      })
  }

  async function requestAll() {
    await Promise.all(location.state.residents.map(async url => {
      try {
        await fetchResident(url)
      } catch (err) {
        setResidents(
          {
            ...residents,
            isError: true
          }
        )
      }
    }))
    if (location.state.residents.length === 0) {
      setResidents({ ...residents, isLoading: false });
    }
  }

  useEffect(() => {
    requestAll();
  }, [])

  if (residents?.isError) {
    return (
      <React.Fragment>
        <Header title={location.state.name} />
        <div className="error">
          Error occured while fetching data
        </div>
      </React.Fragment>
    )
  }

  if (residents?.isLoading) {
    return (
      <React.Fragment>
        <Header title={location.state.name} />
        <div className="loading">
          Loading
        </div>
      </React.Fragment>
    )
  }

  if (residents?.data?.length === 0) {
    return (
      <React.Fragment>
        <Header title={location.state.name} />
        <div className="no-data-found">
          There are no resident
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Header title={location.state.name} />
      <div id="grid">
        {
          residents && residents.data && residents.data.map(resident => <ResidentCard key={resident.id} resident={resident} />)
        }
      </div>
    </React.Fragment>
  );
}
