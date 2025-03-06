import { defineType } from "sanity";

export const homeLegacyContentType=defineType({
    name:"homeLegacyContent",
    title:"Home Legacy Content",
    type:"document",
    fields:[
        {
            name:"legacySectionTitle",
            title:"Legacy Section Title",
            type:"string",
        },
        {
            name:"legacySectionSubTitle",
            title:"Legacy Section Sub Title",
            type:"string",
        },
        {
            name: "legacySectionContent",
            title: "Legacy Section Content",
            type: "array",
            of: [
                {
                    type:"object",
                    fields:[
                        {
                            name:"legacySectionHeadingText",
                            title:"Legacy Section Heading Text",
                            type:"string",
                        },
                        {
                            name:"LegacySectionText",
                            title:"Legacy Section Text",
                            type:"string",
                        },
                        {
                            name:"legacySectionImage",
                            title:"Legacy Section Image",
                            type:"image",
                            options:{
                                hotspot:true
                            }
                        }
                    ]
                }
            ]
          },

    ]
})