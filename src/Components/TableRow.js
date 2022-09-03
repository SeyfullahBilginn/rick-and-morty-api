import React from 'react'
import { shape, string, number, array } from "prop-types";
import { useNavigate } from 'react-router-dom';

export default function TableRow({location}) {
  const {id, name, type, dimension, residents} = location;
  const navigate = useNavigate();

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{dimension}</td>
      <td>{residents.length}</td>
      <td id="actions">
        <img
          id="infoIcon"
          src="/images/info.png"
          alt="my image"
          onClick={() => {
            navigate('/residents', {
              state:
              {
                id: id,
                residents: residents,
                name: name
              }
            })
          }
          }
        />
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  location: shape({
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: array
  })
}

TableRow.defaultProps = {
  location: {
    id: 999,
    name: "",
    type: "",
    dimension: "",
    residents: []
  }
}
