# ratings_history_module
## Description
The Analyst Ratings module displays data and expert recommendations in an accessible and user-friendly UI. The Purchase History module renders a dynamic and individually expanding list of past purchases.    As a potential customer, I want to be able to easily and confidently determine whether I should buy, hold, or sell.   As an existing customer, I want to see my history of past purchases so that I can see that I am making good purchasing decisions and/or improve future decisions. 


## API
| Method | Path | Description | Example |
| ------------- | ------------- | ------------- | ------------- |
| GET | '/api/stocks/:stockID/ratings' | Request will provide the viewing Stock Symbols recommendation in percentage values of Buy/Hold/Sell and Summary in json. | [{"symbol":"AAPL","recBuy":7,"recHold":3,"recSell":14,"reviewBuy":"Soft one-to-one drive solutions Apple Inc. incremental Small. \n The out-of-the-box monetize relationships Ratione autem occaecati nobis quo qui voluptatem velit quod ea.. \n Overall, one-to-one drive solutions Apple Inc. client-driven Praesentium reiciendis saepe et qui.","reviewSell":"Soft cross-platform disintermediate portals incremental Apple Inc. Small. \n For robust generate users Ratione autem occaecati nobis quo qui voluptatem velit quod ea.. \n Hence, cross-platform disintermediate portals Apple Inc. client-driven Praesentium reiciendis saepe et qui."}]
| GET | '/api/stocks/:stockID/history' | Request will provide past purchases by the user of the viewing Stock Symbol in json. | [{"symbol":"AAPL","purchase_id":6075,"name":"Apple Inc.","timeinforce":"Good for day","submitted":"2015-03-12T09:38:01.274Z","status":"filled","enteredQuantity":18,"filled":"2017-06-02T04:39:12.739Z","filledQuantityShares":18,"filledQuantityPrice":18,"total":218}] |

## Scripts
```
npm run react-dev (webpack --watch -d)
npm start (node index.js not nodemon index.js)
```
