let title1 = document.getElementById("groupTitle1")
let title2 = document.getElementById("groupTitle2")
let title3 = document.getElementById("groupTitle3")
let title4 = document.getElementById("groupTitle4")
let title5 = document.getElementById("groupTitle5")
let title6 = document.getElementById("groupTitle6")

const response = fetch("https://fakestoreapi.com/products?limit=10")

response.then(ress => ress.json())
    .then((data) => createcards(data))
function createcards(user) {
    title1.innerHTML = user[0].title;
    title2.innerHTML = user[1].title;
    title3.innerHTML = user[2].title;
    title4.innerHTML = user[3].title;
    title5.innerHTML = user[4].title;
    title6.innerHTML = user[5].title;
}