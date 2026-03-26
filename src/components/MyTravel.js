import React, { useState, Fragment } from 'react';
import { MyTravelMap } from './MyTravelMap';
import { getTrip } from '../data/travelData';

export function MyTravel() {
  /** 'world' | 'usa' | 'india' | 'europe' | 'americas' */
  const [mapMode, setMapMode] = useState('world');
  const [travelDetail, setTravelDetail] = useState(null);

  function renderDetail(place) {
    const trip = getTrip(place);
    return (
      <Fragment>
        <h3>{trip.title}</h3>
        {trip.dateRange ? (
          <p className="my-travel-trip-dates">{trip.dateRange}</p>
        ) : null}
        <p>{trip.summary}</p>
        {trip.highlights && trip.highlights.length > 0 ? (
          <ul className="my-travel-highlights">
            {trip.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        ) : null}
      </Fragment>
    );
  }

  return (
    <div className="my-travel">
      <h2>My Travel</h2>
      <div className="my-travel-map">
        <MyTravelMap
          mapMode={mapMode}
          onEnterUs={() => {
            setMapMode('usa');
            setTravelDetail(null);
          }}
          onEnterIndia={() => {
            setMapMode('india');
            setTravelDetail(null);
          }}
          onEnterEurope={() => {
            setMapMode('europe');
            setTravelDetail(null);
          }}
          onEnterAmericas={() => {
            setMapMode('americas');
            setTravelDetail(null);
          }}
          onBackToWorld={() => {
            setMapMode('world');
            setTravelDetail(null);
          }}
          onSelectPlace={(place) => setTravelDetail(renderDetail(place))}
        />
      </div>
      <div className="my-travel-details">
        {travelDetail == null ? (
          <h3>Select a pin to see more details</h3>
        ) : (
          travelDetail
        )}
      </div>
    </div>
  );
}
