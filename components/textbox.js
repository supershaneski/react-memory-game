import React from 'react';
export default function TextBox(props) {
    
    const value = props.value;
    
    let strDisplay = "0000";
    if(value < 10) {
        strDisplay = "000" + value;
    } else if(value >= 10 && value < 100) {
        strDisplay = "00" + value;
    } else if(value >= 100 && value < 1000) {
        strDisplay = "0" + value;
    } else {
        strDisplay = value;
    }

    return (
        <>
            <div className="textbox-container">
                <span className="textbox-caption">{ props.caption }:</span>
                <span className="textbox-text">{ strDisplay }</span>
            </div>
            <style jsx>
                {`
                .textbox-container {
                    text-align: ${props.align}
                }
                span {
                    font-family: "Comic Sans MS", Helvetica, Arial, sans-serif;
                    font-size: 0.9em;                    
                }
                .textbox-caption {
                    font-weight: 600;
                    text-transform: uppercase;
                    padding-right: 5px;
                }
                `}
            </style>
        </>
    )
}
TextBox.defaultProps = {
    value: 0,
    align: "left",
}