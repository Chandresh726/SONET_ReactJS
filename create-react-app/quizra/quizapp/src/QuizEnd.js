import React,{Component}  from 'react';
import './QuizEnd.css';

class QuizEnd extends Component{

    handleResetClick(){
        this.props.resetClickHandler()
    }


    render(){
        return (
            <div>
                <p className='thnx'> Thanks for taking the quiz!</p>
                <a className='reset' href=''> Reset the Quiz </a>
            </div>
        );
    }

}

export default QuizEnd