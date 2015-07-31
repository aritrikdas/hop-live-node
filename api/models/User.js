/**
* User.js
*
* @description :: This model will hold all the user's data
*/


module.exports = {

  attributes: {
    email: {type: 'string'},
    mobNo: {type: 'integer'},
    fname: {type: 'string'},
    lname: {type: 'string'},
    profilepic: {type: 'string'}
  }
};