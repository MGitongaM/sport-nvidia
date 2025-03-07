import { defineType } from "sanity";
import "../blockContent";
export const contactVisitContentType = defineType({
  name: "contactVisitContent",
  title: "Contact Visit Content",
  type: "document",
  fields: [
    {
      name: "vistSectionTitle",
      title: "Vist Section Title",
      type: "string",
    },
    {
      name: "vistSectionSubTitle",
      title: "Vist Section Sub Title",
      type: "string",
    },
    {
      name: "vistSectionText",
      title: "Vist Section Text",
      type: "blockContent",
    },
    {
      name: "vistSectionImage",
      title: "Vist Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
