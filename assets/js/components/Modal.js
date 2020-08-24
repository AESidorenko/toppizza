import React, {Component} from 'react';

const Modal = ({handleClose, show, config}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h4>{config.title}</h4>
                <p>{config.text}</p>
                <button type="button" className="btn btn-primary float-right" onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};

export default Modal;