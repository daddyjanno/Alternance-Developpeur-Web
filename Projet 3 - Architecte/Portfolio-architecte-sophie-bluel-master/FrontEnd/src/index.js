const BASEURL = 'http://localhost:5678/api/'

export async function fetchWorks() {
    const response = await fetch(BASEURL + 'works')
    const data = await response.json()
    return data
}

export async function fetchCategories() {
    const response = await fetch(BASEURL + 'categories')
    const data = await response.json()
    return data
}

console.log('toto')

const works = await fetchWorks()
let categories = await fetchCategories()
categories = ['Tous', ...categories]

console.log(works)
console.log(categories)

const gallery = document.querySelector('.gallery')

works.forEach((work) => {
    const figure = document.createElement('figure')
    gallery.appendChild(figure)

    const img = document.createElement('img')
    img.src = work.imageUrl
    img.alt = work.title
    figure.appendChild(img)

    const figCaption = document.createElement('figcaption')
    figCaption.innerText = work.title
    figure.appendChild(figCaption)
})
