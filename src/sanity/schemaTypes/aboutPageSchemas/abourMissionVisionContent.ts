import { defineType } from "sanity";

export const aboutMissionVisionContentType = defineType({
  name: "aboutMissionVisionContent",
  title: "About Mission Vision Content",
  type: "document",
  fields: [
    {
      name: "missionTitle",
      title: "Mission Title",
      type: "string",
    },
    {
      name: "missionText",
      title: "Mission Text",
      type: "string",
    },
    {
      name:"aboutBackgroundImage",
      title:"About Background Image",
      type:"image",
      options:{
          hotspot:true
      }
  },
    {
      name: "missionImage",
      title: "Mission Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "visionTitle",
      title: "Vision Title",
      type: "string",
    },
    {
      name: "visionText",
      title: "Vision Text",
      type: "string",
    },
    {
      name: "visionImage",
      title: "Vision Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
