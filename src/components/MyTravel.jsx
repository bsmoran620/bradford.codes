import React, { useState, Fragment, useRef, useEffect } from 'react';
import { MyTravelMap } from './MyTravelMap';
import { TravelPhotoGallery } from './TravelPhotoGallery';
import { getTrip, getTripIdsForPlace, getTripTitle } from '../data/travelData';

const DETAILS_CUE_ANIMATION = 'my-travel-details-cue';

export function MyTravel() {
  /** 'world' | 'usa' | 'india' | 'europe' | 'americas' */
  const [mapMode, setMapMode] = useState('world');
  const [detailPlace, setDetailPlace] = useState(null);
  const [activeTripId, setActiveTripId] = useState(null);
  const [detailNonce, setDetailNonce] = useState(0);
  const [detailsCue, setDetailsCue] = useState(false);
  const detailsRef = useRef(null);

  function renderDetailBody() {
    if (detailPlace == null || activeTripId == null) return null;
    const tripIds = getTripIdsForPlace(detailPlace);
    const trip = getTrip(detailPlace, activeTripId);
    return (
      <Fragment>
        {tripIds.length > 1 ? (
          <div
            className="my-travel-trip-switch"
            role="tablist"
            aria-label="Trips that include this stop"
          >
            {tripIds.map((tid) => (
              <button
                key={tid}
                type="button"
                role="tab"
                aria-selected={tid === activeTripId}
                className={
                  tid === activeTripId
                    ? 'btn btn-sm btn-secondary my-travel-trip-switch-btn my-travel-trip-switch-btn--active'
                    : 'btn btn-sm btn-outline-secondary my-travel-trip-switch-btn'
                }
                onClick={() => setActiveTripId(tid)}
              >
                {getTripTitle(tid)}
              </button>
            ))}
          </div>
        ) : null}
        <h3>{trip.title}</h3>
        {trip.stopsOnTrip > 1 ? (
          <p className="my-travel-selected-pin">Pin: {trip.selectedStopTitle}</p>
        ) : null}
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
        <TravelPhotoGallery
          key={trip.tripId}
          tripId={trip.tripId}
          tripTitle={trip.title}
          photoIds={trip.photoIds}
        />
      </Fragment>
    );
  }

  function handleSelectPlace(place) {
    const ids = getTripIdsForPlace(place);
    setDetailPlace(place);
    setActiveTripId(ids[0] ?? place.id);
    setDetailNonce((n) => n + 1);
  }

  function clearTravelDetail() {
    setDetailPlace(null);
    setActiveTripId(null);
    setDetailsCue(false);
  }

  useEffect(() => {
    if (detailPlace == null || detailNonce === 0) return undefined;

    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const reduceMotion =
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        detailsRef.current?.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });
        setDetailsCue(false);
        if (reduceMotion) return;
        requestAnimationFrame(() => setDetailsCue(true));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [detailNonce, detailPlace]);

  const detailsClass =
    detailPlace == null
      ? 'my-travel-details'
      : `my-travel-details${detailsCue ? ' my-travel-details--cue' : ''}`;

  return (
    <div className="my-travel">
      <h2>My Travel</h2>
      <div className="my-travel-map">
        <MyTravelMap
          mapMode={mapMode}
          onEnterUs={() => {
            setMapMode('usa');
            clearTravelDetail();
          }}
          onEnterIndia={() => {
            setMapMode('india');
            clearTravelDetail();
          }}
          onEnterEurope={() => {
            setMapMode('europe');
            clearTravelDetail();
          }}
          onEnterAmericas={() => {
            setMapMode('americas');
            clearTravelDetail();
          }}
          onBackToWorld={() => {
            setMapMode('world');
            clearTravelDetail();
          }}
          onSelectPlace={handleSelectPlace}
        />
      </div>
      <div
        ref={detailsRef}
        className={detailsClass}
        onAnimationEnd={(e) => {
          if (e.target !== detailsRef.current) return;
          if (e.animationName !== DETAILS_CUE_ANIMATION) return;
          setDetailsCue(false);
        }}
      >
        {detailPlace == null ? (
          <h3>Select a pin to see more details</h3>
        ) : (
          renderDetailBody()
        )}
      </div>
    </div>
  );
}
