var str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at."; // это строка
var mass = str.split('');
console.log(mass); // разбиваем по буквам

var mass_ind = [];  // пустой массив, в котором будут выведены индексы
var el = 'a';  // искомый элемент
var idx = mass.indexOf(el);  // находит индексы искомого элемента
while (idx != -1) {
	mass_ind.push(idx);    //добавляет индесы в пустой массив 
	idx = mass.indexOf(el, idx + 1);
  }
  alert(mass_ind);  // вывод на экран




//234245645335

var s = 234245645335;
var second = s % 3600;    //    2935
console.log(second + "  - секунд");
var hour = (s - second)/3600;    //    65068234 
console.log(hour + "  - часов");
