import { defineType } from "sanity";

export const eventsHeroContentType = defineType({
  name: "eventsHeroContent",
  title: "Events Hero Content",
  type: "document",
  fields: [
    {
      name: "eventsHeroSectionTitle",
      title: "Events Hero Section Title",
      type: "string",
    },
    {
      name: "eventsHeroSectionSubTitle",
      title: "Events Hero Section Sub Title",
      type: "string",
    },
    {
      name: "eventsHeroSectionText",
      title: "Events Hero Section Text",
      type: "string",
    },
    {
      name: "eventsHeroSectionImages",
      title: "Events Hero Section Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "eventsImage",
              title: "Events Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "eventsTitle",
              title: "Events Title",
              type: "string",
            },
          ],
        },
      ],
    },


  ],
});
