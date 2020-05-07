import React, {useState, Fragment} from 'react';
import { ReactComponent as WorldMap } from './../resources/worldMap.svg';
import { ReactComponent as USAMap } from './../resources/usaMap.svg';

/*
 * Improvement List:
 * Europe click in map too
 * 
 * TODO List:
 * Add content for each city
 * Credit https://iconmonstr.com/license/ for globe icon
 * Mobile...
 */
export function MyTravel() {
  const [isWorldMap, setIsWorldMap] = useState(false);
  const [travelDetail, setTravelDetail] = useState(null);
  
  return (
    <div className="my-travel">
      <h2>My Travel</h2>
      <div className="my-travel-map">
        {
          isWorldMap ?
            <WorldMap onClick={handleWorldMapClick} /> :
            <USAMap onClick={handleUSAMapClick} /> 
        }
      </div>
      <div className="my-travel-details">
        {travelDetail == null ? <h3>Select a pin to see more details</h3> : travelDetail}  
      </div>
    </div>
  );

  function handleWorldMapClick(event) {
    const isUS = event.target == null ? false : event.target.classList.contains("us");
    if (isUS) {
      setIsWorldMap(false);
      setTravelDetail(null);
    } else {
      setTravelDetail(extractCityNameTitle(event.target));
    }
  }

  function handleUSAMapClick(event) {
    const isWorld = event.target == null ? false : event.target.classList.contains("world-map");
    if (isWorld) {
      setIsWorldMap(true);
      setTravelDetail(null);
    } else {
        setTravelDetail(extractCityNameTitle(event.target));
    } 
  }

  function extractCityNameTitle(domElement) {
    return (domElement != null && domElement.hasAttribute('data-city-name')) ?
      <Fragment><h3>{domElement.getAttribute('data-city-name')}</h3><p>Details Coming Soon</p></Fragment> :
      null;  
  }
}
