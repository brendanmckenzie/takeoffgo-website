import * as React from "react";
import Image from "next/image";
import { ImageModuleFragment } from "../../../api/pokko";
import { Section } from "../../Bulma";

export const ImageModule: React.FC<ImageModuleFragment> = ({ image }) => {
  return (
    <Section container>
      <Image
        src={image?.url!}
        width={1440}
        height={1440}
        objectFit="cover"
        objectPosition="center"
      />
    </Section>
  );
};
