import React from "react"
import Die from "./components/Die.js"
export default function App() {

    const [dice, setDice] = React.useState(allNewDice())

    

    function allNewDice() {
        const diceArray = [];

        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.ceil(Math.random() * 6)
            diceArray[i] = randomNumber
            console.log(diceArray);
        }
        return diceArray
    }

    function rerollDice() {
        setDice(allNewDice())
    }
    const diceElements = dice.map(die => <Die value={die} />)

    return (
        <main>
            <div className="dice-container">  
               {diceElements}
            </div>
            <button className="reroll-button" onClick={rerollDice}>Roll Dice</button>  
        </main>
        
    )
}