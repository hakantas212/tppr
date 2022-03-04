export default {
  title: 'Services',
  name: 'services',
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
      title: 'Service',
      of: [
        {
          title: 'Service',
          type: 'service',
        },
      ],
    },
  ]
}
