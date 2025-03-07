import { defineType } from "sanity";

export const aboutSportsContentType = defineType({
  name: "aboutSportsContent",
  title: "About Sport Content",
  type: "document",
  fields: [
    {
      name: "sportsSectionTitle",
      title: "Sports Section Title",
      type: "string",
    },
    {
      name: "sportSectionSubTitle",
      title: "Sport Section Sub Title",
      type: "string",
    },
    {
      name: "sportSectionText",
      title: "Sport Section Text",
      type: "string",
    },

    {
        name:"sportsContent",
        title:"Sports Content",
        type:"array",
        of:[
            {
                type:"object",
                fields:[{
                    name:"sportHeading",
                    title:"Sport Heading",
                    type:"string",
                },
                {
                    name:"sportText",
                    title:"Sport Text",
                    type:"string",
                },
                {
                    name:"sportImage",
                    title:"Sport Image",
                    type:"image",
                    options:{
                        hotspot:true
                    }
                },
            ]
            }
        ]
    },
    
  ],
});
