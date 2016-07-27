/**
 * Created by qingniao99 on 2016/7/27.
 */
var app = (require('koa'))();
var serve = require('koa-static');
var port = 6789;

app.use(serve(__dirname + '/'));
app.listen(port);
