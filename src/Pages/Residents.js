import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Service from "../services/Service";
import "./Residents.css";
import ResidentCard from "./ResidentCard";

export default function Residents() {
  const location = useLocation();
  const [residents, setResidents] = useState([]);

  async function get(url) {
    Service.getResident(url)
      .then(res => res.json()
        .then(result => {
          setResidents(prevState => [...prevState, result])
        })
        .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  }

  async function requestAll() {
    return await Promise.all(location.state.residents.map(async url => {
      try {
        return await get(url);
      } catch (err) {
        console.log(err)
      }
    }));
  }

  useEffect(() => {
    // fetchResidents();
    requestAll();
  }, [])


  return (
    <div id="grid">
      {
        residents && residents.map(resident => <ResidentCard key={resident.id} resident={resident} />)
      }
    </div>
  );
}
