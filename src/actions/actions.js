export const addNews = (outlet, news) => ({
  type: 'ADD_NEWS',
  outlet,
  news
});

export const changeSelectedOutlet = outlet => ({
  type: 'CHANGE_SELECTED_OUTLET',
  outlet
});

export const selectArticle = article => ({
  type: 'SELECT_ARTICLE',
  article
})