const time = moment().format('MMMM, YYYY')

console.log(time);

// document.getElementById("timestamp").innerHTML = time
const year = 2016
for(let month = 1; month<=12; month++){
    let monthName = moment().month(month).format('MMMM')
    let monthFormat = month +", "+year
    // console.log(monthFormat);
    let noOfDays = moment(monthFormat,'M, YYYY').daysInMonth()
    // console.log(noOfDays);

    const monthBox = document.getElementById(monthName.toLowerCase())
    // console.log(monthBox);
    let dateContent = ''

    for(let day=1;day<=noOfDays;day++){
        // dateContent += `<div class="dateBox">${day}</div>`
        dateContent += `<label for="vehicle1">${day}</label><input type="checkbox" value="${day}">`
    }

    monthBox.innerHTML = dateContent
}