import React, { useEffect, useState } from 'react'
import Service from '../services/Service'
import InfoIcon from '@mui/icons-material/Info';
import "./Home.css";

export default function Home() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    Service.getAllLocations()
      .then(res => res.json()
        .then(result => {
          console.log(result);
          setLocations(result.results)
        })
        .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  }, [])

  return (
    <div className='parent' >
      <div className="tableArea">
        <table id="customers">
          <thead>
            <tr>
              <th style={{width:"5%"}}>#</th>
              <th style={{width:"35%"}}>Type</th>
              <th style={{width:"35%"}}>Dimension</th>
              <th style={{width:"20%"}}>Resident Counts</th>
              <th style={{width:"10%"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.type}</td>
                <td>{location.dimension}</td>
                <td>{location.residents.length}</td>
                <td id="actions">
                  <InfoIcon id="infoIcon" />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            pagination
          </tfoot>
        </table>
      </div>
    </div>
  )
}
