var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var indicadorColor = document.getElementById("indicador-de-color");
var pixelGrilla = document.getElementsByClassName("pixel");
var borrarTodo = document.getElementById("borrar");
var $superHeroes = $("ul.imgs li img").addClass("superHeroes");
var superHeroes = document.getElementsByClassName("superHeroes");


var test;

/// Ejecucion de Funciones
paletaColores();
createGrilla();
//mouseOnPress();

paleta.addEventListener("click", asignarColor);
grillaPixeles.addEventListener("mousedown", pintar);
grillaPixeles.addEventListener("mousemove", pintarCorrido);
borrarTodo.addEventListener("click", borrar);

//superHeroes.addEventListener("click", loadSuperHeroe);

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;
  })
);

grillaPixeles.addEventListener('mousedown', function(e) {
  console.log('El raton se esta presionando');
  test = true;
  e.target.addEventListener('mouseup', function(e) {
     console.log('El raton NO se esta presionando');
     test = false;
  });
});

function paletaColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var color = document.createElement('div');
    //color.textContent = nombreColores[i];
    color.style.backgroundColor = nombreColores[i];
    color.className = "color.paleta";
    paleta.appendChild(color);
    //console.log(nombreColores[i]);

  }
}

function createGrilla() {
  for (var i = 0; i < 1750; i++) {
    var grillaPixel = document.createElement('div');
    grillaPixeles.appendChild(grillaPixel);
    grillaPixel.className = "pixel";
  }
}

function asignarColor(e) {
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
  
}

function pintar(e) {
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}

function pintarCorrido(e) {
  if(test){
     e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}else{
  console.log("no esta apretado");
}
}

/*
  Funcion que borra toda la grilla
*/
function borrar(e){
  $("div.pixel").animate({"background-color": "white"},1000);
}
/*
function loadSuperHeroe(e){
  cargarSuperheroe(batman);
}
*/
/*
For Only First Element
var upTop = document.querySelector('.playlist-item');
Using for loop
If you want to add event listener on all the elements then use for loop.

var upTop = document.getElementsByClassName('playlist-item');
for(let i = 0;i<upTop.length;i++){
    upTop[i].addEventListener('click', function() {
       ...
    });
}
Using forEach
Or you can convert it into array and use forEach()

var upTop = [...document.getElementsByClassName('playlist-item')];
upTop.forEach(a => a.addEventListener(click,() => ...))
Using jQuery
$('.playlist-item').click(function(){
   ...
})

/*/