export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string'
    },
    {
      name: 'target',
      title: 'Target',
      type: 'string'
    },
    {
      name: 'hex',
      title: 'Hex',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },

    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
    // prepare(selection) {
    //   const { author } = selection;
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`
    //   });
    // }
  }
};
