/**
 * Created by nikhil on 7/11/16.
 */
var io=require('socket.io');
var socket=new io();

socket.on('connection',function (socket) {
    console.log('connected');
    socket.emit('news', { hello: 'world' });
   socket.on('my other event', function (data) {
        console.log(data);
})});
module.exports=socket;
