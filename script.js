// Write a js program to read and print elements of array.

// var array1=["web","development","Batch","4","saylani","Fasialabad"]
// for (let i = 0; i< array1.length; i++) {
//     var element = array1[i];
//     document.write(element,"<br>")   
// }

// Write a js program to print all negative elements in an array.
// var negitive=[1,-1,8,23,-45,28,67,-29,-2,-8,-10]
// for (let i = 0; i<negitive.length; i++){
//     if(negitive[i]<0){
//         document.write(negitive[i]+"<br>")
//     }

// }


// Write a js program to find sum of all array elements.

// var sum=0;
// var array1=[1,2,3,4,5,6,7,8];
// for (let i=0; i< array1.length; i++) {
//     sum+=array1[i]
// }
// document.write("Sum of Array : "+sum)


// Write a js program to find maximum and minimum element in an array.

// var max_min=[90,78,4,9,189,3,5,6,8,999,1000,888];
// var max=0;
// var min=max_min[0];
// for (let i = 0; i < max_min.length; i++) {
//     if(max_min[i]>max){
//         max=max_min[i];
//     }
//     else if(max_min[i]<min){
//         min=max_min[i];
//     }

//     }
//     document.write("Largest element is :"+max+"<br>")
//     document.write("smallest element is :"+min)




// Write a js program to find second largest element in an array.

// var second_largest=[999,1,34,5,100,12, 35, 77,56,10, 34,109,190,92,80,108,99];
//     console.log(second_largest)
// var large=second_largest.sort(function(a, b){return a-b});
//     console.log(large)
//     console.log(large[large.length-2])




// Write a js program to count total number of even and odd elements in an array.
// var Even_counter=0;
// var odd_counter=0;
// var arraynumber=[1,4,3,2,5,6,7,8,9,10,11];
// for (let i = 0; i < arraynumber.length; i++) {
//     if(arraynumber[i]%2==0){
//         ++Even_counter+1;
//     }
//     else{
//         ++odd_counter;
//     }

// }
// console.log("Even Number :"+Even_counter)
// console.log("Odd Number :"+odd_counter)


// Write a js program to count total number of negative elements in an array.

// var total_Negitve=0;
// var negitive_Array=[1,2,3,-1,-3,-6,8,-9,10,-7]
// for (let i = 0; i < negitive_Array.length; i++) {
//     if(negitive_Array[i]<0){
//         ++total_Negitve
//     }

// }
// console.log("Negitive Number :"+total_Negitve)


// Write a js program to copy all elements from an array to another array.

// var array=[1,2,3,4,5,6,"Web", "and"," Mobile Application development"]
// var number=array.slice(0)
// console.log(array)
// console.log(number)


// Write a js program to insert an element in an array.
// var courses=["AI","web and mobile Development","CNC","BlockChain"]
// console.log(courses)
// courses.push("CCNA")
// console.log(courses)
// courses.unshift("Graphic Design")
// console.log(courses)


// Write a js program to delete an element from an array at specified position.
// var courses=["AI","web and mobile Development","CNC","BlockChain"]
// courses.splice(1,1)
// courses.splice(2,0,"CCNA")
// console.log(courses)


// Write a js program to count frequency of each element in an array

// var number=[2,1,3,4,5,6,7]
// for (let i = 0; i< number.length; i++) {
//    var freq=1/number[i]; 
//    console.log(freq)
// }


// Write a js program to print all unique elements in the array.

// var newarray=[];
// var array=[6,6,1,2,1,3,4,9,3];
// for (let i = 0;  i< array.length; i++) {
//   if(newarray.indexOf(array[i])==-1){
//       newarray.push(array[i])
//   }
// }
// console.log(newarray);


//  Write a js program to count total number of duplicate elements in an array.
// var counter=0;
// var array=[];
// var arraydeplicate=["Huzaifa","Shoaib","Huzaifa","Ojla","Huzaifa","Shoaib","Shoaib","Huzaifa"];
// for (let index = 0; index < arraydeplicate.length; index++){
//     if(array.indexOf(arraydeplicate[index])==-1){
//         array.push(arraydeplicate[index])
//     }
//     else{
//         counter++
//     }
// }
// console.log(counter)



