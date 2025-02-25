import { defineType } from "sanity";
import "./blockContent";
export const golfCourseType = defineType({
  name: "golfCourse",
  title: "Golf Courses",
  type: "document",
  fields: [
    {
      name: "golfCourseFeatureImage",
      title: "Golf Course Feature Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "golfCourseTitle",
      title: "Golf Course Title",
      type: "string",
    },
    {
      name: "golfCourseSlug",
      title: "Golf Course Slug",
      type: "slug",
      options: {
        source: "golfCourseTitle",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with dashes
            .replace(/[^\w-]+/g, "") // Remove special characters
            .slice(0, 200),
      },
    },
    {
      name: "golfCourseExcerpt",
      title: "Golf Course Excerpt",
      type: "string",
    },
    {
      name: "golfCourseAuthor",
      title: "Golf Course Author",
      type: "string",
    },
    {
      name: "golfCourseDate",
      title: "Golf Course Date",
      type: "date",
    },
    {
      name: "golfCourseDetails",
      title: "Golf Course Details",
      type: "blockContent",
    },
    {
      name: "golfCourseShowCaseImage1",
      title: "Golf Course Show Case Image 1",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "golfCourseShowCaseImage2",
      title: "Golf Course Show Case Image 2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "golfCourseEstablishedHeading",
      title: "Golf Course Established Heading",
      type: "string",
    },
    {
      name: "golfCourseEstablishedSubText",
      title: "Golf Course Established Sub Text",
      type: "string",
    },
    {
      name: "golfCourseEstablishedStats1",
      title: "Golf Course Established Stats 1",
      type: "string",
    },
    {
      name: "golfCourseEstablishedStats2",
      title: "Golf Course Established Stats 2",
      type: "string",
    },
    
  ],
});
