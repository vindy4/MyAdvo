import React from 'react';
import Preview from './preview/Preview';
import TextQuestion from './question/TextQuestion';
import MultipleOneQuestion from './question/MultipleOneQuestion';
import QuestionCollection from './question/QuestionCollection';
import MultipleMultipleQuestion from './question/MultipleMultipleQuestion';
import BinaryQuestion from './question/BinaryQuestion';




class CreateForm extends React.Component{

    constructor(props){
        super(props);

          this.state={
            format:<TextQuestion add={this.addQuestion}/>,
            questions:[],
            db:null
        }
        this.questionFormat=this.questionFormat.bind(this);
        this.addQuestion=this.addQuestion.bind(this);
        this.createDB=this.createDB.bind(this);
        this.insertValue=this.insertValue.bind(this);
        
      CreateForm.that=this;
    }

    questionFormat(e){

        const type=e.target.getAttribute("value");
        
        switch(type){

            case "text":
                this.setState({
                    format:<TextQuestion  add={this.addQuestion}/>
                })                
                break;

            case "one":
                this.setState({
                    format:<MultipleOneQuestion  add={this.addQuestion}/>
                })                
                break;

            case "multiple":
                this.setState({
                    format:<MultipleMultipleQuestion  add={this.addQuestion}/>
                })                
                break;

            case "binary":
                this.setState({
                    format:<BinaryQuestion  add={this.addQuestion}/>
                })                
                break;
            default:              
                break;
        }
    }

    addQuestion(q){
       
        let that=CreateForm.that;
        const n  = that.state.questions.slice();
        that.insertValue(q);

        n.push(q);
        that.setState({
            questions:n
        })
    }

  createDB(){        

    var db = openDatabase('myadvoDB', '1.0', 'myAdvoDB', 2 * 1024 * 1024);
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Text (question,answer)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS one ( question,option1,option2,option3,opti' +
                'on4,option5,answer)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS multiple ( question,option1,option2,option3' +
                ',option4,option5,answer1,answer2,answer3,answer4,answer5)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS binary ( question,first,second,answer)');
    });

    this.setState({
        db:db
    })

  }

  insertValue(val){
        // processing for the multiple options

        let db = this.state.db;
        let values= '"'+ val.q+'",';
        let op='';
        for(let i=0;i<val.options.length;i++){          
            if(i===val.options.length-1){
                    values+=  '"'+ val.options[i].value +'"';
                    op+= "option"+(i+1);
            }else{
                    values+=  '"'+ val.options[i].value +'",';
                    op+= "option"+(i+1)+",";
            }

        }
    
        switch(val.type){
            case "text":
           
                 db.transaction(function(tx){                   
                     tx.executeSql('INSERT INTO Text (id,question) VALUES ("'+ val.q +'" )');
                 });
                break;

           case "one":           
                 db.transaction(function(tx){
                    tx.executeSql('INSERT INTO one (question,' + op+') VALUES ('+values +')');
                 });
                break;

           case "multiple":
                  db.transaction(function(tx){
                    tx.executeSql('INSERT INTO multiple (question,' + op+') VALUES ('+values +')');
                 });
                break;

            case "binary":
                 db.transaction(function(tx){
                    tx.executeSql('INSERT INTO binary (question,first,second) VALUES ("'+ val.q  +'","'+ val.first  +'","'+ val.second  +'")');
                 });
                break;
            default:
                break;
        }

      
  }

  componentDidMount(){
   this.createDB();

  }

    render(){
        
        return(
            <div >
                <div >
                    <div className="col-lg-3 col-md-3">
                        {/*  this is the section for showing the preview  */}
                        <Preview  items={this.state.questions}/>
                    </div>
                    <div className="col-lg-6 col-md-6 addQuestion">{/*  this is the section for showing the actual question  */} {/*<TextQuestion/>*/}
                      {this.state.format}
                    </div>
                    <div className="col-lg-3 col-md-3">{/*  this is the section for showing the types of question format available  */} {/*<QuestionCollection/>*/}
                        <QuestionCollection   select={this.questionFormat}/>
                    </div>
                    <div className="row">
                        {/*<div className="col-12 finalform">
                        <FinalForm/>
                        </div>*/}
                    </div>
                </div>;
            </div>
        )
    }
}
CreateForm.that=null;
export default CreateForm;
    
