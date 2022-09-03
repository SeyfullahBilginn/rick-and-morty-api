import { string } from "prop-types";
import React from 'react'
import "./Header.css";

export default function Header({ title }) {
  return (
    <div className="container">
      <a className="left" href='/'>
        <p className="left-text">
          Rick and Morty Api
        </p>
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