// Create a test URLSearchParams object
//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/forEach
const queryString = window.location.search;

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}

if(queryString.length > 0){
    
    const urlParams = new URLSearchParams(queryString);
    
    let myData = "";
    let myCart = "";
    let myTotal = 0;   //will store 
     
    myCart += "<h3>Cart Contents</h3>";
    // Log the values
    urlParams.forEach(function(value, key) {
       
        if(key == "Cart"){//process cart
            
            switch(value){
                case "Widget":
                    myCart += "Widget: $3.99<br>";
                    myTotal +=3.99;
                break;
                case "Sprocket":
                    myCart += "Sprocket: $5.99<br>";
                    myTotal +=5.99;
                break;
                case "Thingy":
                    myCart += " Thingy: $1.99<br>";
                    myTotal +=1.99;
                break;

            }
        
        }else{//process shipping 
                
            key = key.split("_").join(" ");
            if(key == "First Name" || key == "Last Name" || key == "City"){
                value = titleCase(value);
            }
            myData += `<p>${key}: ${value}</p>`;
            
        }
        
    });

    myCart += "Total:" + myTotal + '<br>';

    // we want Cart  data to go first
    myData = myCart + myData;
 
    myData += '<p><a href="index.html">CLEAR</a></p>';
    document.getElementById("output").innerHTML = myData;
}