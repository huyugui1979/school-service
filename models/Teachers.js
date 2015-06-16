/**
 * Created by yuguihu on 15/5/25.
 */
var mongoose = require('mongoose');
var TeacherSchema = new mongoose.Schema(
    {
        name:String,
        password:String,
        number:String,
        limit:String,
        image:String,
        mobile1:String,
        mobile2:String,
        qq:String
    });
mongoose.model('Teacher', TeacherSchema);