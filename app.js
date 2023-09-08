const time = moment().format('MMMM, YYYY')

console.log(time);

// document.getElementById("timestamp").innerHTML = time

for(let i = 1; i<=12; i++){
    let noOfDays = moment(i,'M').daysInMonth()
    console.log(noOfDays);
}