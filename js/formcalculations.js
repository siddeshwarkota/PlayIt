
 var cake_prices = new Array();
 cake_prices["Round6"]=1500;
 cake_prices["Round8"]=500;
 cake_prices["Round10"]=500;
 cake_prices["Round12"]=900;
 cake_prices["Round14"]=1500;
 cake_prices["Round16"]=1500;
 cake_prices["Round18"]=1500;


 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Lemon"]=0;
 filling_prices["Custard"]=0;
 filling_prices["Fudge"]=0;
 filling_prices["Mocha"]=0;
 filling_prices["Raspberry"]=0;
 filling_prices["Pineapple"]=1000;
 filling_prices["Dobash"]=1000;


function getCakeSizePrice()
{
    var cakeSizePrice=0;

    var theForm = document.forms["cakeform"];

    var selectedCake = theForm.elements["selectedcake"];
  for(var i = 0; i < selectedCake.length; i++)
    {
        if(selectedCake[i].checked)
        {

            cakeSizePrice = cake_prices[selectedCake[i].value];
            break;
        }
    }

    return cakeSizePrice;
}


function getFillingPrice()
{
    var cakeFillingPrice=0;

    var theForm = document.forms["cakeform"];

     var selectedFilling = theForm.elements["filling"];

    cakeFillingPrice = filling_prices[selectedFilling.value];


    return cakeFillingPrice;
}


function candlesPrice()
{
    var candlePrice=0;
    var theForm = document.forms["cakeform"];

    var includeCandles = theForm.elements["includecandles"];


    if(includeCandles.checked==true)
    {
        candlePrice=500;
    }

    return candlePrice;
}

function insciptionPrice()
{
    var inscriptionPrice=0;

    var theForm = document.forms["cakeform"];

    var includeInscription = theForm.elements["includeinscription"];

    if(includeInscription.checked==true){
        inscriptionPrice=900;
    }

    return inscriptionPrice;
}

function calculateTotal()
{

    var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();


    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price For the Ground  Rs:"+cakePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}


function display()
{
  var final = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();
  window.alert("Congratulations you have successfully booked\n" + "Total amount to be paid:" + final);
  cakeform.reset();
  window.location.href = "support.php";
}
