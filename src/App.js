import './App.css';
import {Component} from "react";
import Modal from "./Components/Button/";
import Controllers from "./Components/Controllers/Controlers";








class App extends Component {
state = {
    isModalOne: false,
    isModalTwo: false,

}
    hanrlerModalOne = () => {
    this.setState((prevState) => {
        return{
            ...prevState,
            isModalOne: !prevState.isModalOne
        }
    })
}
    hanrlerModalTwo = () => {
        this.setState((prevState) => {
            return{
                ...prevState,
                isModalTwo: !prevState.isModalTwo
            }
        })
    }

    // closeModal = ()  => {
    // this.setState((preState) =>{
    //     return{
    //         ...preState,
    //         isCloseModal: !preState.isCloseModal
    //     }
    // })
    // }
    hideModal = () => {
        this.setState({ modal: false })
    }

    render (){
    const {isModalOne,isModalTwo} = this.state;

        return(

            <div>
                <Controllers openModalOne={this.hanrlerModalOne} openModalTwo={this.hanrlerModalTwo}   />
                {isModalOne && <Modal close = {this.hideModal}   modalOne={'Ваши действия?'} textHeaderOne={' Желаете добавить товар в корзину?'} closeModal={this.hanrlerModalOne}  />}
                {isModalTwo && <Modal  modalTwo={'Ваши действия?'} textHeaderTwo={' Желаете удалить товар из корзины?'}  closeModal={this.hanrlerModalTwo}  />}


            </div>
        )
    }

}

export default App;


