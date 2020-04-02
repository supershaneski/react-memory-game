import React from 'react';
export default class Loader extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            class: 'normal',
        }

        this.handleClick = this.handleClick.bind(this)
        this.show = this.show.bind(this)
    }

    handleClick() {
        
        this.setState({
            class: 'normal',
        })
        
        setTimeout(() => {
            this.setState({
                class: 'normal hide-button',
            })
        }, 100)

        setTimeout(() => {
            this.props.onClick();
        }, 500)
    }
    
    show() {
        
        this.setState({
            class: 'normal show-button',
        })
        
    }

    render() {
        const buttonClass = this.state.class;
        return (
            <>
                <div className="game-loader">
                    <button 
                    className={buttonClass} 
                    onClick={this.handleClick}>
                        {this.props.text}
                    </button>
                </div>
                <style jsx>
                    {`                
                    .game-loader {
                        background-color: transparent;
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                        z-index: 2;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    }
                    button {
                        border: 2px solid #fff;
                        background-color: #000;
                        color: #fff;
                        border-radius: 8px;
                        padding: 10px 20px;
                        outline: none;
                        text-transform: uppercase;
                    }
                    button:hover {
                        background-color: #222;
                    }
                    button:active {
                        transform: translate(0px, 1px);
                    }
                    .hide-button {
                        transform: rotate(0deg) scale(1, 1);
                        opacity: 1.0;
                        animation-name: anim-button-hide;
                        animation-duration: 0.5s;
                        animation-fill-mode: forwards;
                    }
                    .show-button {
                        transform: rotate(720deg) scale(2.5, 2.5);
                        opacity: 1.0;
                        animation-name: anim-button-hide;
                        animation-direction: reverse;
                        animation-duration: 0.5s;
                        animation-fill-mode: forwards;
                    }
                    @keyframes anim-button-hide {
                        0% {
                            transform: rotate(0deg) scale(1, 1);
                            opacity: 1.0;
                        }
                        100% {
                            transform: rotate(720deg) scale(2.5, 2.5);
                            opacity: 0;
                        }
                    }
                    `}
                </style>
            </>
        )
    }
}