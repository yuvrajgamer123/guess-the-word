function adduser() {
    name1=document.getElementById("player1").value ;
    name2=document.getElementById("player2").value ;
    localStorage.setItem("player1_name",name1);
    localStorage.setItem("player2_name",name2);
    window.location="game_page.html";
}