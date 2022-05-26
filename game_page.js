player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+"-";
document.getElementById("player2_name").innerHTML=player2_name+"-";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_q").innerHTML="question turn- "+player1_name;
document.getElementById("player_a").innerHTML="answer turn- "+player2_name;
function send() {
    word1=document.getElementById("word").value;
word=word1.toLowerCase();
char1=word.charAt(1);
divide=Math.floor(word.length/2);
char2=word.charAt(divide);
mine=word.length-1;
char3=word.charAt(mine);
newone=word.replace(char1,"_");
newtwo=newone.replace(char2,"_");
finall=newtwo.replace(char3,"_");
question_word = "<h4 id='word_display'> Q. "+finall+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
q_turn="player1";
a_turn="player2";
function check(){
    answer1=document.getElementById("input_check_box").value;
    answer=answer1.toLowerCase();
    if (answer==word) {
        if (a_turn=="player1") {
      player1_score=player1_score+1;
      document.getElementById("player1_score").innerHTML=player1_score;

        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }

    }
    if (q_turn=="player1") {
        q_turn="player2";
        document.getElementById("player_q").innerHTML="question turn - "+player2_name;
    }
    else{
        q_turn="player1";
        document.getElementById("player_q").innerHTML="question turn - "+player1_name;
    }
    if (a_turn=="player1") {
        a_turn="player2";
        document.getElementById("player_a").innerHTML="answer turn - "+player2_name;
    }
    else{
        a_turn="player1";
        document.getElementById("player_a").innerHTML="answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}