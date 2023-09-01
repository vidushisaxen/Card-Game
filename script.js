// let x = Number.MAX_VALUE;
// let y= Number.MIN_VALUE;
// console.log("Maximum value is:" +x);
// console.log("Minimum value is:"+y);

// Create a variable that stores a number, and then add 5 to it.
// let a=8;
// console.log(a+5);

// Create a variable that stores a string, and then concatenate another string onto it.
// let a ="hello";
// let b="world";
// console.log(a+"  "+b);

// Create a boolean variable that is true, and then set it to false.
// let a= true;
// let b=!a;
// console.log(b);

//  Create a variable that is undefined, and then assign a value to it.
// let a;
// a = "hello";
// console.log(a);

//  Create a null variable, and then try to access one of its properties.
// let a=null;
// console.log(a);

// Create a symbol, and then use it to create a unique object property.
// let s= Symbol("Hello");
// console.log(s);

// Create a function that takes in a number parameter and returns a string.
// function vid(a){
//   return a.toString();
// }
// const result = vid(5);
// console.log(result);
// console.log(typeof result);

// Create a function that takes in a string parameter and returns a boolean.
// function abc(str){
//     return (str==='true');
// }
// let a = abc("true");
// console.log(a);

// Create a function that takes in two number parameters and returns their sum.
// const add =(a,b)=>{
//     return a+b;
// }
// console.log(add(7,5));

// Create a function that takes in a boolean parameter and returns its opposite value.
// function oppo(a){
//     return !a;
// }
// console.log(oppo(true));




// const arr=[9,3,7,8,5];

// Map
// const output = arr.map((x) => 2*x);
// console.log(output);

// Filter()
// const output = arr.filter((x)=> x>5)
// console.log(output);

// Reduce()
// const output = arr.reduce((acc,curr)=>{
//  acc=acc+curr;
//  return acc;
// },0);
// console.log(output);


// var a= document.querySelectorAll(".img")
// var b = document.querySelector(".x")
// var prev="";
// var cur="";
// a.forEach((img)=>{
   
//     cur="";
//     img.addEventListener("click",function(event){
//         prev=cur;
//         cur = img.getAttribute("data-green");
//         console.log("Clicked");
//         if(prev == cur){
//             b.textContent = "Winner";
//         }
//         console.log(prev)
//     })
// })
// console.log(a);



// Filter Even Numbers: Write a function that takes an array of numbers and returns a new array containing only the even numbers.
  
// const arr = [2,4,5,6,7,8,9,0];
// const d=5;
// const output = arr.filter((x)=> x%2==0
// )
// console.log(output);

// Map to Square: Create a function that takes an array of numbers and returns a new array with each number squared.
// const output= arr.map((x)=>x*x)
// console.log(output)

// Calculate Total: Write a function that takes an array of prices and a discount percentage, and returns the total price after applying the discount to each item.
// const output= arr.reduce((acc,curr)=>{
//     acc=acc+(d/100*curr);
//     return acc;
// })
// console.log(output);

// Find Largest String: Create a function that takes an array of strings and returns the longest string in the array.
// const arr=["hello","world","vid","vidushi","apple"]
// let max=arr[0].length;
// let curr=0;
// let ans="";
// for(let i=0;i<arr.length;i++){
//     curr=arr[i].length;
//     if(curr>max){
//     max=curr;
//     ans=arr[i];
//     }
// }
// console.log(max,ans);

// Sum Nested Arrays: Write a function that takes an array of arrays of numbers and returns the sum of all the numbers in all the arrays.
// const arr=[[1,2],[3,4],[3,7]]

// function arrsum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//       if(typeof arr[i]=='number')
//       sum+=arr[i];
//     else(arr[i] instanceof Array)
//     sum+=arrsum(arr[i]);
//     }
//     return sum;
// }
// const output = arrsum(arr);
// console.log(output);

// Group by Property: Given an array of objects, group them by a specific property and return an object where keys are the property values and values are arrays of objects with that property value.
// const arr = [
//         {
//              title:"Atomic habits",
//              author:"James Clear",
//              pages:120
//          },
//          {
//              title:"Alchemist",
//              author:"Paul Coelho",
//              pages:250
//          },
//          {
//              title:"Java Programming",
//              author:"Sumita Arora",
//              pages:500
//          }
//      ]


// Remove Duplicates: Implement a function that takes an array and returns a new array with all duplicate values removed.
// const arr=[1,1,2,3,4,5,3,2,4];
// const output = [...new Set(arr)];
// console.log(output);


