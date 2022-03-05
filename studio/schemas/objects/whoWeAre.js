export default {
  title: 'Who We Are',
  name: 'whoWeAre',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'simplePortableText',
    },
    {
      title: 'Background',
      name:'background',
      type:'image'
    },
    {
      title:'Button',
      name:'button',
      type:'cta'
    },
    {
      name: 'items',
      type: 'array',
      title: 'Partners',
      of: [
        {
          title: 'logo',
          type: 'image',
        },
      ],
    },
  ]
}