// Write a js program to delete all duplicate elements from an array.

// var array=[];
// var arraydeplicate=["Huzaifa","Shoaib","Huzaifa","Ojla","Huzaifa","Shoaib","Shoaib","Huzaifa"];
// for (let index = 0; index < arraydeplicate.length; index++){
//     if(array.indexOf(arraydeplicate[index])==-1){
//         array.push(arraydeplicate[index])
//     }
// }
// console.log(array)


// Write a js program to merge two array to third array.

// var array=[1,2,3,4,5]
// var array2=[6,7,8,9,10]
// var array3=[11,12,13,14,15]
// var merge=array.concat(array2)
// var finalmerge=merge.concat(array3)
// console.log(finalmerge)

// Write a js program to find reverse of an array.

// var numberArray=[1,2,3,4,5,6,7,8,9]
// var reverse=[]
// for (var i=numberArray.length-1 ;i>=0; i--) {
//     reverse.push(numberArray[i])
// }
// console.log(reverse)

// Write a js program to put even and odd elements of array in two separate array.

// var odd=[];
// var even=[];
// var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
// for (let index = 0; index < array.length; index++) {
//     if(array[index]%2==0){
//         even.push(array[index])
//     }
//     else{
//         odd.push(array[index])
// }
// }
// console.log("Even Array : "+even)
// console.log("odd Array : "+odd)


// Write a js program to search an element in an array.

// var nameArray=["Huzaifa","Shoaib","Ojla","Huzaifa Shoaib","Luqman",90]
// var search=prompt("Enter the Name to Search")
// for (let index = 0; index < nameArray.length; index++) {
//     if(nameArray[index]==search){
//         console.log(nameArray)
//         console.log("Are Find : "+search)
//     }
// }

// Write a js program to sort array elements in ascending or descending order

// var number=[1,-1,2,4,77,74,11,22,33,23]
// var descending=[];
// var ascending=number.sort(function(a,b){
//     return a-b;
// })
// for (let i=ascending.length-1 ; i>=0; i--){
//     descending.push(ascending[i])
// }
// console.log("Ascending Order : "+ascending)
// console.log("Descending Order : "+descending)

// Write a js program to sort even and odd elements of array separately.

// var number=[1,2,3,5,63,22,21,43,45,66,77,55,11,10]
// var odd=[];
// var even=[];
// for (let index = 0; index < number.length; index++) {
//     if(number[index]%2==0){
//         even.push(number[index])
//     }
//     else{
//         odd.push(number[index])
//     }

// }
// console.log(even.sort((a,b)=>{return a-b;}));
// console.log(odd.sort((a,b)=>{return a-b;}));


// Write a js program to right rotate an array.

// var randomarray=[1,2,3,4,5,6,7,8,9]
// console.log(randomarray)
// var number=parseInt(prompt("Enter the Number Want to You Rotate Left"))
// var renewArray=randomarray.slice(number,randomarray.length);
// randomarray.splice(number,randomarray.length)
// var leftRotate= renewArray.concat(randomarray);
// console.log(leftRotate)



// Write a js program to left rotate an array

// var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// var numbers=parseInt(prompt("Enter the Number Want to You Rotate Left"))
// var deleteditem=array.splice(0,numbers)
// for (let index = 0; index < deleteditem.length; index++) {
//  array.splice(array.length+index,0,deleteditem[index])
//  console.log(array)

// }


// Write a js program to right rotate an array.

// var randomarray=[1,2,3,4,5,6,7,8,9]
// console.log(randomarray)
// var shiftitem= parseInt(prompt("Enter the Number"));
// var deleteditem=randomarray.splice(randomarray.length-shiftitem)
// for (let index = 0; index < deleteditem.length-1; index++) {
//     randomarray.splice(index,0,deleteditem[index])
//     console.log(randomarray)

// }


// Write a js program to print day of week name using switch case.

