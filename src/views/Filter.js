import React, { useEffect, useState } from 'react';

import lodash, {debounce} from 'lodash';
import {Input, Button, Grid, Box, ListItem} from '@mui/material';

import {useDispatch, useSelector} from 'react-redux';
import {getCities} from '../store/actions/CityAction';
import styled from 'styled-components';

const Scrollbar = styled.div`
  width: 100%;
  height: 150px;
  overflow-y: auto; /*auto olduğu zaman item sayısı az olduğu vakitte y eksininde scrollu kaldırıyor.*/
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
`;

const HoverSpan = styled.div`
  a:hover, span:hover {
    color:blue;
  }
  cursor: pointer;
`;

export default function Filter(){
    const dispatch = useDispatch();
    const {cityList} = useSelector(({CityList}) => CityList);//get state from component's reducer index

    const[input, setInput] = useState([]);
    const[items, setItems] = useState([]);
    const[cityInfo, setCityInfo] = useState([]);
    const[cityName, setCityName] = useState(false);
  
    useEffect(()=>{
            let payload = {
              data: input
            }
            console.log(payload)
            dispatch(getCities(payload));
    },[input]);


    useEffect(()=> {
      if(cityName){
        setCityInfo(cityList)
      }else{
        setItems(cityList);
      }
    }, [cityList]);
   
  
    const onInputChange = e => {
      setInput(e.target.value)
      setCityName(false);
      setCityInfo([]);
    }
  
    const onItemClick = e => {
      const cityName = e.target.innerHTML.substring(0, e.target.innerHTML.indexOf('<'));
      setCityName(true)
      setInput(cityName)
    }
  
    const clearData = () => {
      setInput([]);
      setItems([]);
      setCityName(false);
      setCityInfo([]);
    }
return(
    <div>
        <Grid xs={12} container style={{justifyContent: "center", marginTop: '500px'}}>
          <Grid>
              <Grid xs={12}>
                <Input 
                      type="text"
                      value={input} 
                      onChange={onInputChange}
                      placeholder='Enter city name'
                      sx={{ mr: 2 }}
                />
                <Button
                    onClick={clearData}
                    variant='outlined'
                    sx={{ mb: 1 }}
                >
                  Temizle
                </Button>
              </Grid>
              <Grid xs={12}>
                {input.length > 0 && !cityName ?
                  <Box>
                      <Grid>
                        <Scrollbar>
                          {items.map((item, index) => (
                            <HoverSpan>
                              <span onClick={onItemClick}>
                                {item.name}<br/>
                              </span>
                            </HoverSpan>
                            
                          ))}
                        </Scrollbar>
                      </Grid>
                  </Box> : cityName ?

                  <Grid>
                      {cityInfo.map((item, index) => (
                          <Grid>
                            <span>Plaka : </span>{item.id}<br/>
                            <span>İsim : </span>{item.name}<br/>
                            <span>Yüseklik : </span>{item.altitude}<br/>
                            <span>Boylam : </span>{item.longitude}<br/>
                            <span>Bölge : </span>{item.region}<br/>
                          </Grid>
                      ))} 
                  </Grid> : null
               }
              </Grid>
          </Grid>
        </Grid>
    </div>
);
}