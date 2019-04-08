// string repetition
/*
function repeatStr(n, s){
	if(n > 0) {
		return s.repeat(n);
	}
	else {
		return '';
	}
}
console.log(repeatStr(3, "Hello World!"));
console.log(repeatStr(10, '*'));
*/


/*count smileys solution*/
/*
function countSmileys(arr){
	var eyes = [':', ';'];
	var nose = ['-', '~'];
	var mouth = [')', 'D'];

	var valid = 0;
	arr.map(function(smiley){
		if(smiley.length === 2 && eyes.indexOf(smiley.charAt(0)) !== -1 && mouth.indexOf(smiley.charAt(1)) !== -1 ){
			valid++;
		}
		else if(smiley.length === 3 && eyes.indexOf(smiley.charAt(0)) !== -1 && nose.indexOf(smiley.charAt(1)) !== -1 && mouth.indexOf(smiley.charAt(2)) !== -1){
			valid++
		}
	});

	return valid;
}
console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
*/


/*titlecase with minorwords*/
/*
function titleCase(title, minorWords) {
    
   var answer = [];

     if (minorWords) {
         minorWords = minorWords.toLowerCase()
     }
     else {
         minorWords = "";
     }
     title = title.toLowerCase().split(" ");
    
     title.forEach(function(word, index, array){
         if (index===0) {
             answer.push(capitalizeFirst(word))
         }
         else if (minorWords.indexOf(word) !== -1) {
             answer.push(word)
         }
         else {
             answer.push(capitalizeFirst(word))
         }
    })
    
     function capitalizeFirst(arg) {
         arg = arg.split('')
         arg[0] = arg[0].toUpperCase()
         arg = arg.join('')
         return arg
     }
    
     return answer.join(" ")
    
 }
console.log(titleCase("I'm a little tea pot", "The a of"));
console.log(titleCase("a Clash of KINGS", "an a of the"));
console.log(titleCase("THE WIND IN THE WILLOWS", "In The"));
console.log(titleCase("the quick brown fox"));
*/

/*how to build a triangle*/

/*
function isTriangle(a,b,c){
	if((a + b > c) && (a + c > b) && (b + c > a)) {
		return true;
	}
	else {
		return false;
	}
}
console.log(isTriangle(7,2,2));
console.log(isTriangle(1,2,2));
console.log(isTriangle(-1,2,2));
console.log(isTriangle(-1,-2,2));
console.log(isTriangle(4,5,2));
console.log(isTriangle(0,5,2));
console.log(isTriangle(0,0,0));
*/

//isogram

/*
function isIsogram(str) {
//...
var strArr = str;
for (var i = 0; i < strArr.length; i++) {
    for (var j = 0; j < strArr.length; j++) {
        if(i!=j){
          if (strArr[i] == strArr[j]) {
              return false
          }
        }
    }
}
return true;
}

console.log(isIsogram("Brick quiz whangs jumpy veldt fox"));
*/

/*
//Detect Pangram

function isPangram(string){
	return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string);
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('This is not a pangram'));
console.log(isPangram('Brick quiz whangs jumpy veldt fox'));
console.log(isPangram('Six plump boys guzzled cheap raw vodka quite joyfully'));


//var string = 'the quick brown fox jumps over the lazy dog';
//var split = string.replace(/ /g, '').split('');
//console.log(split.length);
*/

//String in diamond shape
/*
function diamond(n){
  if (n < 0 || n % 2 == 0) return null;
  for (var i = 0, diamond = ''; i < n; i++) {
    var stars = n - Math.abs(n - 2*i - 1);
    var spaces = (n - stars) / 2;
    while (spaces-- > 0) diamond += ' ';
    while (stars-- > 0) diamond += '*';
    diamond += '\n';
  }
  return diamond;
}
console.log(diamond(5));
*/
/*
//Build a Tower
function towerBuilder(nFloors){
    var floor = [];
    var spaces = '';
    var stars = '';
    for(var i = 0; i < nFloors; i++){
        spaces = (' ').repeat((nFloors - i - 1));
        stars = ('*').repeat((2*i + 1));
        floor.push(spaces + stars + spaces);
    }
    return floor;    
}
console.log(towerBuilder(6));
*/

