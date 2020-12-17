import * as React from "react";
import ReactMarkdown from "react-markdown";
import { CustomerQuoteModuleFragment } from "../../../api/pokko";
import { Content, Section } from "../../Bulma";

export const CustomerQuoteModule: React.FC<CustomerQuoteModuleFragment> = ({
  author,
  body,
}) => {
  return (
    <Section container>
      <h2 className="title is-2">From our past guests</h2>
      <h4 className="subtitle is-4">Your stories drive our passion</h4>
      <Content>
        <blockquote>
          <ReactMarkdown>{body!}</ReactMarkdown>
          <p>
            <small>&mdash; {author!}</small>
          </p>
        </blockquote>
      </Content>
    </Section>
  );
};
