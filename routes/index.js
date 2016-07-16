
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello World' });
};

exports.itemsList = function(req, res){
    res.render('items_list', {title: 'Items View'});
};
