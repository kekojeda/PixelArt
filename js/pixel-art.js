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
var goma = document.getElementById("goma");
var guardar = document.getElementById("guardar");
var mouseOnUp;// variable para guardar si el mouse esta presionado o no.

/**
 * Se Ejecutan las Funciones
 */
paletaColores();
createGrilla();

/**
 * Guarda PixelArt
 */
guardar.addEventListener("click", savePixelArt);

function savePixelArt() {
  guardarPixelArt();
}


/**
 * Carga SuperHeroes en la grilla
 */
var batmanPixel = document.getElementById("batman");
var wonderWomanPixel = document.getElementById("wonder");
var flashPixel = document.getElementById("flash");
var InvisiblePixel = document.getElementById("invisible");

batmanPixel.addEventListener("click", cargarBatman);
wonderWomanPixel.addEventListener("click", cargarWonder);
flashPixel.addEventListener("click", cargarFlash);
InvisiblePixel.addEventListener("click", cargarInvisible);

function cargarBatman() {
  cargarSuperheroe(batman);
  console.log("se cargo batman");
}

function cargarFlash() {
  cargarSuperheroe(flash);
  console.log("se cargo flash");
}

function cargarWonder() {
  cargarSuperheroe(wonder);
  console.log("se cargo Wonder Womman");
}

function cargarInvisible() {
  cargarSuperheroe(invisible);
  console.log("se cargo invisible");
}
/**
 * FIN Carga SuperHeroes en la grilla
 */


/**
 * EventListenet para detectar mouse presionado o no
 */
grillaPixeles.addEventListener("mousedown", function () {
  mouseOnUp = "DOWN";
  console.log(mouseOnUp);
}
);
grillaPixeles.addEventListener("mouseup", function () {
  mouseOnUp = "UP";
  console.log(mouseOnUp);
}
);

paleta.addEventListener("click", asignarColor);
grillaPixeles.addEventListener("click", pintar);
grillaPixeles.addEventListener("mousemove", pintarCorrido);
borrarTodo.addEventListener("click", borrar);


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

function paletaColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var color = document.createElement('div');
    color.style.backgroundColor = nombreColores[i];
    color.className = "color.paleta";
    paleta.appendChild(color);
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
  if (mouseOnUp=="DOWN") {
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  } else if (mouseOnUp=="UP") {
    e.target.style.backgroundColor = "none";
  }
}

goma.addEventListener("click", borrarGoma);

function borrarGoma() {
    indicadorColor.style.backgroundColor = "white";
  }


/*
  Funcion que borra toda la grilla
*/
function borrar(e) {
  $("div.pixel").animate({ "background-color": "white" }, 1000);
}