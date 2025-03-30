import { defineType } from "sanity";

export const newsUpdateHeroContentType = defineType({
  name: "newsUpdateHeroContent",
  title: "News Update Hero Content",
  type: "document",
  fields: [
    {
      name: "newsUpdateHeroSectionTitle",
      title: "NewsUpdate Hero Section Title",
      type: "string",
    },
    {
      name: "newsUpdateHeroSectionSubTitle",
      title: "NewsUpdate Hero Section Sub Title",
      type: "string",
    },
    {
      name: "newsUpdateHeroSectionText",
      title: "NewsUpdate Hero Section Text",
      type: "string",
    },
    {
      name: "newsUpdateHeroSectionImages",
      title: "NewsUpdate Hero Section Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "newsUpdateImage",
              title: "NewsUpdate Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "newsUpdateTitle",
              title: "NewsUpdate Title",
              type: "string",
            },
          ],
        },
      ],
    },
   
  ],
});
