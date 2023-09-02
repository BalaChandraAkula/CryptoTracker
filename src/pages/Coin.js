import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { coinObject } from '../functions/convertObject';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import Header from '../components/Common/Header';

function CoinPage() {
    const {id} = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [coinData,setCoinData] = useState();
    useEffect(()=>{
        if(id){
            axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((response)=>{
                coinObject(setCoinData,response.data);
                setIsLoading(false);
            })
            .catch((error)=>{
                console.log("ERROR>>> ",error);
                setIsLoading(false);
            })
        }
    },[id])

  return (
    <div>
        <Header/>
        {isLoading ? (<Loader/>)
         : 
         (<>
            <div className='grey-wrapper'>
                <List coin={coinData}/>
            </div>
         </>)}
    </div>
  )
}

export default CoinPage;