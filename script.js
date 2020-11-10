// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true 
//  * name: usuario2, country: france, money: 0, premiumAccount: false2 
//  * name: usuario3, country: spain, money: 537, premiumAccount: false 3
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true 
//  * name: usuario5, country: spain, money: 250, premiumAccount: false 5
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true 
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false 7

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.--> ok

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".---->No necesario usar filter
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!




var arrayUsuarios=[];
var arrayFiltrado=[];
function createUsers(){
var persona1 = {
  name:'usuario1',
  country:'spain',
  money:199,
  premiumAccount:true

};

var persona2 = {
  name : 'usuario2',
  country : 'france',
  money : 0,
  premiumAccount:false

};
var persona3 = {
  name:'usuario3',
  country:'spain',
  money:537,
  premiumAccount:false

};
var persona4 = {
  name:'usuario4',
  country:'italy',
  money:1004,
  premiumAccount:true

};
var persona5 = {
  name:'usuario5',
  country:'spain',
  money:250,
  premiumAccount:false

};
var persona6 = {
  name:'usuario6',
  country:'ireland',
   money:799,
   premiumAccount:true

};
var persona7 = {
  name:'usuario7',
  country:'spain',
  money:3345,
  premiumAccount:false

};
    
  arrayUsuarios=[persona1,persona2, persona3, persona4,persona5, persona6, persona7];

};

function filter(arrayUsuarios){ 
 let len=arrayUsuarios.length;
  for(let i=0;i<len;i++){
    if(arrayUsuarios[i].money>200&&arrayUsuarios[i].country=='spain'){
      arrayFiltrado.push(arrayUsuarios[i]);
    }
  }
};

window.addEventListener('load',onLoad);

function onLoad(){
  console.log('hi')
  createUsers();
  console.log(arrayUsuarios)
  filter(arrayUsuarios);
  console.log(arrayFiltrado)  
}