import React,{Component} from 'react';
import './QuizQuestionButton.css';


class QuizQuestionButton extends Component{

handleClick(buttonText){
    this.props.clickHandler(this.props.button_text);
}

 render(){
     return (
        <li className='li'> <button className='button' onClick={this.handleClick.bind(this)}> {this.props.button_text} </button> </li>
     );
 }

}
export default QuizQuestionButton;