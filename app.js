
function setYear() {
    var year = document.getElementById("year").value
    console.log(year);

for(let month = 0; month<=11; month++){
    let monthName = moment().month(month).format('MMMM')
    let monthFormat = (month+1) +", "+year
    // console.log(monthFormat);

    let noOfDays = moment(monthFormat,'M, YYYY').daysInMonth()
    console.log(noOfDays, monthName);

    const monthBox = document.getElementById(monthName.toLowerCase())
    // console.log(monthBox);
    let dateContent = ''

    for(let day=1;day<=noOfDays;day++){
        dateContent += `<div class = "dateWrapper"><label for="day">${day}</label><input type="checkbox" value="${day}"></div>`
    }

    monthBox.innerHTML = dateContent
}
    // return year
}

