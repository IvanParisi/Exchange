import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Calculo, HomePage } from "../pages";
import React from "react";

export const Router = () =>
{
  const [number, setNumber] = React.useState("");
  const [coinP, setCoinP] = React.useState("");
  const [coinS, setCoins] = React.useState("");

  function handleSetNumber(number) {
    setNumber(number);
  }
  
  function handleSetCoinP(number) {
    setCoinP(number);
  }

  function handleSetCoinS(number) {
    setCoins(number);
  }

    return(
    <BrowserRouter>
    <Switch>
    
    <Route path="/calculo">
        <Calculo
        number={number}
        coinP={coinP}
        coinS={coinS}
        />
      </Route>
    
    
      <Route path="/">
        <HomePage setNumber={handleSetNumber} setCoinP={handleSetCoinP} setCoinS={handleSetCoinS}/>
      </Route>
    
     
    </Switch>
    </BrowserRouter>);
}


