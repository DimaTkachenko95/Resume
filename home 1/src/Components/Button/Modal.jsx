import {Component} from "react";
import "./Button.scss"


class Modal extends Component {
    render() {
        const {closeModal,modalOne,modalTwo,textHeaderOne,textHeaderTwo} = this.props;
    return(
        <div className="modal-wrapper" onClick={closeModal}>
            <div className="modal" onClick={(e)=> e.stopPropagation()}  >
                <div className="modal-box">
                    <button type="button" className="modal-close" >
                        <h1 className="hedername"> {textHeaderOne}{textHeaderTwo} <span className="icon" onClick={closeModal}>&#10006;</span></h1>
                    </button>
                    <div className="modal-header">
                        <p>{modalOne}{modalTwo}</p>
                    </div>
                    <div className="modal-footer">
                        <div className="button-wrapper">
                            <button className="btn" type="button">OK</button>
                            <button className="btn" type="button" onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}
    export default Modal
