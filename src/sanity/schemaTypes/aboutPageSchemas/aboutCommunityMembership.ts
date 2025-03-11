import { defineType } from "sanity";

export const aboutCommunityMembershipContentType = defineType({
  name: "aboutCommunityMembershipContent",
  title: "About Community Membership Content",
  type: "document",
  fields: [
    {
      name: "communityTitle",
      title: "Community Title",
      type: "string",
    },
    {
      name: "communityText",
      title: "Community Text",
      type: "string",
    },

    {
      name: "membershipTitle",
      title: "Membership Title",
      type: "string",
    },
    {
      name: "membershipText",
      title: "Membership Text",
      type: "string",
    },
    {
      name: "communityBackgroundImage",
      title: "Community Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