//Reverse OR Rotate
/*
//Method 1
function revrot(str, sz) {
    var rev, rot, chunks;
    while((sz <= 0) || (str === '') || (sz > str.length)) return "";
    //passing an argument into regexp
  chunks = str.match(new RegExp('.{1,' + sz + '}', 'g'));
  var result = "";
  chunks.forEach(function(el){
    result += determine(el, sz);
  });
  return result;
}

function determine(chunks, sz){
    if(chunks.length < sz){
        return "";
    } else if(sumOfCubes(chunks) % 2 === 0) {
        return reverse(chunks);
    } else {
        return rotate(chunks);
    }
}

function reverse(str){
    return str.split('').reverse().join('');
}

function rotate(str){
    return str.slice(1) + str[0];
}

function sumOfCubes(str){
    return str.split('').reduce(function(total, num){
        num = parseInt(num);
        total += Math.pow(num, 3);
    });
}
console.log(revrot('123456987654', 6));
console.log(revrot('66443875', 4));
console.log(revrot("", 8));
console.log(revrot("733049910872815764", 5));
//Mehod 2
function revrot(str, sz) {
    var output = "";
    if(sz === 0){
      return "";
    }
    for(var i = 0; i < str.length; i += sz){
      if(str.length - i < sz){
        break;
      }
      var chunk = createChunk(str.slice(i, i + sz));
      var sumDivisible = chunkCheck(chunk);
      output += sumDivisible ? reverseChunk(chunk) : rotateChunk(chunk);
    }
    return output;
}

function createChunk(string){
  var chunk = "";
  for(var i = 0; i < string.length; i++){
    chunk += string[i];
  }
  return chunk;
}

function chunkCheck(chunk){
  var sum = 0;
  for(var i = 0; i < chunk.length; i++){
    sum += Math.pow(parseInt(chunk[i]), 3);
  }
  return sum % 2 === 0 ? true : false;
}

function reverseChunk(chunk){
  var output = "";
  for(var i = chunk.length - 1; i >= 0; i--){
    output += chunk[i];
  }
  return output;
}

function rotateChunk(chunk){
  var output = chunk.split("");
  var rotatedNum = output.shift();
  output.push(rotatedNum);
  return output.join("");
}
console.log(revrot('123456987654', 6));
console.log(revrot('66443875', 4));
console.log(revrot("", 8));
console.log(revrot("733049910872815764", 5));
*/
/*
//Extract domain name in url

function domainName(url){

    var domain = /(?:https?:\/\/)?(?:w{3}\.)?([a-zA-Z0-9-_@]+)\.(?:[a-z])/;
    var result = url.match(domain);
    return result[1];
}
console.log(domainName("http://www.google.com"));
console.log(domainName("http://www.cnet.com"));
//console.log(domainName("http://www.cnet.com"));
console.log(domainName("www.xarep.ru"));
*/


/*
//Checking diff of an array
function array_diff(a, b){
    var mainArr= [];
        a.map(function(x){
            if(!b.includes(x)){
                mainArr.push(x);
            }
        });
        return mainArr;
}
console.log(array_diff([1,2,2,2,3], [2]));
console.log(array_diff([1,8,2], []));
console.log(array_diff([4,3], [3]));
console.log(array_diff([], [1,4,2]));
*/

/*
var numbers = [1, 2, 3, 4, 5];
//var numbers = [];

if (numbers.length < 1){
    return NaN;
    console.log([]);
}
else {

        Array.prototype.square = function(){
            var square = [];
            numbers.map(function(cur){
               square.push(Math.pow(cur, 2));
            });
            return square;
        };
    
        Array.prototype.cube = function(){
            var cube =[];
            numbers.map(function(cur){
               cube.push(Math.pow(cur, 3));
            });
            return cube;
        };
        
        
        Array.prototype.sum = function(){
            function getSum(total, num){
                return total + num;
            }
            return numbers.reduce(getSum);
        };
        
        Array.prototype.average = function(){
            var average;
            average = numbers.sum() / numbers.length;
            return parseInt(average);
            
        };
        
        
        Array.prototype.even = function(){
            var even = [];
            numbers.map(function(cur){
               if(cur % 2 === 0){
                even.push(cur);
               }
            });
            return even;
        };
        
        Array.prototype.odd = function(){
            var odd = [];
            numbers.map(function(cur){
            if(cur % 2 === 1){
                odd.push(cur);
            }
            });
            return odd;
        };
}
console.log('The square of the numbers are' + ' ' + numbers.square());
console.log('The cube of the numbers are' + ' ' + numbers.cube());
console.log('The sum of the numbers is' + ' ' + numbers.sum());
console.log('The average of the numbers is' + ' ' + numbers.average());
console.log('The even of the numbers is' + ' ' + numbers.even());
console.log('The odd of the numbers is' + ' ' + numbers.odd());
*/
