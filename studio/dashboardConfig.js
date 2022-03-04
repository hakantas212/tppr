export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62224f3c0e18c509f25fbe4c',
                  title: 'Sanity Studio',
                  name: 'tppr-studio-yrn1bt78',
                  apiId: 'ee1e5e80-a24c-402d-b602-0ebaad86356a'
                },
                {
                  buildHookId: '62224f3c42c89d0061a936b9',
                  title: 'Landing pages Website',
                  name: 'tppr-web',
                  apiId: 'e5aeab28-4983-402c-bb68-1862abd93e72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hakantas212/tppr',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://tppr-web.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
