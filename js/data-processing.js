// Create a test URLSearchParams object
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/forEach
const queryString = window.location.search;

if(queryString.length > 0){
    
    const urlParams = new URLSearchParams(queryString);
    
    let myData = "";

    // Log the values
    urlParams.forEach(function(value, key) {
    key = key.split("_").join(" ");
    // console.log(value, key);
    myData += `<p>${key}: ${value}</p>`;
    });
    myData += '<p><a href="index.html">CLEAR</a></p>';
    document.getElementById("output").innerHTML = myData;
}