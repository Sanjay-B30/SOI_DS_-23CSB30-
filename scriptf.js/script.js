

// if(a===b){
    //console.log("Statement True")
//}
//else{
    //console.log("Statement False")
//}

//const a="test";
//a.toUpperCase();
// //console.log(a.toUpperCase());
// const arr=["Orange","Apple","Grape"];
// arr.push("Banana");
// console.log(arr);

//function sum(){
  //  const num=Number(prompt("Enter a number"));
    //console.log(num + 10);

//}


//const obj = {
    //name:"some name",
    //type:"Good",
    //fav:["Orange","Apple"],
//};

//const test = "type";
//console.log(obj[test]);

//obj.newkey = 10;
//console.log(obj);

let arr = [10,20,80,40,60];
let max=arr[0];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] >max) {
        max=arr[index];
       
    }
}
console.log(max);

let array = [1,2,3,4,5];
let sum=0;
for (let index = 0; index < array.length; index++) {
    sum=sum+array[index];
       
}
console.log(sum);

//function allparams(first,...a){
    //console.log(first, a);
//}

//allparams(10,20,30);

//function sum(a , b){
   // console.log(a+b);
//}
//sum(1,10);

//function sum(a , b){
  //  return (a+b);
//}
//console.log(sum(1,10));

arr=[10,20,10,30,40];
function uniquenumber(arr){
  const set = new Set(arr);
  return set;
}
console.log(uniquenumber(arr));

const str = "love";
function palindrome(str){
    const arr = str.split('');
    const reversearray = arr.reverse();
    const reversestring = reversearray.join('');
    if (str === reversestring) {
        console.log("It is a palindrome");
    }
    else{
        console.log("It is not a palindrome");
    }
}

palindrome(str);