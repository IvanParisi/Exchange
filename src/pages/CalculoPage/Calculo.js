import styled from 'styled-components'
import myimg from '../../img/logo.png';
import { useHistory } from "react-router";
import React from 'react';

export const Calculo = ({number,coinP,coinS}) => 
{
 

  const [coinPrice, setCoinPrice] = React.useState();

    const history = useHistory();


    React.useEffect(() => {
      fetch(`https://v6.exchangerate-api.com/v6/a97b187e9fac28de65b6a72c/pair/${coinP}/${coinS}`)
        .then((response) => response.json().then((data) => setCoinPrice(data)))

    },);

   
    return (
    <Home>
        <Wrapper>
        <Logo alt="Logo" />
        </Wrapper>
        <WrapperExch>
        <Total>{number}</Total>
        <Total>{coinP}</Total>
        <Total>Son</Total>
        {coinPrice && (
        <Total>{number * Math.round(coinPrice.conversion_rate)}</Total>
        )}
        <Total>{coinS}</Total>
        </WrapperExch>

        <WrapperHelp>
        <Button onClick={() => history.push("./")}>Volver al Home</Button>
        </WrapperHelp>
      </Home>);
}

const WrapperHelp =  styled.div`
  margin-top:  40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


const Home = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: grey;

`;

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

`;

const Total = styled.h1`
  padding-left: 10px;
  padding-right: 01;
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

Button.defaultProps = 
{
  
}