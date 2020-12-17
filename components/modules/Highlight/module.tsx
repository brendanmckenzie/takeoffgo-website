import * as React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { HighlightModuleFragment } from "../../../api/pokko";
import { Section, Columns, Column, Buttons, LinkButton } from "../../Bulma";

export const HighlightModule: React.FC<HighlightModuleFragment> = ({
  title,
  subtitle,
  body,
  image,
  buttons,
}) => {
  return (
    <Section container>
      <Columns>
        <Column width={4}>
          <div className="image is-cover">
            <Image
              src={image?.url!}
              width={400}
              height={280}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </Column>
        <Column>
          <h2 className="title is-2">{title}</h2>
          <h4 className="subtitle is-4">{subtitle}</h4>
          <ReactMarkdown className="content">{body!}</ReactMarkdown>
          <Buttons>
            {buttons
              ?.filter((ent) => ent?.__typename === "Button")
              .map((ent, idx) =>
                ent?.__typename === "Button" ? (
                  <LinkButton
                    key={idx}
                    className={ent.style!}
                    iconRight={ent.icon!}
                    href={ent.target!}
                  >
                    {ent.title!}
                  </LinkButton>
                ) : null
              )}
          </Buttons>
        </Column>
      </Columns>
    </Section>
  );
};
