/**
 * Created by yuguihu on 15/5/25.
 */
var mongoose = require('mongoose');
var StudentSchema = new mongoose.Schema(
    {
        name:String,
        password:String,
        number:String,
        limit:String,
        image:String,
        mobile:String,
        qq:String,
        sex:String,
        age:String
    });
mongoose.model('Student', StudentSchema);