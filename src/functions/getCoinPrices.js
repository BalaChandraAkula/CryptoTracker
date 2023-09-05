import axios from "axios";

export const getCoinPrices= (id,days,priceType)=>{
    const prices = axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    ).then((response)=>{
        console.log("Pricess>>>>", response.data);
        if (priceType == "market_caps") {
            return response.data.market_caps;
          } else if (priceType == "total_volumes") {
            return response.data.total_volumes;
          } else {
            return response.data.prices;
          }
    
        // return response.data["prices"];
        // return response.data[priceType];
        // setIsLoading(false);
    }).catch((error)=>{
        console.log("ERROR>>> ",error);
        // setIsLoading(false);
    });
    return prices;
}

// import axios from "axios";
 
// export const getCoinPrices = (id, days, priceType) => {
//   return axios
//     .get(
//       `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
//     )
//     .then((response) => {
//       console.log("Prices Data >>>", response.data);
 
//       // Check if the response data is structured as expected
//       if (Array.isArray(response.data[priceType])) {
//         return response.data[priceType];
//       } else {
//         console.error(`Invalid priceType "${priceType}" or data structure`);
//         return []; 
//       }
//     })
//     .catch((error) => {
//       console.error("Error: ", error);
//       return []; 
//     });
// };