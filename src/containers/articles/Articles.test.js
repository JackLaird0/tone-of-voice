import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { Articles, mapStateToProps, mapDispatchToProps } from './Articles';
import { addNews, selectArticle } from './../../actions/actions';
import { trendingNews } from './../../apicalls/api-call-urls';
import { fetchNewsArticles } from './../../apicalls/news-api-calls';
import { fetchArticleInfo } from './../../apicalls/article-info-api-call';
import { MemoryRouter } from 'react-router-dom';
import { fetchWatsonAnalysis } from './../../apicalls/watson-tone-api-call';

jest.mock('./../../apicalls/news-api-calls');
jest.mock('./../../apicalls/article-info-api-call');
jest.mock('./../../apicalls/watson-tone-api-call')

describe('Articles', () => {
  
  let articles;
  let mockProps;

  beforeEach(() => {

    mockProps = {
      news: {trending: [{title: 'trumpyboy'}]},
      selected: 'trending',
      tone: {'trending 0': [{score: 100, tone_name: 'happy'}]},
      addNews: jest.fn(),
      selectArticle: jest.fn(),
      addToneData: jest.fn()
    };

    articles = shallow(<Articles {...mockProps} />, { disableLifecycleMethods: true });
  });
  
  describe('component', () => {
    it('matches snapshot', () => {
      articles = shallow(<MemoryRouter><Articles {...mockProps} /> </MemoryRouter>, { disableLifecycleMethods: true })
      expect(articles).toMatchSnapshot();
    });
  });

  describe('addArticleData', () => {
    it('calls fetchNewsArticles with the correct params', async () => {
      let expected = trendingNews;

      await articles.instance().addArticleData()

      expect(fetchNewsArticles).toHaveBeenCalledWith(expected)
    });

    it('calls addNews with the correct params', async () => {
      let expected = {
        title: 'I Mock Fake News',
        imgUrl: 'thisIsAnImage.gov'
      };

      await articles.instance().addArticleData()

      expect(mockProps.addNews).toHaveBeenCalledWith('trending', expected)
    });
  });

  describe('compareData', () => {
    it('calls fetchArticleInfo with the correct params', async () => {
      let expected = 'cnn.com/articles/trump';

      await articles.instance().compareData(expected, 'trending 0')
      
      expect(fetchArticleInfo).toHaveBeenCalledWith(expected)
    });

    it('calls fetchWatsonAnalysis with the correct params', async () => {
      let expected = 'I love testing';
      let mockUrl ='cnn.com/articles/trump'

      await articles.instance().compareData(mockUrl)

      expect(fetchWatsonAnalysis).toHaveBeenCalledWith(expected)
    })

    it('calls addToneData with with the correct params', async () => {
      let expected = [{score: 100, tone_name: 'happy'}];
      let mockUrl ='cnn.com/articles/trump';

      await articles.instance().compareData(mockUrl, 'trending 0');

      expect(mockProps.addToneData).toHaveBeenCalledWith('trending 0', expected)
    })
  })

  describe('viewArticle', () => {
    it('calls fetchArticleInfo with the correct params', async () => {
      let expected = 'cnn.com/articles/trump';

      await articles.instance().viewArticle(expected)
      
      expect(fetchArticleInfo).toHaveBeenCalledWith(expected)
    });


    it('calls selectArticle with the correct params', async () => {
      let mockUrl = 'cnn.com/articles/trump';

      let expected = {
        title: 'Fake News',
        text: 'I love testing'
      }

      await articles.instance().viewArticle(mockUrl)

      expect(mockProps.selectArticle).toHaveBeenCalledWith(expected)
    });
  });

  // describe('checkForImage', () => {
  //   it('calls checkForImage with the correct params', () => {
  //     articles.instance().checkForImage();

  //     expect(articles.instance().checkForImage()).toHaveBeenCalled()
  //   })
  // });

  describe('mapStateToProps', () => {

    it('should return an object with news and selected', () => {

      const mockState = {
        news: {trending: [{title: 'trumpyboy'}]},
        selected: 'trending'
      };

      const expected =  {
        news: {trending: [{title: 'trumpyboy'}]},
        selected: 'trending'
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call add news dispatch with the correct params', () => {

      const mockDispatch = jest.fn();
      const news = {trending: [{title: 'best tests ever'}]}
      const outlet = 'trending'
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'ADD_NEWS',
        outlet,
        news
      };
      
      mappedProps.addNews(outlet, news);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call select article dispatch with the correct params', () => {
      const mockDispatch = jest.fn();
      const article = {title: 'wow great test, keep it up'}
      const mappedProps = mapDispatchToProps(mockDispatch);
      const mockAction = {
        type: 'SELECT_ARTICLE',
        article
      };
      
      mappedProps.selectArticle(article);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })
  });
});