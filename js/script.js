fetch('https://kalafiore.github.io/json/data.json')
	.then(response => response.json())
	.then(json => {
		let myData = JSON.stringify(json)
		let table = JSON.parse(myData)
		console.log(table);

		const accordion = document.querySelector(".accordion")


		////ADDING ACODRIGON
		for (let i = 0; i < table.length; i++) {

			//////ADDING TITLES
			const titleDiv = document.createElement("div")
			titleDiv.classList.add("accordion-item")
			const h1 = document.createElement("h1")
			h1.classList.add("accordion-header")
			h1.setAttribute("id", `heading${i}`)
			const button = document.createElement("button")
			button.classList.add("accordion-button")
			button.classList.add("collapsed")
			button.setAttribute("type", "button") //atrybuty, sprawdzic czy mozna kilka w jednym poleceniu
			button.setAttribute("data-bs-toggle", "collapse")
			button.setAttribute("data-bs-target", `#collapse${i}`)
			button.setAttribute("aria-expanded", "false")
			button.setAttribute("aria-controls", `collapse${i}`)
			button.textContent = table[i].title
			h1.append(button)
			titleDiv.append(h1)
			accordion.append(titleDiv)

			/////ADDING DESCRIPTIONS
			const descriptionDiv = document.createElement("div")
			descriptionDiv.setAttribute("id", `collapse${i}`)
			descriptionDiv.classList.add("accordion-collapse")
			descriptionDiv.classList.add("collapse")
			descriptionDiv.setAttribute("aria-labelledby", `heading${i}`)
			descriptionDiv.setAttribute("data-bs-parent", "#accordionExample")
			const descriptionBody = document.createElement("div")
			descriptionBody.classList.add("accordion-body")
			descriptionBody.textContent = table[i].description
			descriptionDiv.append(descriptionBody)
			accordion.append(descriptionDiv)
		}
	})






