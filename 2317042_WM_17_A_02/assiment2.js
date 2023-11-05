var aTotalMaks =0;
var bTotalMaks =0;
var acountt=0;
var bcountt=0;
function ProcessEvent(player){
    var xPlayer=player
    //alert(xPlayer)
    

        let x = Math.floor(Math.random() * 6) + 1
if (x==1){
        document.getElementById("image1").src = "1r.png"
    }
    else if (x==2){
        document.getElementById("image1").src = "2r.png"
    }
    else if (x==3){
        document.getElementById("image1").src = "3r.png"
    }
    else if (x==4){
        document.getElementById("image1").src = "4r.png"
    }
    else if (x==5){
        document.getElementById("image1").src = "5r.png"
    }
    else if (x==6){
        document.getElementById("image1").src = "6r.png"
    }

    let y = Math.floor(Math.random() * 6) + 1
if (y==1){
        document.getElementById("image2").src = "1r.png"
    }
    else if (y==2){
        document.getElementById("image2").src = "2r.png"
    }
    else if (y==3){
        document.getElementById("image2").src = "3r.png"
    }
    else if (y==4){
        document.getElementById("image2").src = "4r.png"
    }
    else if (y==5){
        document.getElementById("image2").src = "5r.png"
    }
    else if (y==6){
        document.getElementById("image2").src = "6r.png"
    }
if (xPlayer=="A"){
    aTotalMaks=aTotalMaks+x+y;
    acountt=acountt+1;
    document.getElementById("countA").innerHTML= acountt;

}else{
    bTotalMaks= bTotalMaks +x+y;
    bcountt=bcountt+1;
    document.getElementById("countB").innerHTML= bcountt;
}
var winnerMaks=0;
var winnerName="";
if (aTotalMaks>bTotalMaks){
    winnerMaks=aTotalMaks;
    winnerName="A"
}else{
    winnerMaks=bTotalMaks;
    winnerName="B";  
}
document.getElementById("winnerMaks").innerHTML= winnerName
document.getElementById("M1").innerHTML= "A"
document.getElementById("M5").innerHTML= "B"
document.getElementById("M4").innerHTML= aTotalMaks
document.getElementById("M8").innerHTML= bTotalMaks



}

