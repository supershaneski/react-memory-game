import React from 'react';
import MemoryGame from '../components/memorygame';
import { GameStatus } from '../components/gamestatus';
import Header from '../components/header';
import TextBox from '../components/textbox';
import Loader from '../components/loader';
import Clock from '../components/clock';

export default class Index extends React.Component{
    
    constructor() {

        super()

        this.game = React.createRef()
        this.loader = React.createRef()
        this.timer = null;
        
        this.state = {
            bestTime: 0,
            gameTime: 0,
            endGame: true,
            loaderText: 'Click to Play',
        }

        this.handleGame = this.handleGame.bind(this)
        this.startGame = this.startGame.bind(this)
        this.startTimer = this.startTimer.bind(this)

    }

    startTimer() {

        this.timer = setInterval(() => {

            const time = this.state.gameTime;

            this.setState({
                gameTime: time + 1,
            })

        }, 1000);

    }

    stopTimer() {

        clearInterval(this.timer)

        const time = this.state.gameTime;

        if(this.state.bestTime === 0) {
            
            this.setState({
                bestTime: time,
                endGame: true,
                loaderText: 'Try Again?',
            })

        } else {

            if(time < this.state.bestTime) {

                this.setState({
                    bestTime: time,
                    endGame: true,
                    loaderText: 'Try Again?',
                })
                
            } else {

                this.setState({
                    endGame: true,
                    loaderText: 'Try Again?',
                })

            }

        }

        this.loader.current.show()
    }

    handleGame(status) {
        
        if(status === GameStatus.Start) {
            
            this.setState({
                gameTime: 0,
                endGame: false,    
            })

            this.startTimer()

        } else if(status === GameStatus.Finish) {

            this.stopTimer()

        }
    }

    startGame() {

        this.game.current.shuffle()

    }

    render() {
        return (
            <>
            <Clock />
            
            <div className="game-header">
                <Header text="Memory-Game" />
            </div>

            <div className="game-container">
                <MemoryGame ref={this.game} onChange={this.handleGame} />
                {
                    this.state.endGame &&
                        <Loader 
                        ref={this.loader} 
                        text={this.state.loaderText}
                        onClick={this.startGame} />
                }
            </div>

            <div className="game-display">
                
                <div className="best-display">
                    <TextBox caption="Best" value={this.state.bestTime} />
                </div>

                <div className="timer-display">
                    <TextBox caption="Time" value={this.state.gameTime} align="right" />
                </div>
                
            </div>

            <style jsx>
                {`
                .game-container {
                    background-color: transparent;
                    position: relative;
                    width: 212px;
                    height: 300px;
                    padding: 0px 10px 0px 10px;
                    margin: 0px auto;
                }
                .game-header {
                    position: relative;
                    width: 212px;
                    padding: 10px;
                    margin: 0px auto;
                }
                .game-display {
                    background-color: transparent;
                    position: relative;
                    width: 212px;
                    padding: 5px 10px 0px 10px;
                    margin: 0px auto;
                }
                .best-display, .timer-display {
                    position: relative;
                    width: 106px;
                    float: left;
                }
                `}
            </style>            
            </>
        )
    }        
}