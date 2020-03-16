'use stric'

var str = 'Licencia{ id = 01, descrip = "Licencia por ", dias=30}'; 

var mySubString = str.substring(
    str.lastIndexOf("=") + 1, 
    str.lastIndexOf("}")
);
console.log(mySubString);