import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/rahulsaini02/cksbtl0x22tnj17pa0zlm3lq4"
      mapboxApiAccessToken={process.env.mapbox_access_key}
      {...viewport}
      onViewportChange={(nextviewport) => setViewport(nextviewport)}
    >
      {searchResults.map((result) => (
        <div>
          <Marker
            key={result.long}
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className="cursor-pointer text-2xl"
              onClick={() => setSelectedLocation(result)}
            >
              🏘
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={selectedLocation.lat}
              longitude={selectedLocation.long}
            >
              {selectedLocation.title}
            </Popup>
          ) : (
            ""
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
