import { useState } from 'react'
import Key from '../components/Key'

export default function Calculator() {

    const [display, setDisplay] = useState("C-PEITEL3 EXPECTATIONS");
    const [digit1, setDigit1] = useState(null);
    const [digit2, setDigit2] = useState(null);
    const [operator, setOperator] = useState(null);
    const [prevDisplay, setPrevDisplay] = useState("");
    
    let result;

    const digitClickHandler = (e) => {
        const value = e.target.innerHTML;
        // ONLY RUNS IF THERE IS AN OPERATOR 
        if (operator === null){
            if(digit1 === null){
                if(value !== '0'){
                    setDigit1(value);
                    setDisplay(value);
                }
            } else { 
                if(value !== '0' || digit1 !== '0'){
                    // TO PREVENT ADDING ERROR TO THE CALCULATION
                    if (digit1 !== "Can't Divide by Zero" && digit1.length < 15){
                        setDigit1(digit1 + value);
                        setDisplay(digit1 + value);
                    }
                }
            } 
        } else {
            if(digit2 === null) {
                    setDigit2(value);
                    setDisplay(value);
            } else {
                if(value !== '0' || digit2 !== '0'){
                    if(digit2.length < 15) {
                        setDigit2(digit2 + value);
                        setDisplay(digit2 + value);
                    }
                }
            } 
        }
    }

    const keyOne = (e)=>{
        setDisplay("Being On Time")
    }

    const keyTwo = (e)=>{
        setDisplay("Making An Effort")
    }
    const keyThree = (e)=>{
        setDisplay("Being High Energy")
    }
    const keyFour = (e)=>{
        setDisplay(" Having A Positive Attitude")
    }
    const keyFive = (e)=>{
        setDisplay("Being Passionate")
    }
    const keySix = (e)=>{
        setDisplay("Using Good Body Language")
    }
    const keySeven = (e)=>{
        setDisplay(" Being Coachable")
    }
    const keyEight = (e)=>{
        setDisplay("Doing A Little Extra")
    }
    const keyNine = (e)=>{
        setDisplay("Being Prepared")
    }
    const keyZero = (e)=>{
        setDisplay(" Having A Strong Work Ethic")
    }

    const questionOne = (e) => {
        setDisplay("I learned how to use ReactJS and Java to create simple fullstack applications.");
    }
    const questionTwo = (e) => {
        setDisplay("What I want to learn is to deep dive more into different Javascript frameworks.");
    }
    const questionThree = (e) => {
        setDisplay("I will learn by watching youtube tutorials and actively participating and listening to the class discussions");
    }



    const clearClickHandler = (e) => {
        setDisplay("10 Things That Require Zero Talent");
        setDigit1(null);
        setDigit2(null);
        setOperator(null);
        setPrevDisplay("");
    }

    const showFullName = (e) => {
        console.log(e);
        setDisplay("KRISTENZ MINGOY");
        setDigit1(null);
        setDigit2(null);
        setOperator(null);
        setPrevDisplay("")
    }

    return(
        <div className="calculator-container">
            <div className="calculator-header">
                <p>Kristenz Mingoy - IT3A</p> 
            </div>
            <div className="display-container">
                <p>{prevDisplay}</p>
                <h2>{display}</h2>
            </div>
            <div className="button-container">
                <div className="calculator-keys">
                    <div className="questions">
                        <Key label={"What I learned?"} clickHandler={questionOne}/>
                        <Key label={"What I want to learn?"} clickHandler={questionTwo}/>
                        <Key label={"How will I learn?"} clickHandler={questionThree}/>
                    </div>
                    <div className='main-keys'>
                        <Key label={7} clickHandler={keySeven}/>
                        <Key label={8} clickHandler={keyEight}/>
                        <Key label={9} clickHandler={keyNine}/>
                        <Key label={4} clickHandler={keyFour}/>
                        <Key label={5} clickHandler={keyFive}/>
                        <Key label={6} clickHandler={keySix}/>
                        <Key label={1} clickHandler={keyOne}/>
                        <Key label={2} clickHandler={keyTwo}/>
                        <Key label={3} clickHandler={keyThree}/>
                        <Key label={"RESET"} clickHandler={clearClickHandler}/>
                        <Key label={0} clickHandler={keyZero}/>
                        <Key label={'NAME'} clickHandler={showFullName}/>  
                    </div>
                </div>
            </div>
                 

        </div>
    )
};