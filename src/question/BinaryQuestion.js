import React from 'react';

class BinaryQuestion extends React.Component {
       constructor(props) {
        super(props);
        this.state={
            value:'',
            first:'',
            second:''
        }
        
        this.onsubmit=this.onsubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onClear=this.onClear.bind(this);
        this.onFirstChange=this.onFirstChange.bind(this);
        this.onSecondChange=this.onSecondChange.bind(this);
    }

    onChange(e){
        this.setState({
            value:e.target.value
        })        
    }

    onsubmit(){
        let question={
            type:"binary",
            q:this.state.value,
            first:this.state.first,
            second:this.state.second
        }
        this.props.add(question);
       this.onClear();
    }

    onClear(){
        this.setState({
            value:''
        })    
    }

    onFirstChange(e){
          this.setState({
            first:e.target.value
        })      

    }

     onSecondChange(e){
          this.setState({
            second:e.target.value
        })      
        
    }

    render() {
        return (
            <div id="binaryQuestion">
                <h4>
                    Binary Choice</h4>
                <input type="text" placeholder="please enter your question" onChange={this.onChange}/>

                <i className="fa fa-circle-thin"></i>                
                <input type="text" id="radioAdd" placeholder="enter option 1"  onChange={this.onFirstChange} value={this.state.first} />
                <i className="fa fa-circle-thin"></i>
                <input type="text" id="radioAdd" placeholder="enter option 2" onChange={this.onSecondChange} value={this.state.second} />


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

export default BinaryQuestion;