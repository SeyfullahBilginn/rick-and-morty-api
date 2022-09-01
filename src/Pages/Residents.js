/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Service from "../services/Service";
// import Service from "../services/Service";
import "./Residents.css";

export default function Residents() {
  const location = useLocation();
  const [residents, setResidents] = useState([]);
  const [counter, setCounter] = useState(0);
  // function fetchResidents() {
  // for (var i = 0; i < 100; i++) {
  //   console.log("--");
  //   setCounter(counter + 1);
  // }
  // console.log("fetchResidents");
  // await location.state.residents.forEach(resident => {
  //   Service.getResident(resident)
  //     .then(res => res.json()
  //       .then(result => {
  //         console.log(result);
  //         setResidents([...residents, result])
  //       })
  //       .catch(err => console.log(err))
  //     )
  //     .catch(err => console.log(err));
  // })
  // }

  async function get(url) {
    console.log("---");
    Service.getResident(url)
      .then(res => res.json()
        .then(result => {
          console.log(result);
          setResidents(prevState => [...prevState, result])
        })
        .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  }

  async function requestAll() {
    return await Promise.all(location.state.residents.map(async url => {
      try {
        console.log("+++");
        return await get(url);
      } catch (err) {
        console.log(err)
      }
    }));
  }


  useEffect(() => {
    console.log("USE EFFECT");
    console.log(location.state.id);
    console.log(location.state.residents);
    // fetchResidents();
    requestAll();
  }, [])


  return (
    <div className="parent">
      <div>{location.state.id}</div>
      <div>{location.state.residents.length}</div>
      {counter}
      <div>{residents.length}</div>
      {
        residents[0] &&
        <div>{residents[0].id}</div>
      }
      {residents && residents.map((resident, index) => {
        return (
          <div key={index}>{resident.id}</div>
        )
      })}
    </div>
  );
}
