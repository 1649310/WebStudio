var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");

// new - створити об'єкт (об'єкт - це блок даних, який має методи які можуть з ним працювати)
// SimpleImage - це ім'я об'єкта, що потрібно створити
// dinos.png - параметри:додаткова інформація

var w = fgImage.getWidth();
var h = fgImage.getHeight();

// fgImage - ім'я об'єкта, для якого хочемо застосувати метод
// крапка означає належність до об'єкта
// getHeight - це ім'я методу, в () - вказуються параметри

// перший рядок - створює зображення з навою fgImage
// другий рядок - створює інше зображення з назвою bgImage


// var x = 3;
// var y = 2;
// y = x;

// print(x);
// print(y);

var image = new SimpleImage('chapel.png');

var w = image.getWidth();
var h = image.getHeight();
// var px = image.getPixel(x, y);
// var red = image.getRed(x, y);
// var green = image.getGreen(x, y);
// var blue = image.getBlue(x, y);

// print(image);
print(w);
print(h);
// print(px);
// print(red);
// print(green);
// print(blue);


function square(x){
    var ans = x*x;
    return ans;
}
var y = square(4);
print(y);

function add(){
    var add = "a"+"b";
    return add;
}
var y = add();
print(y);

function whimage() {
    var wh = w+h; 
    return wh;
}
var y = whimage();
print(y);
