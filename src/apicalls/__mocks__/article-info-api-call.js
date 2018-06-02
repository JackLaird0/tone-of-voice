export const fetchArticleInfo = jest.fn().mockImplementation(() => 
  Promise.resolve({
    objects: [
      {
        title: 'Fake News',
        text: 'I love testing'
      }
    ]
  })
);