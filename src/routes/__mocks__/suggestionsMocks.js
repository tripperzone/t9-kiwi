const suggestionsMocks = {
    response: {
        "suggestions": {
          "nodeLevel": [
            {
              "frequency": "6955",
              "word": "bag"
            }
          ],
          "deepLevel": [
            {
              "frequency": "16628",
              "word": "achieve"
            },
            {
              "frequency": "10468",
              "word": "ability"
            },
            {
              "frequency": "5897",
              "word": "acid"
            },
            {
              "frequency": "4586",
              "word": "achievement"
            },
            {
              "frequency": "1100",
              "word": "cage"
            },
            {
              "frequency": "811",
              "word": "bail"
            }
          ]
        }
    },

    emptyResponse: {
      "suggestions": {
        "deepLevel": [],
        "nodeLevel": []
      }
    }
}

export default suggestionsMocks;