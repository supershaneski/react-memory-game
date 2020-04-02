import React from 'react';
export default function Header(props) {
    //const textString = "Header";
    //const arrayText = textString.split('');
    
    const arrayText =  (function() {
        return props.text.split('').map((item) => {
            let hilite = '';
            if(item.indexOf('-') < 0) {
                hilite = ('ao').indexOf(item.toLowerCase())>=0?'header-red':'header-normal';
            }
            return {
                text: item,
                hilite: hilite,
            }
        })
    })();

    return (
        <>
            <header>
                { 
                    arrayText.map((item, index) => {
                        return (
                            <span key={index} className={item.hilite}>
                                { item.text }
                            </span>
                        )
                    })
                 }
            </header>
            <style jsx>
                {`
                header {
                    position: relative;
                    text-align: center;
                }
                span {    
                    font-family: 'Arial black', Arial, Verdana, Helvetica, sans-serif;
                    text-transform: uppercase;
                    color: #000;
                    margin: 0px 0px 0px 1px;
                    padding: 0px 0px 0px 5px;
                    font-weight: 600;
                }
                span.header-red {
                    background-color: #f00;
                    padding: 5px 3px 7px 5px;
                    font-size: 0.9em;
                    color: #fff;
                    border-radius: 3px;
                }
                span.header-normal {
                    background-color: #000;
                    padding: 5px 3px 5px 5px;
                    font-size: 0.7em;
                    color: #fff;
                    border-radius: 3px;
                }
                `}
            </style>
        </>
    )
}