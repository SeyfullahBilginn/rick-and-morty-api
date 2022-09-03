/* eslint-disable react/prop-types */
import React from 'react'
import Header from './Components/Header';

export default function Layout(props) {
  console.log(`render layout`);
  return (
    <div>
      <Header />
      asdasd
      {props.children}
    </div>
  )
}
