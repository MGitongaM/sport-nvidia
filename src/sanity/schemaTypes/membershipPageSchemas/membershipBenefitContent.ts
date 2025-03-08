import { defineType } from "sanity";
import "../blockContent"
export const membershipBenefitContentType = defineType({
  name: "membershipBenefitContent",
  title: "Membership Benefit Content",
  type: "document",
  fields: [
    {
      name: "benefitSectionTitle",
      title: "Benefit Section Title",
      type: "string",
    },
    {
      name: "benefitSectionSubTitle",
      title: "Benefit Section Sub Title",
      type: "string",
    },
    {
      name: "benefitectionText",
      title: "Benefit Section Text",
      type: "string",
    },

    {
        name:"benefitContent",
        title:"Benefit Content",
        type:"array",
        of:[
            {
                type:"object",
                fields:[{
                    name:"benefitHeading",
                    title:"Benefit Heading",
                    type:"string",
                },
                {
                    name:"benefitText",
                    title:"Benefit Text",
                    type:"blockContent",
                },
                {
                    name:"benefitImage",
                    title:"Benefit Image",
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