// var day = +prompt("Enter the Day")
// switch (day) {
//     case 0:
//         console.log("Today is Monday")
//         break;
//     case 1:
//         console.log("Today is tuseday")
//         break;
//     case 2:
//         console.log("Today is wednesday")
//         break;
//     case 3:
//         console.log("Today is thursday")
//         break;
//     case 4:
//         console.log("Today is friday")
//         break;
//     case 5:
//         console.log("Today is saturday")
//         break;
//     case 6:
//         console.log("Today is sunday")
//         break;
//     default:
//         console.log("Not day Number")
//         break;

// }


// Write a js program print total number of days in a month using switch case

// var month = +prompt("Enter the Month number")
// switch (month) {
//     case 0:
//         console.log("January 31 days")
//         break;
//     case 1:
//         console.log("Feb 28 days")
//         break;
//     case 2:
//         console.log("March 31 days")
//         break;
//     case 3:
//         console.log("April 30 days")
//         break;
//     case 4:
//         console.log("May 31 days")
//         break;
//     case 5:
//         console.log("June 30 days")
//         break;
//     case 6:
//         console.log("July 31 days")
//         break;
//     case 7:
//         console.log("Aug 31 days")
//         break;
//     case 8:
//         console.log("Sept 30 days")
//         break;
//     case 9:
//         console.log("Oct 31 days")
//         break;
//     case 10:
//         console.log("Nov 30 days")
//         break;
//     case 11:
//         console.log("Dec 31 days")
//         break;
//     default:
//         console.log("Not Year")
//         break;

// }

// Write a js program to check whether an alphabet is vowel or consonant using switch case.

// var alphabat=prompt("Enter the Alphabat")
// switch(true){
//  case (alphabat=="a" || alphabat=="e" || alphabat=="i" || alphabat=="o" || alphabat=="u"):
//      console.log("This is vowel")
//      break;
//     default:
//     console.log("This is Consonant")
//     break

// }


// Write a js program to find maximum between two numbers using switch case.

// var num1 = prompt("Enter the first number")
// var num2 = prompt("Enter the second number")
// switch (true) {
//     case (num1 > num2):
//         console.log("The Number is Greater " + num1)
//         break;
//         default:
//             console.log("The is number is graeter "+num2)
//             break;
// }


// Write a js program to check whether a number is even or odd using switch case.

// var number = parseInt(prompt("Enter the number"))
// switch (true) {
//     case (number%2 == 0):
//         console.log("even nnumber")
//         break;
//     default:
//         console.log("odd number")
// }

// Write a js program to check whether a number is positive, negative or zero using switch case.
 
// var number=parseInt(prompt("Enter th Number"))
// switch(true){
//     case(number>0):
//     console.log("Number is Postive")
//     break;
//     case(number<0):
//     console.log("Number is Negitive")
//     break;
//     case(number==0):
//     console.log("number is Zero")
//     break;
// }

// Write a js program to find roots of a quadratic equation using switch case.

var a=+prompt("Enter a")
var b=+prompt("Enter b")
var c=+prompt("Enter c")
var sign=prompt("Enter the sign")
switch(true){
    case(sign=="+"):
    var result=(-1*b)+Math.sqrt((Math.pow(b,2)))-(4*a*c)/(2*a)
    console.log(result)
    break;
    case(sign=="-"):
    var result1=(((-1*b)-Math.sqrt((Math.pow(b,2)))-(4*a*c))/(2*a))
    console.log(result1)
    break;
}


// Write a js program to create Simple Calculator using switch case.

// var num1=parseInt(prompt("Enter the first Number"))
// var num2=parseInt(prompt("Enter the Second number"))
// operater=prompt("Enter the Operater")
// switch(true){
//     case(operater=="+"):
//     var result=num1+num2;
//     console.log(result)
//     break;
//     case(operater=="-"):
//     var result=num1-num2;
//     console.log(result);
//     break;
//     case(operater=="*"):
//     var result=num1*num2;
//     console.log(result);
//     break;
//     case(operater=="/"):
//     var result=num1/num2;
//     console.log(result);
//     break;
// }

