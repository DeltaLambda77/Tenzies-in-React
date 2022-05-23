import React from "react"
import Die from "./components/Die.js"
import {nanoid} from "nanoid"
export default function App() {

    const [dice, setDice] = React.useState(allNewDice())

    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You Won!")
        }
    }, [dice])

    function newDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const diceArray = [];

        for (let i = 0; i < 10; i++) {
            diceArray[i] = (newDie())
        }
        return diceArray
    }

    function rerollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : newDie()
        }))
    }

    const diceElements = dice.map(die => 
        <Die 
            value={die.value} 
            key={die.id} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />)

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id 
            ? {...die, isHeld: !die.isHeld}
            : die
        }))
    }

    return (
        <main>
            <h1>Tenzies</h1>
            <p>Roll until all dice have the same value!</p>
            <div className="dice-container">  
               {diceElements}
            </div>
            <button className="reroll-button" onClick={rerollDice}>Roll Dice</button>  
        </main>
        
    )
}