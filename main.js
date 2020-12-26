x = [];
y = [];
function sa(){
    for(var j=1;j<=4;j++){
        var n1=document.getElementById("i"+j).value;
        console.log(n1);
        x.push(n1);
    } 
    var l=x.length;
    console.log(l);
    for(var k=0;k<=l;k++){
    y.push("<h4>name is: "+x[k]+"</h4>");
    console.log(y);
    }
console.log(x);
document.getElementById("d1").innerHTML=y;
var r=y.join(" ");
console.log(r);
document.getElementById("empty").innerHTML=r;
document.getElementById("b1").style.display="none";
document.getElementById("b2").style.display="inline-block";
}
function so(){
    x.sort();
    var z=[];
    var l1=x.length;
    console.log(l1);
    for(var k1=0;k1<=l1;k1++){
    z.push("<h4>name is: "+x[k1]+"</h4>");
    console.log(z);
    }
    var r1=z.join(" ");
console.log(r1);
document.getElementById("empty").innerHTML=r1;
    console.log(x);
    document.getElementById("d1").innerHTML=x;
}