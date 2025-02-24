import { PortableTextComponents } from "next-sanity";
import { urlFor } from "./lib/image";
import Image from "next/image";

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          src={urlFor(props.value).width(600).height(300).quality(80).auto("format").url()}
          height="300"
          width="600"
          alt={props?.value?.alt || "image"}
          className="rounded-lg not-prose w-full h-auto"
        />
      ) : null,
  },
};
