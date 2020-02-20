import React from "react";
import GoogleMapReact from "google-map-react";
import { GetQuoteQuery } from "../../../lib/graphql";

const googleApiKey = "AIzaSyBDdBQ9QsHxhCJ174wAPDxV0K9t-apBaQo";

type MapMarker = {
  id: string;
  type: string;
  lat: number;
  lng: number;
  title: string;
  body?: string;
  icon: string;
};

const extractCentre = (points: MapMarker[]) => {
  const applicablePoints = points.filter((ent: any) => ent.type !== "airport");
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

export const extractPoints = (data: GetQuoteQuery): MapMarker[] => {
  const airports =
    data.quote?.trip?.tripFlights.nodes
      .map(ent => [ent?.departureAirport, ent?.arrivalAirport])
      .reduce((p, c) => [...p, ...c], [])
      .filter(
        (ent, idx, arr) => arr.indexOf(arr.find(a => a?.id === ent?.id)) === idx
      ) ?? [];

  return (
    data.quote?.accommodation?.nodes
      .map(ent => ent?.property)
      .filter(ent => !!ent)
      .filter(prop => prop?.latitude && prop?.longitude)
      .map(prop => ({
        id: prop?.id,
        type: "property",
        lat: prop?.latitude as number,
        lng: prop?.longitude as number,
        title: prop?.name ?? "",
        body: prop?.summary ?? "",
        icon: "hotel"
      })) || []
  ).concat(
    airports.map(ap => ({
      id: ap?.iata || ap?.icao,
      type: "airport",
      lat: ap?.latitude as number,
      lng: ap?.longitude as number,
      title: `Airport - ${ap?.iata || ap?.icao}`,
      body: [ap?.city, ap?.country].join(", "),
      icon: "plane-departure"
    }))
  );
};

const Marker = (props: any) => {
  return (
    <div className="map-icon">
      <span className="icon is-medium has-text-link">
        <i className={`fad fa-2x fa-${props.icon}`} title={props.title}></i>
      </span>
    </div>
  );
};

const Map = ({ points }: { points: MapMarker[] }) => {
  if (points.length === 0) {
    return null;
  }

  const centre = extractCentre(points);

  if (!centre) {
    return null;
  }
  console.log(points);

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
