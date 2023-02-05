fetch("https://kalafiore.github.io/json/data.json")
	.then(response => response.json())
	.then(json => {
		let myData = JSON.stringify(json)
		let table = JSON.parse(myData)

		const listWrapper = document.querySelector(".list-wrapper")

		for (let i = 0; i < table.length; i++) {
			const trackElementWrapper = document.createElement("div") //tworzymy wrapper dla pojedynczego tracka
			trackElementWrapper.classList.add("track-element-wrapper")

			const trackCheckbox = document.createElement("input") //tworzy INPUTA
			trackCheckbox.setAttribute("type", "checkbox") //atrybuty inputa
			trackCheckbox.setAttribute("value", table[i].name) //atrybuty inputa
			trackCheckbox.setAttribute("id", `trackItem${i}`) // dodaje id aby polaczyc z labelem
			trackCheckbox.classList.add("checkbox") //dodaje klase checkboc
			//___________________________________________________________________________________czyli mamy <INPUT type="checkbox" value="trackItem(i)" id="trackItem(i) class="checkbox"
			const trackLabel = document.createElement("label") //tworzy LABEL
			trackLabel.setAttribute("for", "trackItem${i}") //atrybuty labela
			trackLabel.textContent = table[i].name
			//___________________________________________________________________________________czyli mamy <LABEL for="trackItem(i)"> table[i].name </LABEL>
			listWrapper.append(trackElementWrapper) //dodajemy checkbox do diva
			trackElementWrapper.append(trackCheckbox) //dodajemy checkbox do diva
			trackElementWrapper.append(trackLabel) // dodajemy label do diva
		}

		//Tworzymy tablice wybranych elementow oraz wyswietlamy je w divie
		const checkedList = document.querySelector(".checked-list")
		let text = "<span> You have selected: </span>"
		let listArray = [] //tworzenie pustej tablicy

		const checkboxes = document.querySelectorAll(".checkbox") //tworzymy liste checkboxow
		// console.log(checkboxes)
		checkboxes.forEach(checkbox => {   //Dla kazdego checkboxa sprawdzamy czy jest zaznaczony
			function arrayCreate() {
				if (checkbox.checked == true) { //jesli tak dodajemy tytul do tablicy
					listArray.push(checkbox.value)
					checkedList.innerHTML = text + listArray.join(" / ")
				} else {
					// console.log('You unchecked item');
					listArray = listArray.filter(e => e !== checkbox.value) // jesli odznaczamy usuwamy element z tablicy
					checkedList.innerHTML = text + listArray.join(" / ") //za kazdym razem po kliknieciu wyswietlamy liste na nowo
				}
			}
			checkbox.addEventListener("click", arrayCreate) //listener na klik checkboxa
		})
	})