// Calculate Average: Write a function that takes an array of numbers and returns the average value.
// const arr = [1,56,76,90,34,52,88,11,9,70];
// let ans=0;
// let sum=0;
// function average(arr){
//     for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
//     }
//     return sum/arr.length;
// }
// const output = average(arr);
// console.log(output);


// Custom Sorting: Create a function that takes an array of objects and a key, and sorts the array based on the values of that key in each object.


// Compose Functions: Implement a function that takes any number of functions as arguments and returns a new function that applies them in order.




// OBJECTS

// . Create an object that represents a person, with properties for their name, age, and address.
// const person= {
//     name:"Vidushi Saxena",
//     age:21,
//     address:"Faizabad"
// };
// console.log(person.name +" possess an age of " + person.age +" years lives in " +person.address);

// Create an array of objects, where each object represents a book, with properties for the title, author, and number of pages.

// const arr = [
//     {
//         title:"Atomic habits",
//         author:"James Clear",
//         pages:120
//     },
//     {
//         title:"Alchemist",
//         author:"Paul Coelho",
//         pages:250
//     },
//     {
//         title:"Java Programming",
//         author:"Sumita Arora",
//         pages:500
//     }
// ]
// for(let i=0;i<arr.length;i++){
//    const x=arr[i];
//    console.log(x.title +" "+ x.author+" "+ x.pages);
// }


// Write a function that takes in an object and adds a new property to it.
// const person ={
//     name:"Vidushi",
//     age:21
// }
// function add(){
//     person.address="Faizabad";
// }
// add();
// console.log(person);

// Write a function that takes in an object and a property name, and returns true if the object has that property, and false otherwise.
// const person ={
//        name:"Vidushi",
//          age:21
//      }
//      console.log(person.hasOwnProperty('name'));

// Write a function that takes in an object and returns an array of all the values in the object.
// const person ={
//             name:"Vidushi",
//               age:21
//         }
//         function fun(person){
//             return (Object.values(person));
//         }
//         const result = fun(person);
//         console.log(result);

// const sak={
//     name:"Vishu",
//     age:21
// };
// function add(){
//     sak.frnd="vid",
//     sak.add="xyz"
// }
// add();
// console.log(sak);

// Write a function that takes in an object and returns an array of all the keys in the object.
//  const person ={
//              name:"Vidushi",
//                age:21
//          }
//          function fun(person){
//             return (Object.keys(person));
//          }
//          const result = fun(person);
//        console.log(result);

//  Write a function that takes in an array of objects and a property name, and returns an array of all the values of that property across all the objects.
// const arr = [
//          {
//              title:"Atomic habits",
//              author:"James Clear",
//              pages:120
//          },
//          {
//              title:"Alchemist",
//              author:"Paul Coelho",
//              pages:250
//          },
//         {
//             title:"Java Programming",
//             author:"Sumita Arora",
//             pages:500
//         }
//  ]
//  let result = arr.map((a)=> a.title)
//  console.log(result);

// Write a function that takes in an array of objects and a property name, and returns an object where the keys are the values of that property, and the values are arrays of all the objects with that value for the property.

// const arr = [
//               {
//                   title:"Atomic habits",
//                   author:"James Clear",
//                   pages:120
//               },
//               {
//                   title:"Alchemist",
//                   author:"Paul Coelho",
//                   pages:250
//               },
//              {
//                  title:"Java Programming",
//                  author:"Sumita Arora",
//                  pages:500
//              }
//       ]
//       function vid(arr,pages){
      
//       }




// You are given an array of objects representing products in an online store. Each product has properties like name, price, and category. Your task is to perform a series of transformations using array methods to achieve the following:
// Filter out products that are in the "Electronics" category.
// Double the price of the remaining products.
// Calculate the total price of all products after doubling their prices.

// const arr = [
//     {
//         neme:"Philips Dryer",
//         price:1000,
//         category:"Electronics"
//     },
//     {
//         name:"COrnflakes",
//         price:150,
//         category:"Grocery"
//     },
//     {
//         name:"Panasonic Telivision",
//         price:50000,
//         category:"Electronics"
//     },
//     {
//         name:"Iron",
//         price:300,
//         category:"Electronics"
//     },
//     {
//         name:"Jam",
//         price:100,
//         category:"Grocery"
//     }
// ]
// const electronicfilter = arr.filter((x)=>x.category=="Electronics");
// console.log(electronicfilter);

// const doubleprice = electronicfilter.map((x)=>({
//     price: x.price*2
// }));
// console.log(doubleprice);
// const total = doubleprice.reduce((acc,curr)=>{
   
//     acc+=curr.price;
//     return acc;
// },0)
// console.log(total);