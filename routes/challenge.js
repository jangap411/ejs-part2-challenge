const express = require('express');
const router = express.Router();


  //data
  let data = {
    users:[
      {
        name: "burt lannister",
        age: 56,
        hobbies: ['reading', 'polo']
      },
      {
        name: "tobe nwige",
        age: 27,
        hobbies: ['writing', 'pressing flowers']},
      {
        name: "miguel atwood",
        age: undefined,
        hobbies: ['music', 'mediation']
      },
      {
        name: "hieu ngyen",
        age: 33,
        hobbies: undefined
      },
      {
        name: undefined,
        age: undefined,
        hobbies: undefined
      }
    ]
}



router.get('/challenge',(req, res)=>{
  console.log('challenge')
  res.render("challenge", data);
});

// for(let user of users){
//   if(user.name == undefined) console.log('bad name');
//   if (user.age == undefined) console.log("bad age");
// }




module.exports = router;