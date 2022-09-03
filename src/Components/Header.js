import { string } from "prop-types";
import React from 'react'
import "./Header.css";

export default function Header({ title }) {
  return (
    <div className="container">
      <a className="left" href='/'>
        Rick and Morty Api
      </a>
      <div className="center">
        {title}
      </div>
    </div>
  )
}

Header.propTypes = {
  title: string
}

Header.defaultProps = {
  title: ""
}