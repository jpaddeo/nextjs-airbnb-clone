import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { LocationMarkerIcon } from '@heroicons/react/solid';

function Map({ searchResults }) {
  const coordinates = searchResults?.map((searchResult) => ({
    latitude: searchResult.lat,
    longitude: searchResult.long,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/jpaddeo/cks3ylbgz22wu18mbyjukmpkp'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((searchResult) => (
        <div key={searchResult.long}>
          <Marker
            longitude={searchResult.long}
            latitude={searchResult.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              onClick={() => setSelectedLocation(searchResult)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='location-pin'
            >
              <LocationMarkerIcon className='h-8 text-red-400' />
            </p>
          </Marker>
          {selectedLocation.long === searchResult.long && (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={searchResult.lat}
              longitude={searchResult.long}
            >
              {searchResult.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
