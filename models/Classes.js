/**
 * Created by yuguihu on 15/5/25.
 */
var mongoose = require('mongoose');
var ClassSchema = new mongoose.Schema(
    {
        title:String,
        students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
    });
ClassSchema.pre('remove',function(next){
    this.students.forEach(function(c) {
        mongoose.model('Student')
            .findById(c.id, function (res) {
                res.remove();
            });

        next();
    });
});
mongoose.model('Class', ClassSchema);