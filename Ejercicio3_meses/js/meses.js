//ARRAY DE MESES
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(meses.length);

//RECORRIDO E IMPRESION DE CADA ELEMENTO DEL ARRAY DENTRO DE UN ID COMO DE LA CÓNSOLA
for(let i = 0; i < meses.length; i++){
    document.getElementById("month").innerHTML+= "<li>" + meses[i] + "</li>";
    console.log(meses[i]);
}
    
