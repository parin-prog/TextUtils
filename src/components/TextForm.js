import React, { useState } from 'react'
import './TextForm.css'


export default function TextForm(props) {

    const changeHandler = (event) => {
        setText(event.target.value);
        props.showalert("Enjoy writting mode on this page keep writting!!!", "Success");
    }

    const upperCaseHandler = () => {
        setText(text.toUpperCase());
        props.showalert("Converted to uppercase!!!", "Success");
    }
    const lowerCaseHandler = () => {
        setText(text.toLowerCase());
        props.showalert("Converted to lowercase!!!", "Success");
    }
    const boldText = () => {
        document.getElementById('demo').innerHTML = `<strong>${text}</strong>`;
    }
    const italicText = () => {
        document.getElementById('demo').innerHTML = `<i>${text}</i>`;
    }
    const underlineText = () => {
        if (text > 0) {
            document.getElementById('demo').innerHTML = `<u>${text}</u>`;
        }
    }

    const copyText = () => {
        let copy = document.getElementById('demo').innerHTML;
        navigator.clipboard.writeText(copy);
        props.showalert("Text copied to clipboard!!!", "Success");
    }

    const cutText = () => {
        copyText();
        document.getElementById('demo').innerHTML = null;
        props.showalert("Text moved to clipboard!!!", "Success");
    }

    const removeExtraSpaces = () => {
        setText(text.split(/\s+/));
    }

    const [text, setText] = useState("");


    return (
        <div id="parent-form" className='text-form'>
            <h1>Enter The Text To Analyze Below: </h1>
            <div className="mb-3">
                <textarea style={props.myStyle} className="form-control" value={text} onChange={changeHandler} id="my" rows="6"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={upperCaseHandler}>UpperCase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={lowerCaseHandler}>LowerCase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={removeExtraSpaces}>Remove Spaces</button>
            <div className='my-4'>
                <h2 className='my-3'>Your Text Summary:</h2>
                <div className='summary-info mx-1'>
                <p>
                    <b>
                        {
                            text
                                .replace(/\s/)
                                .split(' ')
                                .filter((value) => value !== '').length
                        }
                    </b>{' '}
                    words,
                    <b> {text.trim().length}</b> characters,
                    <b>
                        {' '}
                        {
                            text
                                .replace(/\n/g, '.')
                                .split('.')
                                .filter((value) => value !== '').length
                        }
                    </b>{' '}
                    statements,
                    <b> {text.split('?').length - 1}</b> questions,{' '}
                    <b>{text.split('!').length - 1}</b> exclamations.
                </p>
                <p>
                    {0.08 *
                        text.split(' ').filter((element) => {
                            return element.length !== 0;
                        }).length}{' '}
                    Minutes read
                </p>
                </div>
            </div>
            <div className='format-buttons'>
            <button className='btn btn-primary my-1 mx-2' onClick={boldText}><strong>B</strong></button>
            <button className='btn btn-primary my-1 mx-2' onClick={italicText}><i>I</i></button>
            <button className='btn btn-primary my-1 mx-2' onClick={underlineText}><u>U</u></button>
            <button className='btn btn-primary my-1 mx-2' onClick={copyText}><strong>Copy</strong></button>
            <button className='btn btn-primary my-1 mx-2' onClick={cutText}><strong>Cut</strong></button>
            </div>
            <h2 className='my-3'>Preview: </h2>
            <p id="demo">{!text ? "<<Nothing to preview!!!!>>" : text}</p>
        </div>
    )
}

