import { defineField, defineType } from "sanity";

export const openGraphType = defineType({
  name: "openGraphImage",
  title: "Open Graph Image",
  type: "document",
  fields: [
    {
      name: "featuredOpenGraphImage",
      title: "Featured Open Graph Image",
      type: "image",
      options: {
        hotspot: "true",
      },
      fields: [
        defineField({
          name: "alt",
          title: "Image Alternative Text",
          type: "string",
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context.parent as { asset?: { _ref?: string } };
              return !value && parent?.asset?._ref
                ? "Alt text is required when banner Image is present"
                : true;
            }),
        }),
      ],
    },
  ],
});
