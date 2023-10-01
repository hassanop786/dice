import React, { useEffect, useState } from 'react'
import styled from 'styled-components' 


const Game = () => {

  const GamerError = document.getElementById('error')
  const [imageNo, setImageNo] = useState(6)
  const [score, setScore] = useState(0)
  const [selctedValue, setSelctedValue] = useState()
  const selectedNumber = [1,2,3,4,5,6];
  const imgNoGenerator = ()=>{
    const imgNo = Math.floor(Math.random()*(6)+1);
    setImageNo(imgNo);

    if(imgNo === selctedValue){
      setScore(score+imgNo)
      setSelctedValue(undefined)
    }
    else if(selctedValue === undefined){
      setImageNo(6)
      return  GamerError.style.display='block'
    }
    else{
      setScore(score-imgNo)
    }
  }
  const numberSelectorHandler = (value)=>{
    setSelctedValue(value);
    return  GamerError.style.display='none'
  }

  const Reset = ()=>{
    setSelctedValue(undefined)
    setScore(0)
    setImageNo(6)
    return  GamerError.style.display='none'
  }

 
  return (
   <>
   <header className="header">
    <div className="score">
        <p className="score-no">{score}</p>
        <p className="text">Total Score</p>
    </div>
    <div>
    <p className='para color-red shake' id='error'>Please Select a Number</p>
    <div className="numbers">
    {
      selectedNumber.map((i)=>(
         <Box key={i} onClick={()=>numberSelectorHandler(i)} isselected={i === selctedValue}>
          {i}
        </Box>
      ))
    }
    </div>
    </div>
   </header>
   <main className='main-content'>
    <p className='para'>Click on Dice to Play</p>
   <img src={`assets/dice/dice_${imageNo}.png`} alt="dice" onClick={imgNoGenerator} />
    <button className='btn' onClick={Reset}>Reset Game</button>
    <button className='btn'>Show Rules</button>
   </main>
   </>
  )
}

export default Game
const Box = styled.div`
background-color:${(props)=>(props.isselected? 'black' : 'white')};
color:${(props)=>(props.isselected? 'white' : 'black')};
border:2px solid black;
height:40px;
width:40px;
display: flex;
align-items: center;
justify-content: center;
`