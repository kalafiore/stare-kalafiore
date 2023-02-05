fetch("https://kalafiore.github.io/json/data.json")
	.then(response => response.json())
	.then(json => {
		let myData = JSON.stringify(json);
		let table = JSON.parse(myData);

		const listWrapper = document.querySelector('.list-wrapper');


		for (let i = 0; i < table.length; i++) {
			const trackElementWrapper = document.createElement('div') //tworzymy wrapper dla pojedynczego tracka
				trackElementWrapper.classList.add('track-element-wrapper')

			const trackCheckbox = document.createElement("input"); //tworzy INPUTA
				trackCheckbox.setAttribute("type", "checkbox"); //atrybuty inputa
				trackCheckbox.setAttribute("value", `trackItem${i}`); //atrybuty inputa
				trackCheckbox.setAttribute("id", `trackItem${i}`); // dodaje id aby polaczyc z labelem
			//___________________________________________________________________________________czyli mamy <INPUT type="checkbox" value="trackItem(i)" id="trackItem(i)"
			const trackLabel = document.createElement("label"); //tworzy LABEL
				trackLabel.setAttribute("for", "trackItem${i}"); //atrybuty labela
				trackLabel.textContent = table[i].name;
			//___________________________________________________________________________________czyli mamy <LABEL for="trackItem(i)"> table[i].name </LABEL>
			listWrapper.append(trackElementWrapper); //dodajemy checkbox do diva
			trackElementWrapper.append(trackCheckbox); //dodajemy checkbox do diva
			trackElementWrapper.append(trackLabel); // dodajemy label do diva
		}
});
