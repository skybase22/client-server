var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
 
var count = 1
 
var client = new net.Socket ()
    client.connect(PORT, HOST, () => {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT)
    client.write('Noppadol')
    
});
    var stdin = process.openStdin()
    client.on('data', (data) => {
    console.log('DATA: ' + data)
    if (data == 'OK')
    {
            
            stdin.addListener('data', (num) => {
            client.write(' '+ num)
        })
        // if (data == 'Bingo' || data == 'END')
        // {
        //     stdin.destroy()
        // }
    }
    if (data == 'Bingo')
    {
        stdin.destroy()
        client.destroy()
        
    }
    else if (data == 'END')
    {
        
        stdin.destroy()
        client.destroy()
        
    }
       
  
});
 
    client.on('close', () => {
    console.log('Connection closed')
});