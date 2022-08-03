var numbers = [ 20, 34, 87, 93, 75, 37, 56, 354, 47, 579 ];

for( var i = 0; i < numbers.length; i++ ){
     var number = numbers [i];
     if (number>94){
        continue;
     }
     console.log(number);
}