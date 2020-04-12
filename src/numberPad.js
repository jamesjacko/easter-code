import React, { Component } from 'react'
import './zelda.mp3'

class NumberPad extends Component{
    constructor(props){
        super(props)
        this.state = {
            code: props.code,
            guessed: "",
            incorrect: false,
            correct: false
        }
    }

    guessSection(){
        const len = this.state.guessed.length
        let string = ""
        for(let i = 0; i < this.state.code.length; i++)
            if(i < len)
                string += this.state.guessed[i]
            else   
                string += "-"
        const classBuilder = (this.state.incorrect)? "guess incorrect": (this.state.correct)? "guess correct": "guess"
        return(
            <p className={ classBuilder }>{ string }</p>
        )
    }

    guess(number){
        if(this.state.guessed.length < this.state.code.length){
            let newVal = this.state.guessed + "" + number
            this.setState({
                guessed: newVal
            })
        }
    }

    checkCode(){
        if(this.state.guessed == this.state.code){
            this.setState({
                correct: true
            })

            setTimeout(() => {
                this.setState({correct: false, guessed: ""})
            }, 500)

            document.body.classList.add("correct")
            const audioEl = document.getElementsByClassName("audio-element")[0]
            audioEl.play()
        } else {

            this.setState({
                incorrect: true
            })

            setTimeout(() => {
                this.setState({incorrect: false, guessed: ""})
            }, 500)
        }
    }

    numberPad(){
        let buttons = [];
        for(let i = 0; i < 9; i++)
            buttons.push(<button onClick={ () => this.guess(i+1) } key={ "button_" + i }>{ i + 1 }</button>)
        return (
            <div className="numberPad">
                { buttons }
            </div>
        )
    }

    render(){
        return(
            <div className="numberPadContainer">
                { this.guessSection() }
                { this.numberPad() }
                <button className="checkCode" onClick={ () => this.checkCode() }>Check</button>
                <audio className="audio-element">
                    <source src="./zelda.mp3"></source>
                </audio>
            </div>
        )
    }
}

export default NumberPad