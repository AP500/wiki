

let begriff = document.querySelector(".suche")
let button = document.querySelector("#suchen")
let result = document.querySelector("#result")
let zeit = document.querySelector("#zeit")

begriff.addEventListener("input", neu)


button.addEventListener("click", neu)


function neu(){
    let now = Date.now()
    fetch(`https://de.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${begriff.value}`)
    .then(response => response.json())
    .then(function test1 (data){
        let test = data[1]
        let test2 = data[3]
        let myNewList = []
        for (let i=0; i<data[1].length; i++){
            myNewList.push({
                "title": test[i],
                "link": test2[i] 
            })
        }
        myNewList = myNewList.sort((a,b) => a.titlelength - b.titlelength)
        let output = " "
        output += "<ul>"
        myNewList.forEach(element => {
            output += `<li> <a href="${element.link}" > ${element.title} </a> </li>`
        });
        output += "</ul>"
        result.innerHTML = output
        let ergebnis = Date.now() - now
        zeit.textContent = ergebnis
    })
}