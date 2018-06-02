export const fetchNewsArticles = async (url) => {
  try {
    const response = await fetch(url);
    const articles = await response.json();
    return articles;
  } catch (error){
    throw error
  }
};

