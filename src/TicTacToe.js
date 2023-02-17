import React, { useState } from "react";
import '../src/ticractoe.css'


const Component = () =>{
    const [turn, setTurn] = useState('x')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()

    const checkWinner = (squares) =>{
        let formulas = {
            across: [
                [0, 1, 2], 
                [3, 4, 5],
                [6, 7, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]

            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ]
        }

        for(let versions in formulas){
            formulas[versions].forEach((element) => {
                if (
                    squares[element[0]] === '' ||
                    squares[element[1]] === '' ||
                    squares[element[2]] === '' 
                ){
                    //do nothing
                }else if(squares[element[0]] === squares[element[1]] &&
                         squares[element[1]] === squares[element[2]]){
                            setWinner(squares[element[0]])
                        }
            });
        }
    }

  

    const Click = (num) =>{
        if(cells[num] !== ''){
            alert('already clicked')
            return
        }


        let squares = [...cells]

        if(turn === 'x'){
            squares[num] = 'x'
            setTurn('o')
        }else{
            squares[num] = 'o'
            setTurn('x')
        }
        setCells(squares)
        checkWinner(squares)
    }
    const restart = () =>{
        setWinner(null)
        setCells(Array(9).fill(''))
    }

    const Cell = ({num}) =>{
        return <td onClick={() => Click(num)}>{cells[num]}</td>
    }
    return(
        <div className="container">
            <table>
                Turn: {turn}
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
            {winner && (
            <>
            <h1>
                {winner} is the winner
            </h1>
            <button onClick={() => restart()}>restart</button>
            </>)}
            
        </div>
    )
}

export default Component;