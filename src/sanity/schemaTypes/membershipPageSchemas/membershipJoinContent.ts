import { defineType } from "sanity";
import "../blockContent";

export const membershipJoinContentType = defineType({
  name: "membershipJoinContent",
  title: "Membership Join Content",
  type: "document",
  fields: [
    {
      name: "joinSectionTitle",
      title: "Join Section Title",
      type: "string",
    },
    {
      name: "joinSectionSubTitle",
      title: "Join Section Sub Title",
      type: "string",
    },
    {
      name: "joinSectionText",
      title: "Join Section Text",
      type: "string",
    },

    {
      name: "joinDetails",
      title: "Join Details",
      type: "blockContent",
    },
  ],
});
