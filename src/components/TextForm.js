import React, { useState } from 'react'
import './TextForm.css'


export default function TextForm(props) {

    const changeHandler = (event) => {
        setText(event.target.value);
        text.length === 1 && props.showalert("Enjoy writting mode on this page keep writting!!!", "Success");
    }

    const upperCaseHandler = () => {
        setText(text.toUpperCase());
        props.showalert("Converted to uppercase!!!", "Success");
    }
    const lowerCaseHandler = () => {
        setText(text.toLowerCase());
        props.showalert("Converted to lowercase!!!", "Success");
    }
    const sentenceCase = () => {
        const words = text.toLowerCase().split(' ');
        const sentenceCased = words.map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
        );
        setText(sentenceCased.join(' '));

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
        let result = '';

        for (let i = 0; i < text.length - 1; i++) {
            if (text[i] === ' ' && text[i + 1] === ' ') { continue; }
            else { result += text[i]; }
        }
        if (text[text.length - 1] !== ' ') { result += text[text.length - 1]; }
        setText(text ? result : '');
    }

    const removeSpecialCharacters = () => {
        setText(text.replace(/[^a-zA-Z0-9 ]/g, ''));
    }

    const clearText = () => {
        setText('');
    }

    const BASE64 = 'base64';
    const base64 = () => {
        setText(Buffer.from(text).toString(BASE64));
    }

    const extractText = () => {
        const letters = text.match(/[a-z]|[A-Z]/g);
        if (letters === null) {
            setText('');
        } else {
            setText(letters.join(''));
        }
    }
    const extractNumbers = () => {
        const digits = text.match(/[0-9]/g);
        if (digits === null) {
            setText('');
        } else {
            setText(digits.join(''));
        }
    }
    const extractLinks = () => {
        const link = text.match(// eslint-disable-next-line
            /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim
        );
        if (link === null) {
            setText('');
        } else {
            setText(link.join(''));
        }
    }
    const [text, setText] = useState("");


    return (
        <div id="parent-form" className='text-form'>
            <h1>Enter The Text To Analyze Below: </h1>
            <div className="mb-3">
                <textarea style={props.myStyle} className="form-control" value={text} onChange={changeHandler} id="my" rows="6"></textarea>
            </div>
            <button title='Convert to UpperCase' className='btn btn-primary mx-1 my-1' onClick={upperCaseHandler}>UpperCase</button>
            <button title='Convert to LoweCase' className='btn btn-primary mx-1 my-1' onClick={lowerCaseHandler}>LowerCase</button>
            <button title='Convert to CamelCase' className='btn btn-primary mx-1 my-1' onClick={sentenceCase}>SentenceCase</button>
            <button title='Remove Extra Spaces' className='btn btn-primary mx-1 my-1' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button title='Remove all special charactors from text.' className='btn btn-primary mx-1 my-1' onClick={removeSpecialCharacters}>Remove Special Characters</button>
            <button title='Clear all text' className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear</button>
            <button title='Encode text to base64' className='btn btn-primary mx-1 my-1' onClick={base64}>Encode to base64</button>
            <button title='Extract numbers from text' className='btn btn-primary mx-1 my-1' onClick={extractNumbers}>Extract Numbers</button>
            <button title='Extract links from text' className='btn btn-primary mx-1 my-1' onClick={extractLinks}>Extract Links</button>
            <button title='Extract only text from whole text' className='btn btn-primary mx-1 my-1' onClick={extractText}>Extract Text</button>

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

            <div className='preview'>
                <h2 className='my-3'>Preview: </h2>
                <div className='format-buttons d-flex flex-nowrap'>
                    <button className='btn btn-primary my-1 mx-2' onClick={boldText}><strong>B</strong></button>
                    <button className='btn btn-primary my-1 mx-2' onClick={italicText}><i>I</i></button>
                    <button className='btn btn-primary my-1 mx-2' onClick={underlineText}><u>U</u></button>
                    <button className='btn btn-primary my-1 mx-2' onClick={copyText}><strong>Copy</strong></button>
                    <button className='btn btn-primary my-1 mx-2' onClick={cutText}><strong>Cut</strong></button>
                </div>
            </div>
            <p id="demo">{!text ? "<<Nothing to preview!!!!>>" : text}</p>
        </div>
    )
}

