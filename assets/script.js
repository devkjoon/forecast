const date = document.querySelector('#date')

let todaysDate = moment().format("MMMM Do YYYY")

date.innerText = todaysDate