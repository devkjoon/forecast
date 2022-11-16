const date = document.querySelector("#date");
const apiKey = "b169b31281ffa2a2b70b9e8ac22c3e88";
const todaysDate = moment().format("MMMM Do YYYY");

date.innerText = todaysDate;
