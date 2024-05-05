import React from 'react';
import Card from './Card';
import Button from './Button';
import './Errorcomp.css';

function Errorcomp(props) {
  return (
    <div>
        <div></div>
        <div className='backdrop' onClick={props.onConform}></div>
    <Card className="modal card">
        <header className='header'>
            <h2>{props.title}</h2>
        </header>
        <div className='content'>
           <p>{props.message}</p>
        </div>
        <footer className='action'>
            <Button onClick={props.onConform}>Okay</Button>
        </footer>
    </Card>
    </div>
    
  )
}

export default Errorcomp
