var express = require('express');
var router = express.Router();
var url  = require('url');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myschool');
require('../models/Schools');
require('../models/Colleges');
require('../models/Professions');
require('../models/Classes');
require('../models/Students');
require('../models/Teachers');
var School =mongoose.model('School');
var College = mongoose.model('College');
var Profession = mongoose.model('Profession');
var Class = mongoose.model('Class');
var Student=mongoose.model('Student');
var Teacher=mongoose.model('Teacher');
//

School.remove().exec();
College.remove().exec();
Profession.remove().exec();
Class.remove().exec();
Student.remove().exec();
Teacher.remove().exec();
var stu1= new Student({name:'stu1',password:'123'});
var stu2= new Student({name:'stu1',password:'123'});

var tea1 = new Teacher({name:'tom',password:'123'});

var myclass1 = new Class({title: "网络1班",students:[stu1]});

var myclass2 = new Class({title: "网络2班",students:[stu2]});
var profession = new Profession({title: "网络专业", classes: [myclass1,myclass2],teachers:[tea1]});
var college = new College({title: "计算机学院", professions: [profession]});
var school = new School({title: "科干", colleges: [college]});

stu1.save();
stu2.save();
tea1.save();

school.save();
college.save();
profession.save();
myclass1.save();
myclass2.save();
//
//

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
route.put('/students',function(req,res,next){
    //
    //
});
router.get('/sessions',function(req,res,next)
{
    if(req.query.usertype=='学生')
   {
       //
       Student.findOne({name:req.query.username,password:req.query.password},function(err,doc){
           if(err != null)
               next(err);
           else {
               res.json(doc);
           }

       });
       //
   }
    if(req.query.usertype=='老师')
    {
        //
        Teacher.findOne({name:req.query.username,password:req.query.password},function(err,doc){
            if(err != null)
                next(err);
            else {
                res.json(doc);
            }

        });
        //
    }
  //
 // res.json('succeed');
  //next();
  //
});
router.post('/sessions',function(req,res,next){
  //

  //
});
module.exports = router;
