import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import lodash, {debounce} from 'lodash';

export default function App(props) {

  const[input, setInput] = useState([]);
  const[items, setItems] = useState([]);
  const[cityInfo, setCityInfo] = useState([]);
  const[cityName, setCityName] = useState(false);

  useEffect(()=>{
      console.log(cityName)
          axios.get(`https://61feae06a58a4e00173c9969.mockapi.io/cities?name=${input}`).then(
            function(response){
              if(cityName){
                console.log(input)
                setCityInfo(response.data)
              }else{
                setItems(response.data)
              }
            }
          )
  },[input]);
 

  function onInputChange(e){
    setInput(e.target.value)
    setCityName(false);
    setCityInfo([]);
  }

  function onItemClick(e){
    const cityName = e.target.innerHTML.substring(0, e.target.innerHTML.indexOf('<'));
    setCityName(true)
    setInput(cityName)
  }

  function clearData(){
    setInput([]);
    setItems([]);
    setCityName(false);
    setCityInfo([]);
  }

  return (
    <div className="wrapper">
      <div className="control">
          <input 
            type="text" 
            className="input" 
            value={input} 
            onChange={onInputChange}
            placeholder='Enter city name' 
          />
          <button 
            onClick={clearData}
          >
            Temizle
          </button>
      </div>
      {input.length > 0 && !cityName ?
        <div className="list">
          {items.map((item, index) => (
            <a onClick={onItemClick}>
              {item.name}<br/>
            </a>
          ))}
        </div> : cityName ?
          <div>
            {cityInfo.map((item, index) => (
              <div>
                <span>Plaka : </span>{item.id}<br/>
                <span>İsim : </span>{item.name}<br/>
                <span>Yüseklik : </span>{item.altitude}<br/>
                <span>Boylam : </span>{item.longitude}<br/>
                <span>Bölge : </span>{item.region}<br/>
              </div> 
            ))} 
          </div> : null
      }
    </div>
  );
}
