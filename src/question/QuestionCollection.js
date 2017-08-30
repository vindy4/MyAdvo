import React from 'react';

function QuestionCollection(Props) {

    return (
        <div id="questionCollection">
            <h4 title="click me to add"
                 onClick={Props.select} 
                 value="text">
                Text Question
            </h4>

            <h4 title="click me to add"
                 onClick={Props.select}
                 value="one">
                 Multiple choice one answer
            </h4>

            <h4 title="click me to add"
                onClick={Props.select} 
                value="multiple">
                Multiple choice multiple answers
            </h4>

            <h4 title="click me to add"
                onClick={Props.select}
                value="binary">
                Binary Yes/No answer
            </h4>
        </div>
    )
}

export default QuestionCollection;