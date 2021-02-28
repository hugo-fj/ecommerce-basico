
module.exports = {
    home:(req,res)=>{
        res.send('Bem vindo a API ecommerce');
    },
    finalizarCompra:( req,res)=>{
        console.log(req.body);
        res.send('ok')
    }
};