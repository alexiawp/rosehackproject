
// let data = {
//     name: "paw",
//     iMoney: 10,
//     eMoney: 100
// }
function submit(){
    console.log("hesgd");
    let url = 'http://localhost:5500/results.html?data=' + JSON.stringify(data);
    window.location = url;
}

