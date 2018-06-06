export const fetchWatsonAnalysis = jest.fn().mockImplementation(() => 
  Promise.resolve({
    document_tone: {
      tones: [{score: 100, tone_name: 'happy'}]
    }
  })
);