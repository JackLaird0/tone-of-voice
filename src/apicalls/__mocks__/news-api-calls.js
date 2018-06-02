export const fetchNewsArticles = jest.fn().mockImplementation(() => 
  Promise.resolve({
    articles: {
      title: 'I Mock Fake News',
      imgUrl: 'thisIsAnImage.gov'
    }
  })
)