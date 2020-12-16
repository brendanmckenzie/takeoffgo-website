import React from "react";
import _ from "lodash";

const properties = [
  { property: "og:site_name", key: "og:site_name", default: "Take Off Go" },
  { property: "fb:admins", key: "fb:admins", default: "724709288" },
  { property: "fb:app_id", key: "fb:app_id", default: "172454862952247" },
  {
    property: "og:image",
    key: "og:image",
    default: "https://www.takeoffgo.com/logo-square.png"
  },
  { property: "og:image:width", key: "og:image:width", default: "1000" },
  { property: "og:image:height", key: "og:image:width", default: "1000" },
  { property: "og:title", key: "title", default: "Take Off Go" },
  { property: "og:type", key: "type", default: "website" },
  {
    property: "og:description",
    key: "description",
    default:
      "Take Off Go was established to help you experience the extraordinary with tailor made tours."
  }
];

type MetaProps = { model?: any; router: any };

const Meta: React.FC<MetaProps> = ({ model, router }) => (
  <>
    <meta
      property="og:url"
      content={`https://www.takeoffgo.com${router.asPath}`}
    />
    <meta name="format-detection" content="telephone=no" />
    {properties.map(ent => (
      <meta
        key={ent.property}
        property={ent.property}
        content={_.get(model, ent.key, ent.default)}
      />
    ))}
    <meta name="apple-mobile-web-app-title" content="Take Off Go" />
  </>
);

export default Meta;
