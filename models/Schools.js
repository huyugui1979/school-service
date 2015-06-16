var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema(
    {
        title: String,
        colleges: [
            {type: mongoose.Schema.Types.ObjectId, ref: 'College'}
        ]
    });


SchoolSchema.pre('remove',function(next){
    this.colleges.forEach(function(c){
        mongoose.model('College')
        .findById( c,function(res){
                res.remove();

            });
    })
    next();
})
mongoose.model('School', SchoolSchema);
