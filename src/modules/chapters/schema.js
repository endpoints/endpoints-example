module.exports = {
  body: {
    properties: {
      id: {
        type: 'integer'
      },
      title: {
        type: 'string'
      },
      ordering: {
        type: 'string',
        format: 'date-time'
      },
      links: {
        book: {
          type: 'string'
        }
      }
    }
  }
};
