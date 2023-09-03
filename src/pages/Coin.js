import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { coinObject } from '../functions/convertObject';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import Header from '../components/Common/Header';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';

function CoinPage() {
    const {id} = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [coinData,setCoinData] = useState();
    const [days,setDays] = useState(30);
    useEffect(()=>{
        if(id){
            getData();
        }
    },[id]);

    async function getData(){
        const data = await getCoinData(id);
        if(data){
            coinObject(setCoinData,data);
            const prices = await getCoinPrices(id,days);
            if(prices.length > 0){
                console.log("woooooo");
                setIsLoading(false);
            }
        }
    }

  return (
    <div>
        <Header/>
        {isLoading ? (<Loader/>)
         : 
         (<>
            <div className='grey-wrapper'>
                <List coin={coinData}/>
            </div>
            <CoinInfo heading={coinData.name} desc={coinData.desc}/>
         </>)}
    </div>
  )
}

export default CoinPage;