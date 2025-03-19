var options = ["Sofia", "Plovdid", "Burgas", "Velingrad", "Veliko Turnovo", "Varna", "Ruse", "Pazardjik"]
var choice = options[Math.floor(Math.random()*options.length)]
console.log(choice)


var uncovered = ''
for(let i = 0; i < choice.length; i ++){
    if(choice[i] == ' '){
        uncovered += ' '
    }else{
        uncovered += '-'
    } 
}

$('h1').text(uncovered)

$("button").on( "click", ()=>{
    let guess = $('input').val()
    
    for(let i = 0 ;i < choice.length; i ++){
        if(guess === choice[i]){
            uncovered
        }
    }
});