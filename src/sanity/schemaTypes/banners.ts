export default{
    name:'banner',
    title:'Banner',
    type:'document',
    fields:[
        {
            name:'bannerTitle',
            title:'Banner Title',
            type:'string'
        },
        {
            name:'bannersSubTitle',
            title:'Banner Sub Title',
            type:'string'
        },
        {
            name:'bannersText',
            title:'Banner Text',
            type:'string'
        },
        {
            name:'banner',
            title:'Banner',
            type:'image',
            options:{
                hotspot:'true'
            }
        },
        
    ]
}