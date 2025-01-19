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

console.log(works)
const gallery = document.querySelector('.gallery')
console.log(gallery)

works.forEach((work) => {
    gallery.innerHTML += ` <figure>
                        <img
                            src=${work.imageUrl}
                            alt=${work.title}
                        />
                        <figcaption>${work.title}>
                    </figure>`
})
