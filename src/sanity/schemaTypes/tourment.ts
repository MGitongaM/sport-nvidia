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
    {
      name: "tournamentsHomeTeamImage",
      title: "Tournaments Home Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tournamentsRivalTeamImage",
      title: "Tournaments Rival Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tournamentsStartDate",
      title: "Tournaments Start Date",
      type: "date",
    },
    {
      name: "tournamentsEndDate",
      title: "Tournaments End Date",
      type: "date",
    },
    {
      name: "tournamentsOpeningHours",
      title: "Tournaments Opening Hours",
      type: "datetime",
    },
    {
      name: "tournamentsVenue",
      title: "Tournaments Venue",
      type: "string",
    },
    {
      name: "tournamentsAddress",
      title: "Tournaments Address",
      type: "string",
    },
    {
      name: "tournamentsEmail",
      title: "Tournaments Email",
      type: "string",
    },
    {
      name: "tournamentsPhoneNumber",
      title: "Tournaments Phone Number",
      type: "string",
    },
    {
      name: "tournamentPublishedAt",
      title: "Tournament Published At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
      initialValue: () => new Date().toISOString(),
    },
  ],
});
