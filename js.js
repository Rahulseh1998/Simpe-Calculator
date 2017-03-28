var keysi = document.querySelectorAll("#calculator span");
var checktypest = document.getElementById("standard");
var checktypesc = document.getElementById("scientific");
var wr = document.getElementsByClassName("checking");


var operators = ["+","-","/","*"];

for(i=0;i<keysi.length;i++){
	keysi[i].onclick = function(){
			var input = document.querySelector(".screen");
			var inputVal = input.innerHTML;
			var btnVal = this.innerHTML;
			
			input.innerHTML+= btnVal;
			if(btnVal == "="){
					input.innerHTML = eval(inputVal);	
				
			}
			if(input.innerHTML == "undefined"){
					input.innerHTML = "";
			}
			if(btnVal == "C"){
				input.innerHTML = "";
			}

	}
}


document.onkeydown = function(e) {
		
    switch (e.keyCode) {
        case 96:
            
            break;
        case 97:
            alert('up');
            break;
        case 98:
            alert('right');
            break;
        case 99:
            alert('down');
            break;
		case 101:
			alert('A or a');
			break;
		case 102:
			alert('A or a');
			break;
		case 103:
			alert('A or a');
			break;
		case 104:
			alert('A or a');
			break;
		case 104:
			alert('A or a');
			break;
    }
}