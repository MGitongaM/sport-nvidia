import { defineType } from "sanity";

export const homeSponsorContentType=defineType({
    name:"homeSponsorContent",
    title:"Home Sponsor Content",
    type:"document",
    fields:[
        {
            name:"sponsorSectionTitle",
            title:"Sponsor Section Title",
            type:"string",
        },
        {
            name:"sponsorSectionSubTitle",
            title:"Sponsor Section Sub Title",
            type:"string",
        },
        {
            name:"sponsorSectionText",
            title:"Sponsor Section Text",
            type:"string",
        },
        {
            name:"sponsorSectionImages",
            title:"Sponsor Section Image",
            type:"array",
            of:[{type:"image"}],
            options:{
                hotspot:true
            }
        }
    ]
})