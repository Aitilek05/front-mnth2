let light = prompt('Please enter color');
if(light === "red" || light === "красный") {
    console.log("остановитесь")
}else if(light === "green" || light === "зеленный") {
    console.log("Можно ехать !")
}else if(light === "желтый" || light === "yellow") {
    console.log("приготовьтесь")
}else {
    console.log("Ошибка: некоректный цвет светофора")
}

