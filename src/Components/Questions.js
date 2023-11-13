import React, { useState } from 'react';
import './Questions.css'; // Import the CSS file

function Questions({ data }) {
    const [colorId,setColorId] = useState()
    const [answers, setAnswer] = useState([])
    const handleAnswer = (item,id) => {
        if(answers.length >0){
           const checkAvailability =  answers.filter((val) => +val[0] !==item)
           setAnswer([...checkAvailability,`${item}${id}`])
        }
        else{
            setAnswer((prev) => [...prev,`${item}${id}`])
        }
            console.log(item)
            console.log(id)
    }
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="questionContainer2">
          <p className="questionText">{index +1}) {item.question}</p>
          <div className="answerContainer">
            {item.answers.map((val, idx) => (
              <div key={idx} className="answerText" style={{backgroundColor:answers.includes(`${item.id}${idx}`) && '#DA0E3F' }} onClick={()=>handleAnswer(item.id,idx)}>
               {idx +1}) {val}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Questions;
