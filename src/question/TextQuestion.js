import React from 'react';

//  Question component which has text based answer

class TextQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            value:''
        }
        
        this.onsubmit=this.onsubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onClear=this.onClear.bind(this);
    }

    onChange(e){
        this.setState({
            value:e.target.value
        })        
    }

    onsubmit(){
        let question={
            type:"text",
            q:this.state.value
        }
        this.props.add(question);        
        this.onClear();
    }

    onClear(){
        this.setState({
            value:''
        })    
    }

    render() {
        return (
            <div id="textQuestion">
                <h4>Text Based Question</h4>
                <input 
                        type="text"
                         placeholder="please enter you question here"  
                         value={this.state.value}
                         onChange={this.onChange}  />
                <button className="btn add" onClick={this.onsubmit}>
                    <i className="fa fa-plus"></i>
                </button>
                <button className="btn remove" onClick={this.onClear}>
                    <i className="fa fa-times"></i>
                </button>
            </div>
        )
    }
}

export default TextQuestion;
