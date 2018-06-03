import { fetchNewsArticles } from './news-api-calls';
import { ABCNews } from './api-call-urls';
import { fetchArticleInfo } from './article-info-api-call';
import { fetchWatsonAnalysis } from './watson-tone-api-call';
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
      let expected = ABCNews;
  
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
      let mockArticleUrl = 'https://www.cnn.com/videos/cnnmoney/2018/05/11/drug-prices-high-romans-orig.cnnmoney';
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

  describe('Fetch Watson Analysis', () => {
    let mockText;

    beforeEach(() => {
      mockText = 'watson analysis is really cool';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockText)
      }));
    });

    it('should call fetch watson analysis with the correct params', async () => {
      let expected = ['http://localhost:5000/api/v1/analysis', 
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({'text': mockText})
        }
      ];

      await fetchWatsonAnalysis(mockText);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if the promise is resolved', async () => {
  
      await expect(fetchWatsonAnalysis()).resolves.toEqual(mockText);
    });

    it('should throw unable to get texts tone if the status is above 200', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 404
      }));

      let response = fetchWatsonAnalysis();
      let expected = Error("Unable to get text's tone");

      expect(response).rejects.toEqual(expected);
    });

    it('should throw an error if the promise rejects', async () => {
      let expected = new Error('Failed to fetch');

      window.fetch = jest.fn().mockImplementation(() => Promise.reject(expected));
  
      await expect(fetchWatsonAnalysis()).rejects.toEqual(expected);
    });
  });
});