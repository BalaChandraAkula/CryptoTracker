// import React from 'react'
// import "./styles.css"
// import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
// import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
// import { Tooltip } from '@mui/material';
// import { convertNumber } from '../../../functions/convertNumber';
// import { Link } from 'react-router-dom';

// function List({coin}) {
//   return (
//     <Link to={`/coin/${coin.id}`}>
//     <tr className='list-row'>
//       <Tooltip title="Coin Logo">
//         <td className='td-image'>
//         <img src={coin.image} className='coin-logo'/>
//         </td>
//         </Tooltip>
//         <Tooltip title="Coin Ingo" placement='bottom-start'>
//         <td>
//         <div className='name-col'>
//           <p className='coin-symbol'>{coin.symbol}</p>
//           <p className='coin-name'>{coin.name}</p>
//         </div>
//       </td>
//       </Tooltip>
//       <Tooltip title="Price Change in 24Hrs" placement='bottom-start'>
//       {coin.price_change_percentage_24h>0 ? (<td className='chip-flex'>
//           <div className='price-chip'>
//             {coin.price_change_percentage_24h.toFixed(2)}%
//           </div>
//           <div className='icon-chip td-icon'><TrendingUpRoundedIcon/></div>
//       </td>)
//       : (
//         <td className='chip-flex'>
//           <div className='price-chip chip-red'>
//             {coin.price_change_percentage_24h.toFixed(2)}%
//           </div>
//           <div className='icon-chip chip-red td-icon'><TrendingDownRoundedIcon/></div>
//       </td>)}
//       </Tooltip>
//       <Tooltip title="Current Price">
//       <td>
//         <h3 className='coin-price td-center-align' style={{color:coin.price_change_percentage_24h<0?"var(--red)":"var(--green)"}}>₹{coin.current_price.toLocaleString()}</h3>
//        </td> 
//       </Tooltip>
//       <Tooltip title="Total Volume">
//        <td>
//         <p className='total-volume td-right-align td-total-volume'>
//           {coin.total_volume.toLocaleString()}
//         </p>
//         </td> 
//         </Tooltip>
//         <Tooltip title="Market Cap">
//        <td className='desktop-td-mkt'>
//         <p className='total-volume td-right-align'>
//           ₹{coin.market_cap.toLocaleString()}
//         </p>
//       </td>
//       </Tooltip>
//       <Tooltip title="Market Cap">
//        <td className='mobile-td-mkt'>
//         <p className='total-volume td-right-align'>
//           ₹{convertNumber(coin.market_cap)}
//         </p>
//       </td>
//       </Tooltip>
//     </tr>
//     </Link>
//   )
// }

// export default List















import React, { useState } from 'react';
import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from 'react-router-dom';
import { removeItemFromWatchlist } from '../../../functions/removeItemFromWatchList';
import { saveItemToWatchlist } from '../../../functions/saveItemToWatchList';
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";



const List = ({coin,delay}) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
  return (
    <Link to ={`/coin/${coin.id}`}>
    <tr className='list-row'>
           <Tooltip title="Coin Logo">
    <td className='td-image'>
        <img src={coin.image} className='coin-logo' ></img>
        </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement='bottom-start'>
        <td>
        <div className='name-col'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
        </div>
        </td>
        </Tooltip>
        <Tooltip title="Price Change in 24Hrs" placement='bottom-start'>
    {coin.price_change_percentage_24h>0?(
    <td className='chip-flex'>
          <div className='price-chip'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='icon-chip td-icon'>
           <TrendingUpRoundedIcon/>
           </div>
        </td>
    ):(
      <td className='chip-flex'>
          <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          <div className='icon-chip chip-red td-icon'>
           < TrendingDownRoundedIcon />
           </div>

        </td>

    )}
    </Tooltip>
    <Tooltip title="Current price">
    <td>
    <h3 className='coin-price  td-center-align' style={{color:coin.price_change_percentage_24h<0 ? "var(--red)" :"var(--green)"}}>${coin.current_price.toLocaleString()}</h3>
    </td>
    </Tooltip>
    <Tooltip title="Total Volume" placement='bottom-end'>
    <td>
    <p className='total_volume td-right-align td-total-volume'>{coin.total_volume.toLocaleString()}</p>
    </td>
    </Tooltip>
    <Tooltip title="Market Cap" placement='bottom-end'>
    <td className='desktop-td-mkt'>
    <p className='market_cap td-right-align'>${coin.market_cap.toLocaleString()}</p>
    </td>
    </Tooltip>
    <Tooltip title="Market Cap" placement='bottom-end'>
    <td className='mobile-td-mkt'>
    <p className='market_cap td-right-align'>${convertNumber(coin.market_cap)}</p>
    </td>
    </Tooltip>
    <td
          className={`watchlist-icon ${
            coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
          }`}
          onClick={(e) => {
            if (isCoinAdded) {
              // remove coin
              removeItemFromWatchlist(e, coin.id, setIsCoinAdded);
            } else {
              setIsCoinAdded(true);
              saveItemToWatchlist(e, coin.id);
            }
          }}
        >
          {isCoinAdded ? <StarIcon style={{color:coin.price_change_percentage_24h<0 ? "var(--red)" :"var(--green)"}} /> 
          : <StarOutlineIcon style={{color:coin.price_change_percentage_24h<0 ? "var(--red)" :"var(--green)"}} />}
        </td>
    </tr>
    </Link>
  )
}

export default List;
