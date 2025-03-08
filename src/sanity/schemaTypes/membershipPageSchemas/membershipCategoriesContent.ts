import { defineType } from "sanity";
import "../blockContent";
export const membershipCategoriesContentType = defineType({
  name: "membershipCategoriesContent",
  title: "Membership Categories Content",
  type: "document",
  fields: [
    {
      name: "membershipCategoriesImage",
      title: "Membership Categories Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "membershipCategoriesTitle",
      title: "Membership Categories Title",
      type: "string",
    },
    {
      name: "membershipCategoriesText",
      title: "Membership Categories Text",
      type: "string",
    },

    {
      name: "membershipCategoriestDetails",
      title: "Membership Categories Details",
      type: "blockContent",
    },
  ],
});
