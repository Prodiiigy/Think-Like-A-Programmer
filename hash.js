/*
function diamond(n){
	for(var row = 1; row <= n; row++){
		for (var hashNum = 1; hashNum <= n; hashNum++) {
           console.log("#");
        }
            console.log("\n");
	}
}
console.log(diamond(5));
*/

function rightTriangle(n){
	for(var i = 0; i <= n; i++){
		for(var j = 0; j <= n; j++){
			if(j>=i){
				console.log("*");
			}
			else {
				console.log("&nbsp&nbsp");
			}
			console.log('\n');
		}
	}
}
console.log(rightTriangle(5));



