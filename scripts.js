function getResult()
{
    var side1= parseFloat(document.getElementById('side1').value);
    var side2= parseFloat(document.getElementById('side2').value);
    var side3= parseFloat(document.getElementById('side3').value);
    if(side1 === side2 && side2 === side3)
        {
            alert("This is a Equilateral triangle"); 
            window.location.href="eqltl.html";
        }
        else if(side1 === side2 || side1 === side3 ||side2 === side3){
            alert("This is a Isosceles Triangle");
            window.location.href="isosl.html";
        }
        else if((side1+ side2)<= side3 || (side1 + side3) <= side2 || (side2+ side3) <= side1){
            alert("Not a triangle ");
            window.location.href
        }
        else{
            alert("This is a scalene triangle"); 
            window.location.href="scal.html"
        }
}