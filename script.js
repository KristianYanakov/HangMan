var options = ["Sofia", "Plovdid", "Burgas", "Velingrad", "Veliko Turnovo", "Varna", "Ruse", "Pazardjik"]
var choice = options[Math.floor(Math.random()*options.length)]
console.log(choice)

var lives = 5

var  uncovered = ''
for(let i = 0; i < choice.length; i ++){
    if(choice[i] == ' '){
        uncovered += ' '
    }else{
        uncovered += '-'
    } 
}

$('h1').text(uncovered)

$("button").on( "click", ()=>{
    let guess = $('input').val() + ''
    
    let flag = false;

    for(let j = 0; j < choice.length; j ++){
        if(choice[j] == guess){
            uncovered = uncovered.substring(0, j) + guess + uncovered.substring(j + 1);
            $('h1').text(uncovered)

            flag = true
        }
    }

});
