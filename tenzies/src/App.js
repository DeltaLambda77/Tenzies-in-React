import React from "react"
import Die from "./components/Die.js"
export default function App() {

    allNewDice()

    function allNewDice() {
        const diceArray = [];

        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.ceil(Math.random() * 6)
            diceArray[i] = randomNumber
            console.log(diceArray);
        }
        return diceArray
        
    }

    return (
        <main>
            <div className="dice-container">  
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
                <Die 
                    value={1}
                />
            </div>  
        </main>
    )
}