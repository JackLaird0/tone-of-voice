export const fetchWatsonAnalysis = async (text) => {
  try {
    const url = 'http://localhost:5000/api/v1/analysis';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({'text': text})
    });
    
    if (response.status <= 200){
      return await response.json()
    } else {
      throw new Error("Unable to get text's tone")
    }
  } catch (error) {
    throw error
  }
}