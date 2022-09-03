import { shape, string } from "prop-types";
import React from 'react'
import { statusColors } from '../constants';
import "./ResidentCard.css";

export default function ResidentCard({ resident }) {
  const {name, species, type, gender, origin, status} = resident;
  return (
    <div id="resident">
      <div id="container">
        <div id="title">
          Name:&nbsp;
        </div>
        {name}
      </div>
      <div id="container">
        <div id="title">
          Species:&nbsp;
        </div>
        {species}
      </div>
      <div id="container">
        <div id="title">
          Type:&nbsp;
        </div>
        {type}
      </div>
      <div id="container">
        <div id="title">
          Gender:&nbsp;
        </div>
        {gender}
      </div>
      <div id="container">
        <div id="title">
          Origin:&nbsp;
        </div>
        {origin.name}
      </div>
      <div id="container">
        <div id="title">
          Status:&nbsp;
        </div>
        <div style={{ color: statusColors[status.toLowerCase()] }}>
          {status}
        </div>
      </div>
    </div>
  )
}

ResidentCard.propTypes = {
  resident: shape({
    name: string,
    type: string,
    species: string,
    gender: string,
    origin: shape({
      name: string,
      url: string
    }),
    status: string
  })
}

ResidentCard.defaultProps = {
  resident: {
    name: "",
    type: "",
    species: "",
    gender: "",
    origin: { name: "", url: "" },
    status: ""
  }
}