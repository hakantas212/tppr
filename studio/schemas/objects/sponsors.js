export default {
  title: 'Sponsors',
  name: 'sponsors',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Sponsor',
      of: [
        {
          title: 'Sponsor',
          type: 'Sponsor',
        },
      ],
    },
  ]
}
