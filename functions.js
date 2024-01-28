let solution="";

function equation(char){

    let solChar, disChar;
    switch(char){
        case "x!":
            solChar = "fac(";
            disChar = "fac(";
        break;
        case "Ln":
            solChar = "Math.log(";
            disChar = "ln(";
        break;
        case "Lpar":
            solChar = "(";
            disChar = "(";
        break;
        case "Rpar":
            solChar = ")";
            disChar = ")";
        break;    
        case "%":
            
        break;
        case "Sin":
            solChar = "Math.sin(";
            disChar = "sin(";
        break;
        case "Log":
            solChar = "Math.log10(";
            disChar = "Log(";
        break;
        case "/":
            solChar = "/";
            disChar = "/";
        break;
        case "Cos": 
            solChar = "Math.cos(";
            disChar = "cos(";
        break;
        case "Pi":
            solChar = "Math.PI";
            disChar = "π";
        break;
        case "x":
            solChar = "*";
            disChar = "*";
        break;
        case "Tan":
            solChar = "Math.tan(";
            disChar = "tan(";
        break;
        case "Sqrt":
            solChar = "Math.sqrt(";
            disChar = "√(";    
        break;
        case "e":
            solChar = "Math.E";
            disChar = "e";
        break;
        case "xy":
            solChar = "**";
            disChar = "^";
        break;
        default:
            solChar = char;
            disChar = char;
        break;
    }

    solution += solChar;
    let screen = document.getElementById('screen');

    if(screen.innerText == "0"){
        screen.innerText=disChar;
    }else{
        screen.innerText += disChar;
    }

}

function deleteAll(){
    solution = "";
    document.getElementById('screen').innerText = "0";

}
function factorial(num){
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function solve(){

    solution = solution.replace(/fac\((\d+)\)/g, (match, number) => factorial(parseInt(number)));
    const result = eval(solution);
    solution = String(result);
    document.getElementById('screen').innerText = result;

}
