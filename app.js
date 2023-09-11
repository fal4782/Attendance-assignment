
function setYear() {

    var year = document.getElementById("year").value || 2016
    // console.log(year);
    
    document.querySelector(".parent-container").style.display="block"
    
    for (let month = 0; month <= 11; month++) {
        let monthName = moment().month(month).format('MMMM')
        let monthFormat = (month + 1) + ", " + year
        // console.log(monthFormat);

        let noOfDays = moment(monthFormat, 'M, YYYY').daysInMonth()
        console.log(noOfDays, monthName);

        

        const monthBox = document.getElementById(monthName.toLowerCase())
        // console.log(monthBox);

        // const monthTitle = document.getElementById(monthName)
        // console.log(monthTitle);
        // monthTitle.innerHTML=`${monthName}, ${year}`

        let dateContent = ''

        for (let day = 1; day <= noOfDays; day++) {

            let date = moment(`${day}-${month+1}-${year}`, 'D-M-YYYY')
            let dayOfWeek = date.format('ddd')

            dateContent += `<div class = "dateWrapper"><label for="day">${day}</label><input type="checkbox" value="${day}"><label for="day" id="weekDay">${dayOfWeek}</label></div>`
        }

        monthBox.innerHTML = dateContent
    }
    // return year
}

