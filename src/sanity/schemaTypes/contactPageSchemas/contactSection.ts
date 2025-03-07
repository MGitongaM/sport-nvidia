import { defineType } from "sanity";

export const contactContentType=defineType({
    name:"contactContent",
    title:"Contact Content",
    type:"document",
    fields:[
        {
            name:"contactSectionTitle",
            title:"Contact Section Title",
            type:"string",
        },
        {
            name:"contactSectionSubTitle",
            title:"Contact Section Sub Title",
            type:"string",
        },
        {
            name:"contactSectionText",
            title:"Contact Section Text",
            type:"string",
        },
        {
            name:"contactSectionImage",
            title:"Contact Section Image",
            type:"image",
            options:{
                hotspot:true
            }
        }
    ]
})
