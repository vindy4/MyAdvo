import React from 'react';

class MultipleMultipleQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            options: [{
                index:1,value:''
            }]
        }
        this.onsubmit=this.onsubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onClear=this.onClear.bind(this);
        this.addOption=this.addOption.bind(this);
        this.changeOption=this.changeOption.bind(this);
    }

    onChange(e) {
        this.setState({value: e.target.value})
    }

    onsubmit() {
        let question = {
            type: "multiple",
            q: this.state.value,
            options:this.state.options
        }

        this.props.add(question);
        this.onClear();
    }

    onClear() {
        this.setState({value: '',  options: [{
                index:1,value:''
            }]})
    }

    addOption() {
         let n = this.state.options;         
         n.push({
             index:n.length+1,
             value:''
         })
         this.setState({
             options : n
         })    
       
    }


    changeOption(e){
        
        const newoption= this.state.options.map( (item,index) =>  {
            if(index ==e.target.getAttribute("name")){
                item["value"]= e.target.value
                return item;                
            }
            else{
                return item;
            }           
        } )

        this.setState({
            options:newoption
        })

    }

    render() {

        const option = this
            .state
            .options
            .map((item, index) => {
                return (
                    <div key={index} >
                        <i className="fa fa-circle-thin" ></i>
                        <input type="text"  placeholder="enter option" className="option"
                         value={item.value}  name={index}  onChange={this.changeOption} />
                    </div>
                )
            })

        return (
            <div id="multipleMultipleQuestion">
                <h4>Multiple choice Multiple correct</h4>
                <input
                    type="text"
                    placeholder="please enter your question"
                    value={this.state.value}
                    onChange={this.onChange}/> {option}

                <span  onClick={this.addOption}>
                    <i className="fa fa-circle-thin"></i> &nbsp;
                Add option</span>

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

export default MultipleMultipleQuestion;