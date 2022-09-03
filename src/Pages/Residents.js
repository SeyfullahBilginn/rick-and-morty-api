import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Service from "../services/Service";
import "./Residents.css";
import ResidentCard from "../Components/ResidentCard";
import { useLayout } from "../Contexts/LayoutContext";

export default function Residents() {
  const location = useLocation();
  const [residents, setResidents] = useState(
    {
      data: [],
      isError: false,
      isLoading: true
    }
  );
  const { setHeaderTitle } = useLayout();

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
    setHeaderTitle(location.state.name)
    requestAll();
  }, [])

  if (residents?.isError) {
    return (
      <div className="error">
        Error occured while fetching data
      </div>
    )
  }

  if (residents?.isLoading) {
    return (
      <div className="loading">
        Loading
      </div>
    )
  }

  if (residents?.data?.length === 0) {
    return (
      <div className="no-data-found">
        There are no resident
      </div>
    )
  }

  return (
    <div id="grid">
      {
        residents && residents.data && residents.data.map(resident => <ResidentCard key={resident.id} resident={resident} />)
      }
    </div>
  );
}
