import { defineType } from "sanity";
import "./blockContent";
export const newsAndUpdateType = defineType({
  name: "newsAndUpdates",
  title: "News and Updates",
  type: "document",
  fields: [
    {
      name: "newsUpdateFeatureImage",
      title: "News Update Feature Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "newsUpdateTitle",
      title: "News Update Title",
      type: "string",
    },
    {
      name: "newsUpdateSlug",
      title: "News Update Slug",
      type: "slug",
      options: {
        source: "newsUpdateTitle",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with dashes
            .replace(/[^\w-]+/g, "") // Remove special characters
            .slice(0, 200),
      },
    },
    {
      name: "newsUpdateExcerpt",
      title: "News Update Excerpt",
      type: "string",
    },
    {
      name: "newsUpdateAuthor",
      title: "News Update Author",
      type: "string",
    },
    {
      name: "newsUpdateDate",
      title: "News Update Date",
      type: "date",
    },
    {
      name: "newsUpdateDetails",
      title: "News Update Details",
      type: "blockContent",
    },
  ],
});
