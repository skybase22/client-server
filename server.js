var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
 
let answer = Math.floor(Math.random() * Math.floor(10))
var count = -1
 
net.createServer(function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sock.write('OK')
    console.log('Random: ' , answer)
   
    sock.on('data', (data) => {
       
        // console.log('data'+data)
          console.log('countout',count)
    ++count
        if (count == 0)
        {
            console.log('countin',count)
            console.log('DATA ' + sock.remoteAddress + ': ' + data)
        }
       
       
        if (data == answer && count > 0 && count < 6 )
        {
            sock.write('Bingo')
            count = -1
            //sock.destroy()
        }  
         if (count == 5)
        {
            sock.write('END')
            count = -1
            sock.destroy()
        }
       else if (data != answer && count > 0 && count < 6 && data != 'OK')
        {
            console.log('countin',count)
            sock.write('Wrong')
           
        }
       
       
       
});
   
    sock.on('close', (data) => {
        console.log('CLOSEED: ' + sock.remoteAddress + ' ' + sock.remotePort)
    });
 
}).listen(PORT, HOST);
 
console.log('Server listening on ' + HOST + ':' + PORT)