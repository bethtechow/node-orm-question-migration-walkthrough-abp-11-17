'use strict';

const db = require("../config/db")

class Question{
  static CreateTable(){
    return new Promise(function(resolve){

      resolve("this doesn nothing!")
    })
  }
}


module.exports = Question;
