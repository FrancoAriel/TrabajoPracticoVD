var express = require('express');
const { send } = require('express/lib/response');
var app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/',function(req,res){
    if(validarjson(req.body)==false){
        res.sendStatus(400);
    } 
    else
    {
       
        const myRequest = new Request('https://reclutamiento-14cf7.firebaseio.com/personas.json', {method: 'POST', body: JSON.stringify(req.body) });
        fetch(myRequest)
            .then(response => {
                if (response.status === 200) {
                    res.sendStatus(201);
                }}).catch(error => res.sendStatus(500));
         
    }
    
})

function validarjson(json){
    if(typeof json.nombre != "string" || typeof json.apellido != "string" || typeof json.dni === "undefined" || isNaN(parseInt(json.dni)) || parseInt(json.dni) > 9999999999){
        return false;
    }

    if(json.dni===null || json.apellido===null || json.apellido==="" || json.dni==="")
    {
        return false;
    }

    if(Object.keys(json).length>3){
        return false;
    }

    return true;
}

app.listen(3000,function(error)
{
    if(error){
        console.log(error);
    }
    console.log("El servidor esta abierto")
})
