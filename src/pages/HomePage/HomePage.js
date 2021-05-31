import styled from 'styled-components'
import myimg from '../../img/logo.png';
import React from 'react';
import { useHistory } from "react-router";

export const HomePage = ({setNumber, setCoinP, setCoinS}) =>
{
  const [input, setInputN] = React.useState();
  const [inputCP, setInputCP] = React.useState();
  const [inputCS, setInputCS] = React.useState();

  const history = useHistory();

  function handleSearchClick() 
  {
    setNumber(input);
    setCoinP(inputCP)
    setCoinS(inputCS)
    history.replace("/calculo");
  }

  function handleInputNChange(event) 
  {
    setInputN(event.target.value);
  }

  function handleInputCPChange(event) 
  {
    setInputCP(event.target.value);
  }

  function handleInputCSChange(event) 
  {
    setInputCS(event.target.value);
  }




    return(
       <Home>
        <Wrapper>
        <Logo alt="Logo" />
        </Wrapper>

        <WrapperExch>
        <InputNumber
         placeholder="Ingresa el moto"
         value={input}
         onChange={handleInputNChange}
        />
        <InputCoin
        value={inputCP}
        onChange={handleInputCPChange}
        />
        </WrapperExch>   
         
        <WrapperExch>
          <h1>Conversion a:</h1>
        </WrapperExch>   

        <WrapperExch>
        <InputCoin
        value={inputCS}
        onChange={handleInputCSChange}
        />
        </WrapperExch>   

        <WrapperExch>
        <Button onClick={handleSearchClick}>Convertir</Button>
        </WrapperExch>

        <WrapperHelp>
          Monedas disponibles: ARG (Peso Argetino) - USD (Dólar estadounidense) - EUR (Euro) - GBP (Libra esterlina) - BRL (Real brasileño) - CLP (Peso chileno) - UYU (Peso uruguayo)
        </WrapperHelp>

        <datalist id="monedas">
            <option value="USD"></option>0 
            <option value="ARS"></option>
            <option value="EUR"></option>
            <option value="GBP"></option>
            <option value="BRL"></option>
            <option value="CLP"></option>
            <option value="UYU"></option>
        </datalist>
      </Home>
    )
}


const Home = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: grey;

`;

const InputNumber = styled.input`
text-align: center;
`;

InputNumber.defaultProps = 
{
  type: "number",
  min: "1"
};

const InputCoin = styled.input`
  margin-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  text-align: center;
  outline: none;
  color: white;
  background-color: black;
  border: 0;
`;


InputCoin.defaultProps = 
{
  list: "monedas",
  name: "monedas",
  type: "text"
};



const Wrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const WrapperExch = styled.div`
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

`;


const Logo = styled.img`
  width: 430px;
`;

Logo.defaultProps = 
{
  src: myimg,
};

const Button = styled.button`

    cursor: pointer;
    color: white;
    padding: 20px;
    font-weight: 600;
    background-color: blue;
    border: none;
    border-radius: 200px;
    transition: all ease-out 0.3s;

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }


`;

const WrapperHelp =  styled.div`
  margin-top:  40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;