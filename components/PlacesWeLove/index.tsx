import Markdown from "react-markdown";
import {
  Section,
  Columns,
  Column,
  BrandLine,
  LinkButton,
  Buttons,
} from "../Bulma";
import ContactButton from "../ContactButton";
import Image from "../Image";
import withData from "../../lib/apollo";
import { useGetFeaturedPropertyQuery } from "../../lib/graphql";

const PlacesWeLove: React.FC = () => {
  console.log("hi");
  const query = useGetFeaturedPropertyQuery();
  if (!query.data) {
    return null;
  }

  const property = query.data.featuredProperty;

  return (
    <Section container>
      <Columns>
        <Column>
          <h2 className="title is-2">Places we love</h2>
          <h4 className="subtitle is-4">
            Stunning destinations hand picked by our travel experts
          </h4>
          <BrandLine />
          {property?.featureCopy && (
            <Markdown className="content">{property?.featureCopy}</Markdown>
          )}
          <Buttons>
            <ContactButton />
            <LinkButton
              text
              iconRight="chevron-right"
              href={`/travel/properties/${property?.id}`}
            >
              Read more
            </LinkButton>
          </Buttons>
        </Column>
        <Column>
          {property?.heroMedia?.hash && (
            <figure className="image is-cover">
              <Image src={property.heroMedia.hash} alt={property.name ?? ""} />
            </figure>
          )}
        </Column>
      </Columns>
    </Section>
  );
};

export default withData({ ssr: false })(PlacesWeLove);
