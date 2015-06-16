/**
 * Created by yuguihu on 15/5/25.
 */
var mongoose = require('mongoose');
var CollegeSchema = new mongoose.Schema(
    {
        title:String,
        professions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profession' }]
    });

CollegeSchema.pre('remove',function(next){
    this.professions.forEach(function(c){
        mongoose.model('Profession')
            .findById( c.id,function(res){
                res.remove();
            });
    })
    next();
})

mongoose.model('College', CollegeSchema);