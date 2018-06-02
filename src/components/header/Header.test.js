import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { fetchNewsArticles } from './../../apicalls/news-api-calls';
import { ABCNews } from './../../apicalls/api-call-urls';

jest.mock('./../../apicalls/news-api-calls');

describe('Header', () => {

  let mockProps;
  let header;

  beforeEach(() => {

    mockProps = {
      news: {abcNews: {title: 'Testing is fun'}},
      addNews: jest.fn(),
      changeSelectedOutlet: jest.fn()
    };

    header = shallow(<Header {...mockProps} />);
  });

  describe('component', () => {

    it('matches snapshot', () => {
      header = shallow(<MemoryRouter><Header {...mockProps} /></MemoryRouter>);
      expect(header).toMatchSnapshot();
    });
  });

  describe('selectCategory', () => {
    it('calls fetchNewsArticles with the correct params', async () => {
      let expected = ABCNews;

      await header.instance().selectCategory(ABCNews, 'abcNews')

      expect(fetchNewsArticles).toHaveBeenCalledWith(expected)
    })

    it('calls addNews with the correct params', async () => {
      let expected = {
        title: 'I Mock Fake News',
        imgUrl: 'thisIsAnImage.gov'
      };

      await header.instance().selectCategory(ABCNews, 'abcNews')

      expect(mockProps.addNews).toHaveBeenCalledWith('abcNews', expected)
    });
  });

  describe('mapStateToProps', () => {

    it('returns an object with news', () => {
      
      const mockState = {
        news: {abcNews: {title: 'Testing is fun'}}
      };
  
      const mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(mockState);
    });

  });

  describe('mapDispatchToProps', () => {
    
    it('should call changeSelectedOutlet dispatch with the correct params', () => {

      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const outlet = 'abcNews'
      const mockAction = {
        type: 'CHANGE_SELECTED_OUTLET',
        outlet
      };

      mappedProps.changeSelectedOutlet(outlet);
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    });

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
  }); 
});