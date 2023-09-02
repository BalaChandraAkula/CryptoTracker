import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Search from '../components/Dashboard/Search';

function DashboardPage() {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState("");

  const onSearchChange = (e)=>{
    // console.log(e.target.value)
    setSearch(e.target.value);
  }

  var filteredCoins = coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())||
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(()=>{
    // fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    // .then((res)=>res.json())
    // .then((data)=>{});
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then((response)=>{
      console.log(response);
      setCoins(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);

  return (
    <div>
        <Header/>
        <Search search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins={filteredCoins}/>
    </div>
  )
}

export default DashboardPage