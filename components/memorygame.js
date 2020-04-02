import React from 'react';
import _ from 'lodash';
import Card from './card';
import { GameStatus } from './gamestatus';

class MemoryGame extends React.Component {

    constructor() {
        super()

        this.selected = [];
        this.count = 0;

        this.state = {
            items: [],
            //count: 0,
        }
        
        this.handleClick = this.handleClick.bind(this)
        this.shuffle = this.shuffle.bind(this)
        this.procSelected = this.procSelected.bind(this)
    }

    componentDidMount() {

        let images = [
            "brook",
            "chopper",
            "luffy",
            "nami",
            "robin",
            "sanji",
            "ussop",
            "zoro",
        ]
        
        let cards = [];
        for(let i = 0; i < 16; i++) {
            cards.push({
                image: images[i%8],
                flip: false,
                hide: false,
            })
        }

        this.setState({
            items: cards,
            //count: 0,
        })

    }

    shuffle() {
        
        this.count = 0;

        let cards = this.state.items.slice(0)
        this.setState({
            items: cards.map(item => {
                return {
                    image: item.image,
                    flip: false,
                    hide: false,
                }
            }),
        })

        setTimeout(() => {

            let cards = this.state.items.slice(0)
            cards = _.shuffle(cards);

            this.setState({
                items: cards,
            })
            
            this.props.onChange(GameStatus.Start)

        }, 500)
        
    }
    
    handleClick(index, skey) {
        
        if(this.selected.length === 0) {

            const cards = this.state.items.slice(0)
            cards[index].flip = true;
            
            this.selected.push({
                index: index,
                image: skey
            })

            this.setState({
                items: cards,
            })

        } else if(this.selected.length === 1){

            const previndex = this.selected[0].index;
            if(previndex === index) return;

            const cards = this.state.items.slice(0)
            cards[index].flip = true;
            
            this.selected.push({
                index: index,
                image: skey
            })

            this.setState({
                items: cards,
            })

            setTimeout(() => {
                this.procSelected()
            }, 500)

        }
    }

    procSelected() {

        const cards = this.state.items.slice(0)

        const previndex = this.selected[0].index;
        const previmage = this.selected[0].image;
        const curindex = this.selected[1].index;
        const curimage = this.selected[1].image;
        
        //let count = this.count; //this.state.count;

        if(previmage === curimage) {
            
            cards[previndex].hide = true;
            cards[curindex].hide = true;
            
            this.count++;
            
            if(this.count >= 8) {

                this.props.onChange(GameStatus.Finish)
                
            }
            
        } else {

            cards[previndex].flip = false;
            cards[curindex].flip = false;

        }

        this.selected = [];

        this.setState({
            items: cards,
            //count: count,
        })
        

    }

    render() {
        const items = this.state.items;
        return (
            <>
            <div className="memory-game">
                {
                    items.map((item, index) => {
                        return (
                            <Card 
                            key={index} 
                            flip={item.flip} 
                            hide={item.hide} 
                            onClick={simg => this.handleClick(index, simg)} 
                            src={item.image} />
                        )
                    })
                }
            </div>
            <style>
            {`
            .memory-game {
                background-image: linear-gradient(to bottom right, black, #666);
                position: relative;
                width: 212px;
                height: 300px;
                display: flex;
                flex-wrap: wrap;
            }
            `}
            </style>
            </>
        )
    }
}

export default MemoryGame;