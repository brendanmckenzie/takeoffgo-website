import Markdown from "react-markdown";
import { Section, Columns, Column, BrandLine, Content, LinkButton, Buttons } from "./Bulma";
import ContactButton from "./ContactButton";
import Image from "./Image";

export type PlacesWeLoveProps = {
  body: string;
  link?: string;
  image: {
    src: string;
    alt: string;
  };
};

const PlacesWeLove: React.FC<PlacesWeLoveProps> = props => (
  <Section container>
    <Columns>
      <Column>
        <h2 className="title is-2">Places we love</h2>
        <h4 className="subtitle is-4">
          Stunning destinations hand picked by our travel experts
        </h4>
        <BrandLine />
        <Content>
          <Markdown>{props.body}</Markdown>
        </Content>
        <Buttons>
          <ContactButton />
          {props.link && <LinkButton text iconRight="chevron-right" href={props.link}>Read more</LinkButton>}
        </Buttons>
      </Column>
      <Column>
        <figure className="image is-cover">
          <Image {...props.image} />
        </figure>
      </Column>
    </Columns>
  </Section>
);

export default PlacesWeLove;
