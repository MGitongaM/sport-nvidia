import { defineType } from "sanity";

export const homeSponsorContentType = defineType({
  name: "homeSponsorContent",
  title: "Home Sponsor Content",
  type: "document",
  fields: [
    {
      name: "sponsorSectionTitle",
      title: "Sponsor Section Title",
      type: "string",
    },
    {
      name: "sponsorSectionSubTitle",
      title: "Sponsor Section Sub Title",
      type: "string",
    },
    {
      name: "sponsorSectionText",
      title: "Sponsor Section Text",
      type: "string",
    },
    {
      name: "sponsorSectionImages",
      title: "Sponsor Section Image",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "sponsorImage",
              title: "Sponsor Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "sponsorTitle",
              title: "Sponsor Title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});
