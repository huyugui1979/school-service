/**
 * Created by yuguihu on 15/5/25.
 */
var mongoose = require('mongoose');
var ProfessionSchema = new mongoose.Schema(
    {
        title:String,
        classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }],
        teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }]
    });
ProfessionSchema.pre('remove',function(next){

    this.classes.forEach(function(c){
        mongoose.model('Class')
            .findById( c.id,function(res){
                res.remove();
            });
    })
    this.teachers.forEach(function(c){
        mongoose.model('Teacher')
            .findById( c.id,function(res){
                res.remove();
            });
    })
    next();
})
mongoose.model('Profession', ProfessionSchema);