import { defineType } from "sanity";

export const homeHeroContentType=defineType({
    name:"homeHeroContent",
    title:"Home Hero Content",
    type:"document",
    fields:[
        {
            name:"heroSectionTitle",
            title:"Hero Section Title",
            type:"string",
        },
        {
            name:"heroSectionSubTitle",
            title:"Hero Section Sub Title",
            type:"string",
        },
        {
            name:"heroSectionText",
            title:"Hero Section Text",
            type:"string",
        },
        {
            name:"heroSectionImage",
            title:"Hero Section Image",
            type:"image",
            options:{
                hotspot:true
            }
        }
    ]
})