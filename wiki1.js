

let begriff = document.querySelector(".suche")
let button = document.querySelector("#suchen")
let result = document.querySelector("#result")

let output = " "



button.addEventListener("click", function(){
    fetch(`https://de.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${begriff.value}`)
    .then(response => response.json())
    .then(function test1 (data){
        let test = data[1]
        output += "<ul>"

        test.forEach(element => {
            output += "<li>" + element + "</li>" 

        });

        output += "</ul>"

        result.innerHTML = output

    })
});
