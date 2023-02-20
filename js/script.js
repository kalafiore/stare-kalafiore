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
			trackLabel.setAttribute("id", i) //__________NEW
			// trackLabel.setAttribute("for", `trackItem${i}`) //atrybuty labela - jak klikniemy na tytul zaznacza sie checkbox
			trackLabel.textContent = table[i].name
			//___________________________________________________________________________________czyli mamy <LABEL for="trackItem(i)"> table[i].name </LABEL>

			//dodajemy diva na liste kursow danego tracka
			// const courseListWrapper = document.createElement("div")
			// courseListWrapper.classList.add("course-list-wrapper")
			// courseListWrapper.id = `course-for-truck${i}`
			// courseListWrapper.setAttribute("nr", i)

			// courseListWrapper.textContent = "belblebel"
			//_________________________________________________________________________________czyli mamy <div class="course-list-wrapper" id="trackItem(i)" nr="i"> </div>

			listWrapper.append(trackElementWrapper) //dodajemy wraper do diva
			trackElementWrapper.append(trackCheckbox) //dodajemy checkbox do diva
			trackElementWrapper.append(trackLabel) // dodajemy label do diva
			// listWrapper.append(courseListWrapper) // doajemy liste kursow
			trackLabel.addEventListener("click", checkCourse)

			//___________jesli zrobie ta funkcje poza petla i w petli chce tylko ja wywolac z przekazaniem parametru to sie wykonuje automatyczeni a nie na click ????
			function checkCourse() {
				// console.log(table[this.id].link);
				fetch(table[this.id].link)
					.then(response => response.json())
					.then(json => {
						let myData = JSON.stringify(json)
						let tableCourses = JSON.parse(myData)
						console.log(tableCourses)

						if (document.querySelector(`#course-for-truck${i}`) === null) { //sprawdzamy czy lista kursow danego tracka jest juz rozwinieta
							
							const divCreate = document.createElement("div") //div w ktory bedzie opkawana lista kursow
							divCreate.classList.add("course-list-wrapper") //stylujemy go
							divCreate.id = `course-for-truck${i}`
							trackLabel.parentNode.after(divCreate) // tworzymy tego diva
							for (let i = 0; i < tableCourses.length; i++) {
								// wypelniamy go lista kursow
								const courseParagraph = document.createElement("div")
								courseParagraph.textContent = tableCourses[i].name
								divCreate.append(courseParagraph)
							}
						} else {
							document.querySelector(`#course-for-truck${i}`).classList.toggle("hidden")
						}

					})
			}
		}

		//______NEW_____funkcja ma wstawiac liste kursow z tracka do diva po kliknieciu na tracka

		//Tworzymy tablice wybranych elementow oraz wyswietlamy je w divie

		const checkedList = document.querySelector(".checked-list")
		let text = "<span> You have selected: </span>"
		let listArray = [] //tworzenie pustej tablicy

		const checkboxes = document.querySelectorAll(".checkbox") //tworzymy liste checkboxow
		// console.log(checkboxes)
		checkboxes.forEach(checkbox => {
			//Dla kazdego checkboxa sprawdzamy czy jest zaznaczony
			function arrayCreate() {
				if (checkbox.checked == true) {
					//jesli tak dodajemy tytul do tablicy
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
