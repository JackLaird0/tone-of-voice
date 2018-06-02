import { fetchNewsArticles } from './news-api-calls';
import { ABCNews } from './api-call-urls';
import { fetchArticleInfo } from './article-info-api-call';
import { apiKey } from './article-info-api-key';


describe('api tests', () => {

  describe('Fetch News Articles', () => {
    let response;

    beforeEach(() => {
      response = {title: "something about trump", source: 'ABC'};
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }));
    });
  
    it('should call fetch with the correct params', async () => {
      let expected = ABCNews
  
      await fetchNewsArticles(ABCNews);
  
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  
    it('should return an object if the promise is resolved', async () => {
  
      await expect(fetchNewsArticles(ABCNews)).resolves.toEqual(response);
    });
  
    it('should throw an error if the promise rejects', async () => {
      let expected = new Error('Failed to fetch');
  
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject(expected));
  
      await expect(fetchNewsArticles()).rejects.toEqual(expected);
    });
  });

  describe('Fetch Article Info', () => {
    let response;

    beforeEach(() => {
      response = {text: "more about trump", author: 'Billy Bojangles'};
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }));
    });
  
    it('should call fetch with the correct params', async () => {
      let mockArticleUrl = 'https://www.cnn.com/videos/cnnmoney/2018/05/11/drug-prices-high-romans-orig.cnnmoney'
      let expected = `https://api.diffbot.com/v3/article?token=${apiKey}&url=${mockArticleUrl}`;
  
      await fetchArticleInfo(mockArticleUrl);
  
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  
    it('should return an object if the promise is resolved', async () => {
      let mockArticleUrl = 'https://www.cnn.com/videos/cnnmoney/2018/05/11/drug-prices-high-romans-orig.cnnmoney';

      await expect(fetchArticleInfo(mockArticleUrl)).resolves.toEqual(response);
    });
  
    it('should throw an error if the promise rejects', async () => {
      let expected = new Error('Failed to fetch');
  
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject(expected));
  
      await expect(fetchArticleInfo()).rejects.toEqual(expected);
    });
  });
});