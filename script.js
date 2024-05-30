let categoryList = document.getElementById("categories")
let items = categoryList.querySelectorAll(".item")
console.log(`${items.length} категорії.`)
items.forEach(item => {
    let categoryTitle = item.querySelector("h2").textContent
    let elementsCount = item.querySelectorAll("ul li").length
    console.log(`Категорія: ${categoryTitle}`)
    console.log(`Кількість елементів: ${elementsCount}`)
})


let ingredientsHtml = document.querySelector(".ingredients")
let ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
]

let ingredientsNew = document.createElement("div")
ingredientsNew.className = "ingredients-new"
ingredientsNew.innerHTML = `
<ul>
    <li>${ingredients[0]}</li>
    <li>${ingredients[1]}</li>
    <li>${ingredients[2]}</li>
    <li>${ingredients[3]}</li>
    <li>${ingredients[4]}</li>
    <li>${ingredients[5]}</li>
</ul>
`
console.log(ingredientsNew)



let images = [
    {
    url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    },
    {
    url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
    url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    },
]
function getImg(images){
    let galleryFirst = document.getElementById("gallery")
    images.forEach(image => {
        let boxFather = document.createElement("div")
        boxFather.className = "box-father"

        boxFather.innerHTML = `
        <li class="box-images">
            <img src='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='White and Black Long Fur Cat' class="image">
        </li>
        <li class="box-images-2">
            <img src='https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Orange and White Koi Fish Near Yellow Koi Fish' class="image-2">
        </li>
        <li class="box-images-3">
            <img src='https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Group of Horses Running' class="image-3">
        </li>
        `
        galleryFirst.appendChild(boxFather)
    })
}
getImg(images)