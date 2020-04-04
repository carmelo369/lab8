$(document).ready(function(){
    
    //Global Variables
    var score = 0;
    var attempts = localStorage.getItem("total_attempts");
    //New variable
    var score2 = 0; 
    
    //event Listeners
    //"Submit Quiz" button
    $("button").on("click", gradeQuiz);
    
    //Question 5 images
    $(".q5Choice").on("click", function(){
        $(".q5Choice").css("background","");
        $(this).css("background","rgb(255, 255, 0)");
    });
    
    displayQ4Choices();
    
    function displayQ4Choices(){
        
        let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
        q4ChoicesArray = _.shuffle(q4ChoicesArray);
        
        for(let i = 0; i < q4ChoicesArray.length; i++){
            $("#q4Choices").append(` <input type="radio" name="q4" id="${q4ChoicesArray[i]}"
            value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${
            q4ChoicesArray[i]}</label>`);
        }
    }//displayQ4Choices
    
    //Question 8
    displayQ8Choices();
    
    function displayQ8Choices(){
        
        let q8ChoicesArray = ["California", "Texas", "Nevada", "New York"];
        q8ChoicesArray = _.shuffle(q8ChoicesArray);
        
        for(let i = 0; i < q8ChoicesArray.length; i++){
            $("#q8Choices").append(` <input type="radio" name="q8" id="${q8ChoicesArray[i]}"
            value="${q8ChoicesArray[i]}"> <label for="${q8ChoicesArray[i]}"> ${
            q8ChoicesArray[i]}</label>`);
        }
    }//displayQ8Choices
    
    //functions
    function isFormValid(){
        let isValid = true;
        if($("#q1").val() == ""){
            isValid = false;
            $("#validationFdbk").html("Question 1 was not answered");
        }
        return isValid;
    }
    
    function rightAnswer(index){
        $(`#q${index}Feedback`).html("Correct!");
        $(`#q${index}Feedback`).attr("class", "bg-success text-white");
        $(`#markImg${index}`).html("<img src ='img/checkmark.png'>");
        score += 12.50;
    }
    
    function wrongAnswer(index){
        $(`#q${index}Feedback`).html("Incorrect!");
        $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
        $(`#markImg${index}`).html("<img src ='img/xmark.png' alt='xmark'>")
    }
    
    // New functions right and wrong answers
     function rightAnswer2(index){
        $(`#q${index}Feedback`).html("Correct!");
        $(`#q${index}Feedback`).attr("class", "bg-success text-white");
        $(`#markImg${index}`).html("<img src ='img/checkmark.png'>");
        score2 += 12.50;
    }
    
    function wrongAnswer2(index){
        $(`#q${index}Feedback`).html("Incorrect!");
        $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
        $(`#markImg${index}`).html("<img src ='img/xmark.png' alt='xmark'>")
    }
    
    //Grade quiz
    function gradeQuiz(){
        
        $("#validationFdbk").html(""); //resets validation feedback
        
        if(!isFormValid()){
            return;
        }
    
    //variables
    score = 0;
    let q1Response = $("#q1").val().toLowerCase();
    let q2Response = $("#q2").val();
    let q4Response = $("input[name=q4]:checked").val();
    
    //New variables forr extra questions
    score2 = 0;
    let q6Response = $("#q6").val();
    let q8Response = $("input[name=q8]:checked").val();
    
    //Question 1
    if(q1Response == "sacramento"){
        rightAnswer(1);
    }else{
        wrongAnswer(1);
    }
    
    //Question 2
    if(q2Response == "mo"){
        rightAnswer(2);
    }else{
       wrongAnswer(2);
    }
    
    //Question 3
    if($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked")
        && !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")){
        rightAnswer(3);
    }else{
        wrongAnswer(3);
    }
    
    //Question 4
    if(q4Response == "Rhode Island"){
        rightAnswer(4);
    }else{
        wrongAnswer(4);
    }
    
    //Question 5
    if($("#seal2").css("background-color") == "rgb(255, 255, 0)"){
        rightAnswer(5);
    }else{
        wrongAnswer(5);
    }
    
    //Extra questions
    //Question 6
    if(q6Response == "mex"){
        rightAnswer2(6);
    }else{
       wrongAnswer2(6);
    }
    
    //Question 7
    if($("#PuertoRico").is(":checked") && $("#Guam").is(":checked")
        && !$("#Cuba").is(":checked") && !$("#Haiti").is(":checked")){
        rightAnswer2(7);
    }else{
        wrongAnswer2(7);
    }
    
    //Question 8
    if(q8Response == "California"){
        rightAnswer2(8);
    }else{
        wrongAnswer2(8);
    }
    
    
    $("#totalScore").html(`Total Score: ${score + score2}`);
    $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
    localStorage.setItem("total_attempts", attempts);
    
    //Display color message
    if(score + score2 >= 80){
        $("#totalScore").css("color", "green");
    }else if(score + score2 < 80){
        $("#totalScore").css("color", "red");
    }
    
    //Display congratulations
    if(score + score2 >= 80){
        $("#congratulations").html("Congratulations you get a perfect score!");
    }
        
    }
    
});//ready
