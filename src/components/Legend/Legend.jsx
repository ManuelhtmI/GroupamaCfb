import React from 'react'
import './Legend.css';
/* <<<<<<<<<<<<<<<<<<<<<<<<<IMPORT MARQUEURS LEGENDE  >>>>>>>>>>>>>>>>>>>>*/

import userMarker from '../../assets/CompressedPictures/Markers/userMarker.png';
import clubMarker from '../../assets/CompressedPictures/Markers/clubMarker.png';
import markerAgence from '../../assets/CompressedPictures/Markers/markerAgence.png';
import labelMarker from '../../assets/CompressedPictures/Markers/labelMarker.png'



function Legend() {
  return (
    <div className="legendContainer">
    <div className="markerContainer">
      <div className="markerWrapper">
        <img src={userMarker} className="legendMarker1" />
        <span className="markerDescription">Votre position</span>
      </div>
      <div className="markerWrapper">
        <img src={clubMarker} className="legendMarker2" />
        <span className="markerDescription">Club de football</span>
      </div>

      <div className="markerWrapper">
        <img src={markerAgence} className="legendMarker" />
        <span className="markerDescription">Groupama</span>
      </div>

      <div className="markerWrapper">
        <img src={labelMarker} className="legendMarker3"/>
        <span className="markerDescription">Club labéllisé</span>
      </div>
    </div>
  </div>
  )
}

export default Legend