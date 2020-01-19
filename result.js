function load(){
    var url = new URL(window.location);
    var iMoney = Number(url.searchParams.get("iMoney"));
    var eMoney = Number(url.searchParams.get("eMoney"));
    console.log(iMoney);


    // document.getElementById('budget').innerHTML = eMoney;

}

function updateMoney(){    
    console.log('about to start');
    var url = new URL(window.location);
    var iMoney = Number(url.searchParams.get("iMoney"));
    var eMoney = Number(url.searchParams.get("eMoney"));

    iMoney += document.getElementById("update").value; 

    if((iMoney/eMoney) < (0.1*eMoney)) {
        console.log('stage 1');
        document.getElementById('image').src = 'stg1.png';
    }
    else if ((iMoney/eMoney) < (0.2*eMoney) && (iMoney/eMoney) > (0.1*eMoney)) {
        console.log('stage 2');
        document.getElementById('image').src = 'stg2.png'; 
    }
    else if ((iMoney/eMoney) < (0.3*eMoney) && (iMoney/eMoney) > (0.2*eMoney)) {
         console.log('stage 3');
         document.getElementById('image').style.display = 'stg3.png';
    }
    else if ((iMoney/eMoney) < (0.4*eMoney) && (iMoney/eMoney) > (0.3*eMoney)) {
         console.log('stage 4');
         document.getElementById('image').style.display = 'stg4.png';
    }
    else if ((iMoney/eMoney) < (0.5*eMoney) && (iMoney/eMoney) > (0.4*eMoney)) {
         console.log('stage 5');
         document.getElementById('image').style.display = 'stg5.png';
    }
    else if ((iMoney/eMoney) < (0.6*eMoney) && (iMoney/eMoney) > (0.5*eMoney)) {
         console.log('stage 6');
         document.getElementById('image').style.display = 'stg6.png';
    }
    else if ((iMoney/eMoney) < (0.7*eMoney) && (iMoney/eMoney) > (0.6*eMoney)) {
         console.log('stage 7');
         document.getElementById('image').style.display = 'stg7.png';
    }
    else if ((iMoney/eMoney) < (0.8*eMoney) && (iMoney/eMoney) > (0.7*eMoney)) {
         console.log('stage 8');
         document.getElementById('image').style.display = 'stg8.png';
    }
    else if ((iMoney/eMoney) < (0.9*eMoney) && (iMoney/eMoney) > (0.8*eMoney)) {
         console.log('stage 9');
         document.getElementById('image').style.display = 'stg9.png';
    }
    else if ((iMoney == 0)) {
             console.log('stage 0');
             document.getElementById('image').style.display = 'stg0.png';
    }
    else {
         console.log('stage 10');
         document.getElementById('image').style.display = 'stg10.png';
    }
}