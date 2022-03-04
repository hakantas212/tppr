export default {
  title: 'Specialisations',
  name: 'specialisations',
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
      title: 'Specialisation',
      of: [
        {
          title: 'Specialisation',
          type: 'Specialisation',
        },
      ],
    },
  ]
}
