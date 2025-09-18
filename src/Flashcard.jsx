import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ question, answer}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [counter, setCounter] = useState(0);

    function handleFlip() {
        setIsFlipped(!isFlipped);
        setCounter(counter + 1)
    }

    return (
         <div className="flashcard"> 

            {isFlipped ? <p>{answer}</p> : <p>{question}</p>}
            <button onClick={handleFlip}>Guzik</button>
            <p>karta odwórcona {counter} razy</p>
         </div>

         
    )
}

export default Flashcard