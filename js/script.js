
const colors = [
  "lightsalmon",
  "salmon	",
  "darksalmon	",
  "lightcoral	",
  "indianred	",
  "crimson	",
  "firebrick",
  "red	",
  "darkred",
  "coral	",
  "tomato	",
  "orangered",
  "gold	",
  "orange	",
  "darkorange	",
  "lightyellow",
  "lemonchiffon",
  "lightgoldenrodyellow",
  "papayawhip	",
  "moccasin	",
  "peachpuff	",
  "palegoldenrod",
  "khaki",
  "darkkhaki",
  "yellow	",
  "Green ",
  "lawngreen",
  "chartreuse",
  "limegreen",
  "lime	",
  "forestgreen",
  "green",
  "darkgreen",
  "greenyellow",
  "yellowgreen",
  "springgreen	",
  "mediumspringgreen",
  "lightgreen	",
  "palegreen	",
  "darkseagreen",
  "mediumseagreen",
  "seagreen",
  "olive	",
  "darkolivegreen",
  "olivedrab",
  "lightcyan",
  "cyan",
  "aqua",
  "aquamarine",
  "mediumaquamarine",
  "paleturquoise",
  "turquoise",
  "mediumturquoise",
  "lightseagreen",
  "powderblue",
  "lightblue",
  "lightskyblue",
  "skyblue",
  "deepskyblue	",
  "lightsteelblue",
  "dodgerblue	",
  "cornflowerblue",
  "steelblue	",
  "royalblue	",
  "blue	",
  "mediumblue",
  "Purple",
  "lavender",
  "thistle",
  "plum	",
  "violet",
  "orchid",
  "fuchsia",
  "magenta",
  "mediumorchid",
  "mediumpurple",
  "blueviolet",
  "darkviolet",
  "pink",
  "lightpink",
  "hotpink",
  "deeppink",
  "palevioletred",
  "mediumvioletred",
  "snow",
  "honeydew",
  "mintcream",
  "azure",
  "aliceblue	",
  "ghostwhite",
  "whitesmoke	",
  "seashell	",
  "beige",
  "Gray ",
  "gainsboro	",
  "silver	",
  "darkgray	",
  "gray",
  "dimgray",
  "lightslategray",
  "cornsilk",
  "blanchedalmond	",
  "bisque	",
  "navajowhite",
  "burlywood	",
  "tan",
  "rosybrown	",
  "sandybrown	",
  "goldenrod	",
  "peru",
  "chocolate",
];


const col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

var btn = document.querySelector("#btn");
var btnhex = document.querySelector("#btnHex")
var color = document.querySelector(".color");

// Atribui evento de click para o btn
btn.addEventListener("click", function () {
  const randomValue = colors[Math.floor(colors.length * Math.random())];

  document.body.style.backgroundColor = randomValue;
  color.textContent = randomValue;
});



// Atribui evento de click para o btn
btnhex.addEventListener("click", function () {
  let hexColor = "#"
  const randomValue = Math.floor(Math.random() * col.length);

  for (let index = 0; index < 6; index++) {
    hexColor += col[randomValue];
    
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
