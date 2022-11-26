"use strict";
let test =  ["Ryan", "Kieran", "Jason ", "Yous"],
    test2 = ["Ryan", "Jimmy", "123", "4", "Cool Man"],
    test3 = ["Ivan", "Max", "James", "Frank", "Rache", "Dick", "Ryan", "Omar", "Claire", "Bart", "Arnold", "JoJo", "Nikola", "Chris"];
    




function friend(friends){
   const reg = /[a-zA-Z]/ig,
        result = [];


   for (let i=0; i<friends.length; i++) {

 if (friends[i].length==4 && reg.test(friends[i].toString) && !friends[i].includes(' ')) {
    
    result.push(friends[i].toString());

    }
}       

return result;
  }

  console.log(friend(test));
  console.log(friend(test3));
  console.log(friend(test2));


  // best solution 
//   function friend(friends){
//   return friends.filter(n => n.length === 4)
// }
Array.filter();