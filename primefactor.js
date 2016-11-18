var primeFactors = function(integer){
//----------------FIRST, FIND THE MULTIPLES ------------------
    var multiples = [];
 
    //finds all the multiples of that integer
    for(var i = integer; i >= 1; i--){
        if (integer % i === 0){
            multiples.push(i);
        }
    }
    
    console.log("Multiples of " + integer + " are..." + multiples);
   
//----------------NOW TO FIND THE PRIME NUMBERS ------------------   
    //now find the prime factors within the multiples array
    var primeNumber = [];
    
    //creating a variable that will test which numbers in the multiples array are prime numbers or not. "bsom" stands for boolean sum of numbers. Essentially, I will look at each multiple in the array, divide it by the other multiples smaller than it. If they are divisible (i.e. no remainder), I will assign it boolean value of 1 (TRUE). If not divisible, I will assign it boolean value of 0 (FALSE). Each case I look at, it will add the sum of 1 or 0 to the bsom array at position "z". At the end, prime numbers are multiples where the bsom at position "z" only equals 1 (when that multiple was only divisible by 1). 
    var bsom = []; 
    
    //filling the bsom array to have sum's of 0 in each position for however many multiples there are
    for(var a = 0; a < multiples.length; a++){
        bsom[a] = 0;
    }
    
    for (var x = 0; x < multiples.length; x++){
        for( var y = x + 1; y < multiples.length; y++){
            if (multiples[x] % multiples[y] === 0){
                bsom[x] += 1;
            }
            else{
                bsom[x] += 0;
            }
        }
    }
    
    //this for loop will look at the bsom array, find which numbers equal 1 (meaning these multiples were only divisible by 1), and push it into the primeNumber array
    for (var z = 0; z < bsom.length; z++){
        if (bsom[z] === 1){
            primeNumber.push( multiples[z] );
        }
    }
    
        
    console.log("Prime factor(s) of " + integer + " are..." + primeNumber); 
    return primeNumber;
} 

//----------------CALLING THE FUNCTION----------------------------
primeFactors(111111);

