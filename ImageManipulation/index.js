const jimp = require('jimp')
jimp.read('ato.jpg',(err,lenna)=>{
    if(err) throw err;
    lenna
    .resize(512,512)
    .quality(75)
    .write('edited.jpg')
})