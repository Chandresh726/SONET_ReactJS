import React,{Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';
import './QuizQuestion.css';


class QuizQuestion extends Component {


    constructor(props){
        super(props);
        this.state = {incorrectAnswer:false};
    }

    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer){
            this.setState({incorrectAnswer:false})
            this.props.showNextQuestionHandler()
        }
        else{
            this.setState({incorrectAnswer:true})
        }
    }

    render(){
        return (
            <main>
                <section>
                    <p className='question'> {this.props.quiz_question.instruction_text} </p>
                </section>
                <ul>
                    {this.props.quiz_question.answer_options.map( (answer_option,index) => { 
                    return <QuizQuestionButton key={index} button_text ={answer_option} 
                    clickHandler={this.handleClick.bind(this)}/>
                    }
                    )}
                </ul>

                {this.state.incorrectAnswer ? <p className='error wrong'> Sorry, this is incorrect</p>: null  }
            </main>
        );
    }
}

export default QuizQuestion;