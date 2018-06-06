import { FullArticle, mapStateToProps } from './FullArticle';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Header', () => {

  let mockProps;
  let fullArticle;

  beforeEach(() => {

    mockProps = {
      article: {
        title: 'trump',
        author: 'me',
        text: 'interesting text',
        pageUrl: 'coolarticle.io',
        images: 'coolarticle-image.io'
      }
    };

    fullArticle = shallow(<FullArticle {...mockProps} />, { disableLifecycleMethods: true });
  });

  describe('component', () => {

    it('matches snapshot', () => {
      fullArticle = shallow(<FullArticle {...mockProps} />, { disableLifecycleMethods: true });
      expect(fullArticle).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {

    it('returns an object with news', () => {
      let article = mockProps.article;

      const mockState = {
        article
      };
  
      const mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(mockState);
    });
  });
});