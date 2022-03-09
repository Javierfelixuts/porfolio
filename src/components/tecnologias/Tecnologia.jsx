import React from 'react'
import styled from 'styled-components';
import {Animated} from "react-animated-css";
import '../../variables.css';



const DivBar = styled('div')`
    background-color: var(--blueDark);
    width: ${props => props.lenguaje.skill}%;
    height: 16px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px; 
    margin-right: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;
const SpanPercent = styled('span')`
  font-size: 10px;
  color: #fff;
  margin-right: 4px;

`
const Tecnologia = ({lenguaje, classN}) => {
    
  return (
    <>
    <Animated animationIn={classN} animationOut="fadeOut" isVisible={true}>
          <lenguaje.image className="fillIcon" aria-label={lenguaje.lenguaje}/>
          <DivBar lenguaje={lenguaje} style={{alignSelf: 'flex-start'}}><SpanPercent>{lenguaje.skill}%</SpanPercent></DivBar>
    </Animated>

    </>
  )
}

export default Tecnologia