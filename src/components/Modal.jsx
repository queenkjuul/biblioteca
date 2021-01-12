import React, { useEffect, useState } from 'react';


// content is an array, each element of which will display as a single line of text
// confirm is a function to run when the Confirm button is pressed
// deny is a function to run when the Cancel button is pressed
// isCritical controls the appearance of the Confirm button
// changeFunction, if provided, causes the component to display a text box
//      with the `onChange = {changeFunction}` property
const Modal = ({content=["Are you sure?"], confirm, deny, isCritical, changeFunction}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    return (
        <article className="modal__background">
            <div className="modal__card">
                {content.map((line, i) => (
                    <p className="modal__item" key={i}>{line}</p>
                ))}

                {changeFunction ? 
                    <form>
                        <input className="modal__input" type="text" name="input" id="input" onChange={changeFunction}></input>
                    </form>
                : ''}

                <div className="modal__controls">
                    <button className={isCritical ? `btn--critical` : `btn`} onClick={confirm}>CONFIRM</button>
                    <button className="btn--secondary" onClick={deny}>CANCEL</button>
                </div>
            </div>
        </article>
    );
}

export default Modal;