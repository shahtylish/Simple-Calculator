function storeValues(num){
    var question = document.getElementById("question");
    question.value += num;
}

function del(){
    var question = document.getElementById("question");
    var ques = question.value;
    if(ques.length > 0){
        ques = ques.substring(0, ques.length -1);
        question.value = ques;
    }
}

function clearAll(){
    document.getElementById("question").value = " ";
    document.getElementById("result").value = null;
}

function calculate(){
    var question = document.getElementById("question").value;
    var result = document.getElementById("result");
    result.value = eval(question);
}





