import React from 'react';

export default function Card(props) {

    let classItems = ['card'];
    if(props.flip) classItems.push('flipped');
    const cardClassList = classItems.join(' ');        
    
    let classCellItems = ['cell'];
    if(props.hide) classCellItems.push('cell-hide');
    const cellClassList = classCellItems.join(' ');

    const onClick = () => {
    
        if(props.hide > 0) return;
        props.onClick(props.src)

    }

    return (
        <>
            <div onClick={onClick} className="card-container">
                <div className={cardClassList}>
                    <div className={cellClassList}>
                        <img className="front" src={`/${props.src}.jpg`} />
                        <img className="back" src="/back.jpg" />
                    </div>                    
                </div>
            </div>
            <style>
                {`
                .card-container {
                    background-color: transparent;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 53px;
                    height: 75px;
                    cursor: pointer;
                }
                .card {
                    position: relative;
                    width: 53px;
                    height: 75px;
                    transition: .5s;
                    transform-style: preserve-3d;
                }
                .card img {
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                }
                .front {
                    z-index: 2;
                    transform: rotateY(180deg);
                }
                .back {
                    z-index: 1;
                    transform: rotateY(0deg);
                }
                .flipped {
                    transform: rotateY(180deg);
                }

                .cell {
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 100%;
                    height: 100%;
                    transition: 1s;
                }
                .cell-hide {
                    animation-name: anim-cell-hide;
                    animation-duration: 1s;
                    animation-fill-mode: forwards;
                }
                @keyframes anim-cell-hide {
                    0% {
                        transform: rotate(0deg) scale(1, 1);
                    }
                    100% {
                        transform: rotate(720deg) scale(0, 0);
                    }
                }
                `}
            </style>
            </>
    )

} 


class Cardo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 0,
            hide: 0,
        }
        this.click = this.click.bind(this)
    }
    
    click() {
        
        if(this.props.hide > 0) return;
        this.props.onClick(this.props.src)

    }
    
    render() {
        
        let classItems = ['card'];
        if(this.props.flip) classItems.push('flipped');
        const cardClassList = classItems.join(' ');        
        
        let classCellItems = ['cell'];
        if(this.props.hide) classCellItems.push('cell-hide');
        const cellClassList = classCellItems.join(' ');

        return (
            <>
            <div onClick={this.click} className="card-container">
                <div className={cardClassList}>
                    <div className={cellClassList}>
                        <img className="front" src={`/${this.props.src}.jpg`} />
                        <img className="back" src="/back.jpg" />
                    </div>                    
                </div>
            </div>
            <style>
                {`
                .card-container {
                    background-color: royalblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 53px;
                    height: 75px;
                    /*border: 1px solid red;
                    box-sizing: border-box;*/
                    cursor: pointer;
                    /*transition: 1s;*/
                }
                .card {
                    position: relative;
                    width: 53px;
                    height: 75px;
                    /*transform: scale(1.0, 1.0) rotate(0deg);*/
                    transition: .5s;
                    transform-style: preserve-3d;
                }
                .card img {
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                }
                .front {
                    z-index: 2;
                    transform: rotateY(180deg);
                }
                .back {
                    z-index: 1;
                    transform: rotateY(0deg);
                }
                .flipped {
                    transform: rotateY(180deg);
                }

                .cell {
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 100%;
                    height: 100%;
                    transition: 1s;
                }
                .cell-show {
                    animation-name: anim-cell-hide;
                    animation-direction: reverse;
                    animation-duration: 1s;
                    animation-fill-mode: forwards;
                }
                .cell-hide {
                    animation-name: anim-cell-hide;
                    animation-duration: 1s;
                    animation-fill-mode: forwards;
                }
                @keyframes anim-cell-hide {
                    0% {
                        transform: rotate(0deg) scale(1, 1);
                    }
                    100% {
                        transform: rotate(720deg) scale(0, 0);
                    }
                }
                `}
            </style>
            </>
        )
    }
}
Card.defaultProps = {
    src: 'luffy.jpg',
    flip: false,
    hide: false,
}