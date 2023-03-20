import React, {useState} from 'react'


export default function TextForm(a) {

    let myStyle = {
        color: a.darkmode === 'dark' ? 'white' : '#6d6c6c',
        backgroundColor: a.darkmode === 'dark' ? '#6d6c6c' : 'white'
      }

    const changeHandler= (event) => {
        setText(event.target.value);
        a.showalert("Enjoy writting mode on this page keep writting!!!", "Success");
    }

    const upperCaseHandler= () => {
        setText(text.toUpperCase());
        a.showalert("Converted to uppercase!!!", "Success");
    }
    const lowerCaseHandler= () => {
        setText(text.toLowerCase());
        a.showalert("Converted to lowercase!!!", "Success");
    }
    const boldText= () => {
        document.getElementById('demo').innerHTML = `<strong>${text}</strong>`;
    }
    const italicText= () => {
        document.getElementById('demo').innerHTML = `<i>${text}</i>`;
    }
    const underlineText= () => {
        if(text>0){
        document.getElementById('demo').innerHTML = `<u>${text}</u>`;
    }
}

    const copyText = () => {
        let copy = document.getElementById('demo').innerHTML;
        navigator.clipboard.writeText(copy);
        a.showalert("Text copied to clipboard!!!", "Success");
    }
    
    const cutText = () => {
        copyText();
        document.getElementById('demo').innerHTML = null;
        a.showalert("Text moved to clipboard!!!", "Success");
    }


    const [text, setText] = useState("");


  return (
    <div id="parent-form">
    <h1>TextArea: </h1>
        <div className="mb-3">
            <textarea style={myStyle} className="form-control" value={text} onChange={changeHandler}  id="my" rows="6"></textarea>
        </div>
        <button className='mx-1' onClick={upperCaseHandler}>UpperCase</button>
        <button className='mx-1' onClick={lowerCaseHandler}>LowerCase</button>
        
        <div className='container my-4'>
        {text.length>1 ? text.split(/\s+/).length : 0} words, {text.length} characters.
        </div>
    <h2>Preview: </h2>
    <p id="demo">{text}</p>
        <button className='mx-2' onClick={boldText}><strong>B</strong></button>
        <button className='mx-2' onClick={italicText}><i>I</i></button>
        <button className='mx-2' onClick={underlineText}><u>U</u></button>
        <button className='mx-2' onClick={copyText}><strong>Copy</strong></button>
        <button className='mx-2' onClick={cutText}><strong>Cut</strong></button>
    </div>
  )
}

