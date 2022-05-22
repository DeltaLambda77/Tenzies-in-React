import React from "react"
import Die from "./components/Die.js"
import {nanoid} from "nanoid"
export default function App() {

    const [dice, setDice] = React.useState(allNewDice())

    

    function allNewDice() {
        const diceArray = [];

        for (let i = 0; i < 10; i++) {
            diceArray[i] = ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            })
            console.log(diceArray);
        }
        return diceArray
    }

    function rerollDice() {
        setDice(allNewDice())
    }
    const diceElements = dice.map(die => <Die value={die.value} key={die.id} />)

    return (
        <main>
            <div className="dice-container">  
               {diceElements}
            </div>
            <button className="reroll-button" onClick={rerollDice}>Roll Dice</button>  
        </main>
        
    )
}