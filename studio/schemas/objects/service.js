export default {
  title: 'Service',
  name: 'service',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      }
    },
    {
      name:'innerListItems',
      type:'array',
      of:[
        {
          title:'listItem',
          type:'string'
        }
      ]
    }
  ]
}
