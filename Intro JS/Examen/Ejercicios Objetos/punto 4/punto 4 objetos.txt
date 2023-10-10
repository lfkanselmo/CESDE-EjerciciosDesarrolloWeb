/*
4.	Del Objeto cupones = {
                         “cupon1”:{cupon:”semana10”, descuento:”20%”, fecha_caducidad:”29-07-2023”},
                         “cupon2”:{cupon:”comprasmayores100”, descuento:”10%”, fecha_caducidad:”25-07-2023”},
                        “cupon3”:{cupon:”viernesloco”, descuento:”15%”, fecha_caducidad:”27-07-2023”},
                 }
               Cambiar la clave cupon por nombre conservando los valores.

*/

cupones = {
    "cupon1":{"cupon":"semana10", "descuento":"20%", "fecha_caducidad":"29-07-2023"},
    "cupon2":{"cupon":"comprasmayores100", "descuento":"10%", "fecha_caducidad":"25-07-2023"},
   "cupon3":{"cupon":"viernesloco", "descuento":"15%", "fecha_caducidad":"27-07-2023"},
}

let newKey = "nombre";

        for(var cupo in cupones){
            document.write("<h4> " + cupo + "</h4>");            
            for(var c in cupones[cupo]){
                let valorViejo = cupo.cupon;
                delete valorViejo;
                cupo.nombre = "nombre";

                /*if(c == "cupon"){
                    cupones[cupo][c] = "nombre";
                }*/

                document.write(c + ": " + cupones[cupo][c] + "<br>");
            }
        }