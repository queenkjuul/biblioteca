import React, { useEffect, useState } from 'react';

const Alert = ({content, confirm, deny, isCritical}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    
    return (
        <article className="alert__background">
            <div className="alert__card">
                <h1>{content}</h1>
                <div className="alert__controls">
                    <button className={isCritical ? `btn--critical` : `btn`} onClick={confirm}>CONFIRM</button>
                    <button className="btn--secondary" onClick={deny}>CANCEL</button>
                </div>
            </div>
        </article>
    );
}

export default Alert;