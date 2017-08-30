import React from 'react';
import FinalForm from './FinalForm';

class FillForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            text:[],
            one:[],
            multiple:[],
            binary:[]
        }
        this.getTextData= this.getTextData.bind(this);
        this.getOneData= this.getOneData.bind(this);
        this.getMultipleData= this.getMultipleData.bind(this);
        FillForm.that= this;
    }

    getBinaryData(){
        var db = openDatabase('myadvoDB', '1.0', 'myAdvoDB', 2 * 1024 * 1024);
          db.transaction(function (tx) {
            tx
                .executeSql('SELECT * FROM binary', [], function (tx, results) {                                                                                                
                    FillForm.that.setState({
                        binary: results.rows
                    })
                });
        })
    }
    getMultipleData(){
         var db = openDatabase('myadvoDB', '1.0', 'myAdvoDB', 2 * 1024 * 1024);
          db.transaction(function (tx) {
            tx
                .executeSql('SELECT * FROM multiple', [], function (tx, results) {
                                 
                    FillForm.that.setState({
                        multiple: results.rows
                    })
                });
        })
    }

    getOneData(){
          var db = openDatabase('myadvoDB', '1.0', 'myAdvoDB', 2 * 1024 * 1024);
          db.transaction(function (tx) {
            tx
                .executeSql('SELECT * FROM one', [], function (tx, results) {
                                
                    FillForm.that.setState({
                        one: results.rows
                    })
                });
        })

    }

    getTextData(){
         var db = openDatabase('myadvoDB', '1.0', 'myAdvoDB', 2 * 1024 * 1024);
          db.transaction(function (tx) {
            tx
                .executeSql('SELECT * FROM Text', [], function (tx, results) {
                                  
                    FillForm.that.setState({
                        text: results.rows
                    })
                });
        })

    }

    componentDidMount(){
        this.getTextData();
        this.getBinaryData();
        this.getMultipleData();
        this.getOneData();
    }

    render() {       
        return (
            <div>
                <FinalForm 
                     text={this.state.text}
                     one={this.state.one}
                     multiple={this.state.multiple}
                     binary={this.state.binary}
                />
            </div>
        )
    }
}

export default FillForm;

FillForm.data = null;
FillForm.that= null;