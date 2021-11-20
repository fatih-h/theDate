const d = new Date();

/* #year - text ve renk dinamikleşti. */
let year = document.getElementById("year");

year.innerText = d.getFullYear();
setInterval(yearColor, 1000);

/* .date-time - text ve renk dinamikleşti.*/
let dateTime = document.querySelector(".date-time");
let dateNow = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear();
let timeNow = d.getHours() + ':' + d.getMinutes();

dateTime.innerText = 'Day: ' + dateNow + ' - ' + 'Time: ' + timeNow;
setInterval(dateColor, 10000);

/*list items color changer*/
let tags = document.getElementsByTagName('li');
Array.from(tags).forEach(element => {
    if (element.innerText % 2 == 0) { element.style.backgroundColor = "red" }
    else { element.style.backgroundColor = "blue" }
});


/*Renk fonksiyonları*/
function dateColor() {
    dateTime.style.color = colorGenerator();
}

function yearColor() {
    year.style.color = colorGenerator();
}

function colorGenerator() {

    let hexNumber = Math.floor(Math.random() * 16777215).toString(16);
    let hexColor = '#' + hexNumber;
    return hexColor;

}
