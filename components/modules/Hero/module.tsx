import * as React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { HeroModuleFragment } from "../../../api/pokko";
import {
  Section,
  Columns,
  Column,
  BrandLine,
  Buttons,
  LinkButton,
} from "../../Bulma";

export const HeroModule: React.FC<HeroModuleFragment> = ({
  title,
  heroBody,
  image,
  buttons,
}) => {
  return (
    <Section container>
      <Columns vcentred>
        <Column>
          <h2 className="title is-2">{title!}</h2>
          <BrandLine />
          <ReactMarkdown className="content">{heroBody!}</ReactMarkdown>
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
        <Column width={5}>
          <div className="image is-cover">
            <Image
              src={image?.url!}
              width={600}
              height={800}
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
        </Column>
      </Columns>
    </Section>
  );
};
