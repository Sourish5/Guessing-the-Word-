player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
console.log("hi");
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
console.log("helo");
document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    word = document.getElementById("word").value.toLowerCase();
    
    charAt1 = word.charAt(1);

    half_len = Math.floor(word.length/2);
    charAt2 = word.charAt(half_len);

    last = word.length - 1;
    charAt3 = word.charAt(last);

    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");

    line_1 = "<h4> Q." + remove_charAt3 + "</h4><br>";
    line_2 = "Answer : <input id='answer_input' type='text'placeholder='Type Here' class='form-control'></input><br>";
    line_3 = "<button id='send' class='btn btn-info'onclick='check()'>Check</button>"
    lines = line_1 + line_2 + line_3;
    document.getElementById("output").innerHTML = lines;
    document.getElementById("word").value = " ";
}

question_turn = "player_1";
answer_turn = "player_2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if(answer == word)  
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else 
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
    }
    else 
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
    }
    else 
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
    }

    document.getElementById("output").innerHTML = "";
}