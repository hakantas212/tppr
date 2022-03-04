export default {
  title: 'Contact Us',
  name: 'contactUs',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'E-Mail',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Social Media',
      name: 'media',
      type: 'array',
      of: [
        {
          title: 'Social Media',
          type: 'socialMedia',
        },
      ],
    },
  ]
}
