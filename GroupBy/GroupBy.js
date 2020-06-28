var mongoose = require('mongoose');

mongoose.connect('mongodb://StringConnection', {useNewUrlParser: true}, (err) => {
    console.log('mongodb connected', err);
})

var celular = mongoose.model('Celular',{
    Marca : String,
    Modelo : String
    });

var samsung = new celular({
   Marca: "samsung",
   Modelo: "S1"
});
samsung.save((err)=>{
    if(err)
        console.log('Erro para salvar no mongo');
    console.log('Salvo com sucesso');
});

var samsung = new celular({
   Marca: "samsung",
   Modelo: "S2"
});

samsung.save((err)=>{
    if(err)
        console.log('Erro para salvar no mongo');
    console.log('Salvo com sucesso');
});

var samsung = new celular({
   Marca: "samsung",
   Modelo: "S3"
});

samsung.save((err)=>{
    if(err)
        console.log('Erro para salvar no mongo');
    console.log('Salvo com sucesso');
});

var moto = new celular({
   Marca: "Motorola",
   Modelo: "M1"
});

moto.save((err)=>{
    if(err)
        console.log('Erro para salvar no mongo');
    console.log('Salvo com sucesso');
});

var moto = new celular({
   Marca: "Motorola",
   Modelo: "M1"
});

moto.save((err)=>{
    if(err)
        console.log('Erro para salvar no mongo');
    console.log('Salvo com sucesso');
});

var moto = new celular({
   Marca: "Motorola",
   Modelo: "M2"
});

moto.save((err)=>{
    if(err)
        console.log('Erro para salvar no mongo');
    console.log('Salvo com sucesso');
});

celular.aggregate([
    {
     $group: {
      _id: '$Marca',
      Modelo: { $push:"$Modelo"}
     }
   }],(err, result)=>{
     if(!err){
       data = JSON.stringify(result);
       data = JSON.parse(data);
       console.log(data);
   }else{
     throw err;
    }
});
