import { Component } from 'react';
import './ControlB.scss'


class Controllers extends Component {

    render() {
        const {openModalOne,openModalTwo} = this.props;

        return (
            <div className="widget-controllers">
                <div className="button-container">
                    <button className="button button2" type="button" onClick={openModalOne} >Open first modal</button>
                    <button className="button button2" type="button" onClick={openModalTwo} >Open second modal</button>
                </div>
            </div>
        )
    }
}

export default Controllers