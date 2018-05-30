export const addNews = (outlet, news) => ({
  type: 'ADD_NEWS',
  outlet,
  news
});

export const changeSelectedOutlet = outlet => ({
  type: 'CHANGE_SELECTED_OUTLET',
  outlet
});