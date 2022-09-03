import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Service from "../services/Service";
import "./Residents.css";
import ResidentCard from "./ResidentCard";
import Header from "./Header";

export default function Residents() {
  const location = useLocation();
  const [residents, setResidents] = useState(
    {
      data: [],
      isError: false
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
              isError: true
            }
          )
        })
      )
      .catch(err => {
        console.log(err)
        setResidents(
          {
            ...residents,
            isError: true
          }
        )
      });
  }

  async function requestAll() {
    return await Promise.all(location.state.residents.map(async url => {
      try {
        return await fetchResident(url);
      } catch (err) {
        setResidents(
          {
            ...residents,
            isError: true
          }
        )
      }
    }));
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

  return (
    <>
      <Header title={location.state.name} />
      <div id="grid">
        {
          residents && residents.data && residents.data.map(resident => <ResidentCard key={resident.id} resident={resident} />)
        }
      </div>
    </>
  );
}
