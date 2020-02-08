import React from "react";
import GoogleMapReact from "google-map-react";

const googleApiKey = "AIzaSyBDdBQ9QsHxhCJ174wAPDxV0K9t-apBaQo";

const extractCentre = (points: any) => {
  const applicablePoints = points.filter((ent: any) => ent.type === "property");
  const lat =
    applicablePoints
      .map((ent: any) => ent.lat)
      .reduce((p: any, c: any) => p + c, 0) / applicablePoints.length;
  const lng =
    applicablePoints
      .map((ent: any) => ent.lng)
      .reduce((p: any, c: any) => p + c, 0) / applicablePoints.length;

  return { lat, lng };
};

const extractPoints = (data: any) =>
  data.properties
    .filter((prop: any) => prop.latitude && prop.longitude)
    .map((prop: any) => ({
      id: prop.id,
      type: "property",
      lat: prop.latitude,
      lng: prop.longitude,
      title: prop.name,
      body: prop.overview,
      icon: "hotel"
    }))
    .concat(
      data.airports.map((ap: any) => ({
        id: ap.iata || ap.icao,
        type: "airport",
        lat: ap.latitude,
        lng: ap.longitude,
        title: `Airport - ${ap.iata || ap.icao}`,
        body: [ap.city, ap.country].join(", "),
        icon: "plane-departure"
      }))
    );

const Marker = (props: any) => {
  return (
    <div className="map-icon">
      <span className="icon has-text-link">
        <i
          className={`fad fa-lg fa-${props.icon}`}
          title={props.title}
          {...props}
        ></i>
      </span>
    </div>
  );
};

const Map = ({ data }: any) => {
  const points = extractPoints(data);

  if (points.length === 0) {
    return null;
  }

  const centre = extractCentre(points);

  if (!centre) {
    return null;
  }

  return (
    <section className="is-page-break">
      <div style={{ height: "80vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApiKey }}
          defaultCenter={centre}
          defaultZoom={6}
        >
          {points.map((pt: any) => (
            <Marker key={pt.id} {...pt} />
          ))}
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default Map;
