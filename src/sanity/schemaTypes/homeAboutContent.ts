import { defineType } from "sanity";
import "./blockContent"

export const homeAboutContentType=defineType({
    name:"homeAboutContent",
    title:"Home About Content",
    type:"document",
    fields:[
        {
            name:"aboutSectionTitle",
            title:"About Section Title",
            type:"string",
        },
        {
            name:"aboutSectionSubTitle",
            title:"About Section Sub Title",
            type:"string",
        },
        {
            name:"aboutSectionText",
            title:"About Section Text",
            type:"blockContent",
        },
        {
            name:"aboutSectionImage",
            title:"About Section Image",
            type:"image",
            options:{
                hotspot:true
            }
        }
    ]
})