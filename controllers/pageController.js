const blog = function (req,res){
    res.render('index');
};

const blog_about = function (req,res){
    res.render('about');
};

export default {blog, blog_about};
 