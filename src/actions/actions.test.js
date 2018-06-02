import {addNews, changeSelectedOutlet, selectArticle } from './actions'

describe('Actions', () => {
  describe('addNews', () => {
    it('has a type of ADD_NEWS', () => {
      let mockOutlet = 'the onion';
      let mockNewsData = {title: 'Fake News!!!!'};

      let actual = addNews(mockOutlet, mockNewsData);

      expect(actual.type).toEqual('ADD_NEWS');
    });

    it('should add news data to the addNews action', () => {
      let mockOutlet = 'the onion';
      let mockNewsData = {title: 'Fake News!!!!'};

      let actual = addNews(mockOutlet, mockNewsData);

      expect(actual.news).toEqual(mockNewsData);
    });

    it('should add the outlet to the addNews action', () => {
      let mockOutlet = 'the onion';
      let mockNewsData = {title: 'Fake News!!!!'};

      let actual = addNews(mockOutlet, mockNewsData);

      expect(actual.outlet).toEqual(mockOutlet);
    })
  });

  describe('changeSelectedOutlet', () => {
    it('has a type of CHANGE_SELECTED_OUTLET', () => {
      let mockOutlet = 'the onion';

      let actual = changeSelectedOutlet(mockOutlet)

      expect(actual.type).toEqual('CHANGE_SELECTED_OUTLET')
    });

    it('should add the outlet to the changeSelectedOutlet action', () => {
      let mockOutlet = 'the onion';

      let actual = changeSelectedOutlet(mockOutlet)

      expect(actual.outlet).toEqual(mockOutlet)
    });
  });

  describe('selectArticle', () => {
    it('has a type of SELECT_ARTICLE', () => {
      let mockArticle = {title: 'Real News'};

      let actual = selectArticle(mockArticle)

      expect(actual.type).toEqual('SELECT_ARTICLE')
    });

    it('should add the article to the selectArticle action', () => {
      let mockArticle = {title: 'Real News'};

      let actual = selectArticle(mockArticle)

      expect(actual.article).toEqual(mockArticle)
    });
  });
});