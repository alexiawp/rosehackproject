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
        document.getElementById('image1').style.display = 'block';
    }
    else if ((iMoney/eMoney) < (0.2*eMoney) && (iMoney/eMoney) > (0.1*eMoney)) {
        console.log('stage 2');
        document.getElementById('image2').style.display = 'block';
    }
    else if ((iMoney/eMoney) < (0.3*eMoney) && (iMoney/eMoney) > (0.2*eMoney)) {
        // console.log('stage 3');
        // document.getElementById('image2').style.display = 'block';
    }
    else if ((iMoney/eMoney) < (0.4*eMoney) && (iMoney/eMoney) > (0.3*eMoney)) {
        // console.log('stage 4');
        // document.getElementById('image2').style.display = 'block';
    }
    else if ((iMoney/eMoney) < (0.5*eMoney) && (iMoney/eMoney) > (0.4*eMoney)) {
        // console.log('stage 5');
        // document.getElementById('image2').style.display = 'block';
    }
    else if ((iMoney/eMoney) < (0.6*eMoney) && (iMoney/eMoney) > (0.5*eMoney)) {
    //     console.log('stage 6');
    //     document.getElementById('image2').style.display = 'block';
    }
    else if ((iMoney/eMoney) < (0.7*eMoney) && (iMoney/eMoney) > (0.6*eMoney)) {
        // console.log('stage 7');
        // document.getElementById('image2').style.display = 'block';
    }
    else if ((iMoney/eMoney) < (0.8*eMoney) && (iMoney/eMoney) > (0.7*eMoney)) {
        // console.log('stage 8');
        // document.getElementById('image2').style.display = 'block';
    }
    else if ((iMoney/eMoney) < (0.9*eMoney) && (iMoney/eMoney) > (0.8*eMoney)) {
        // console.log('stage 9');
        // document.getElementById('image2').style.display = 'block';
    }
    else {
        // console.log('stage 10');
        // document.getElementById('image2').style.display = 'block';
    }
}