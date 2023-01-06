const table = [
	[
		"bleble",
		"blelbelbfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdfdsfsfdsfdsfdsfdsfdsfdsfbfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdfdsfsfdsfdsfdsfdsfdsfdsfbfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdfdsfsfdsfdsfdsfdsfdsfdsfbfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdfdsfsfdsfdsfdsfdsfdsfdsfle_opis   sfdsfdfdsfsfdsfdsfdsfdsfdsfdsfbfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdfdsfsfdsfdsfdsfdsfdsfdsfbfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdfdsfsfdsfdsfdsfdsfdsfdsfbfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfdsfdsfdfdsfsfdsfdsfdsfdsfdsfdsfbfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdsfd",
	],
	["jojo", "ojojoj_opis"],
	["hohohohoh", "hohohoho_opis"],
]


const accordion = document.querySelector(".accordion")

for (let i = 0; i < table.length; i++) {
	const titleDiv = document.createElement("div")
	titleDiv.classList.add("accordion-item")
	const h1 = document.createElement("h1")
	h1.classList.add("accordion-header")
	// h1.setAttribute("id", "headingOne")
	h1.setAttribute("id", `heading${i}`)
	const button = document.createElement("button")
	button.classList.add("accordion-button")
	button.classList.add("collapsed")
	button.setAttribute("type", "button") //atrybuty, sprawdzic czy mozna kilka w jednym poleceniu
	button.setAttribute("data-bs-toggle", "collapse")
	// button.setAttribute("data-bs-target", "#collapseOne")
	button.setAttribute("data-bs-target", `#collapse${i}`)
	button.setAttribute("aria-expanded", "false")
	button.setAttribute("aria-controls", `collapse${i}`)
	button.textContent = table[i][0]
	h1.append(button)
	titleDiv.append(h1)
	accordion.append(titleDiv)

	/////i teraz dodac opis analogicznie
	const descriptionDiv = document.createElement("div")
	descriptionDiv.setAttribute("id", `collapse${i}`)
	descriptionDiv.classList.add("accordion-collapse")
	descriptionDiv.classList.add("collapse")
	// descriptionDiv.classList.add('show')
	descriptionDiv.setAttribute("aria-labelledby", `heading${i}`)
	descriptionDiv.setAttribute("data-bs-parent", "#accordionExample")
	const descriptionBody = document.createElement("div")
	descriptionBody.classList.add("accordion-body")
	descriptionBody.textContent = table[i][1]
	descriptionDiv.append(descriptionBody)
	accordion.append(descriptionDiv)
}


// const json = '{"blble":"bleble_opis","trutu":"trutu_opis"}'
// const data = JSON.parse(json)
// console.log(data.blble);

// fetch("./json/data.json")
//   .then(response => response.json())
//   .then(json => console.log(json));
