import React from "react";

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import Markdown from "react-markdown";

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
      body: prop.overview
    }))
    .concat(
      data.airports.map((ap: any) => ({
        id: ap.iata || ap.icao,
        type: "airport",
        lat: ap.latitude,
        lng: ap.longitude,
        title: `Airport - ${ap.iata || ap.icao}`,
        body: [ap.city, ap.country].join(", ")
      }))
    );

class MapComponent extends React.Component<any> {
  state: any = { visible: null };

  handleToggle = (id: string | null) => () => {
    this.setState((prevState: any) => ({
      visible: prevState.visible === id ? null : id
    }));
  };

  render() {
    const { points, centre } = this.props;

    return (
      <GoogleMap
        defaultZoom={6}
        defaultCenter={centre}
        onClick={this.handleToggle(null)}
      >
        {points.map((ent: any) => (
          <Marker
            key={ent.id}
            position={{ lat: ent.lat, lng: ent.lng }}
            onClick={ent.body && ent.title && this.handleToggle(ent.id)}
          >
            {this.state.visible === ent.id && (
              <InfoWindow
                onCloseClick={this.handleToggle(ent.id)}
                options={{ maxWidth: 200 }}
              >
                <React.Fragment>
                  {ent.title && (
                    <strong className="heading">{ent.title}</strong>
                  )}
                  {ent.body && (
                    <Markdown className="content" source={ent.body} />
                  )}
                </React.Fragment>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    );
  }
}

const WithGoogleMap = withGoogleMap(MapComponent);
const WithScriptJs = withScriptjs(WithGoogleMap);
const ConnectedMapComponent = WithScriptJs;

const Map = ({ data }: any) => {
  const points = extractPoints(data);

  if (points.length === 0) {
    return null;
  }

  return (
    <section className="is-page-break">
      <ConnectedMapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={
          <div style={{ height: `100%` }}>
            <div className="has-text-centered">
              <hr />
              <strong>LOADING (MAP)</strong>
              <hr />
            </div>
          </div>
        }
        containerElement={<div style={{ height: `80vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        centre={extractCentre(points)}
        points={points}
      />
    </section>
  );
};

export default Map;
