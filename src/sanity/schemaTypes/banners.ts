import { defineField, defineType } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "bannerTitle",
      title: "Banner Title",
      type: "string",
    },
    {
      name: "bannerSubTitle",
      title: "Banner Sub Title",
      type: "string",
    },
    {
      name: "bannerText",
      title: "Banner Text",
      type: "string",
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
      options: {
        hotspot: "true",
      },
      fields: [
        defineField(
            {
                name: "alt",
                title: "Image Alternative Text",
                type: "string",
                validation:rule=>rule.custom((value,context)=>{
                    const parent=context.parent as {asset?:{_ref?:string}}
                    return !value && parent?.asset?._ref ?'Alt text is required when banner Image is present':true
                })
              },
        )
      
      ],
    },
  ],
});
