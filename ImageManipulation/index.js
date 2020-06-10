const jimp = require('jimp')
jimp.read('ImgageFileName.jpg',(err,lenna)=>{
    if(err) throw err;
    lenna
    .resize(512,512)
    .quality(75)
    .greyscale()
    .write('EditedFile.jpg')
})
