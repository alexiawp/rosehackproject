function load(){
    var url = new URL(window.location);
    var c = JSON.parse(url.searchParams.get("data"));
    console.log(c);

    console.log(c.name);
}