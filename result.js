function load(){
    var url = new URL(window.location);
    var eMoney = Number(url.searchParams.get("eMoney"));
    console.log(eMoney);

    if(eMoney < 200){
        console.log('ajslkfdasldf');
        document.getElementById('budget').innerHTML = "YOU're BROKE";
        document.getElementById('image').style.display = 'block';
    }

    // document.getElementById('budget').innerHTML = eMoney;

}

function feedme(){    
    console.log('teststsdaf');
}

function starveme(){ 

}