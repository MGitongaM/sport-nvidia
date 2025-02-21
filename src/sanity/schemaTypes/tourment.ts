import { defineType } from "sanity";
import "./blockContent";
export const tourmentType = defineType({
  name: "tournaments",
  title: "Tournaments",
  type: "document",
  fields: [
    {
      name: "tournamentFeatureImage",
      title: "Tournament Feature Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tournamentTitle",
      title: "Tournament Title",
      type: "string",
    },
    {
      name: "tournamentSlug",
      title: "Tournament Slug",
      type: "slug",
      options: {
        source: "tournamentTitle",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with dashes
            .replace(/[^\w-]+/g, "") // Remove special characters
            .slice(0, 200),
      },
    },
    {
      name: "tournamentExcerpt",
      title: "Tournament Excerpt",
      type: "string",
    },
    {
      name: "tournamentAuthor",
      title: "Tournament Author",
      type: "string",
    },
    {
      name: "tournamentDate",
      title: "Tournament Date",
      type: "date",
    },
    {
      name: "tournamentDetails",
      title: "Tournament Details",
      type: "blockContent",
    },
  ],
});
