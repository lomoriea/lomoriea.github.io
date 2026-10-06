function addItem() {
      const input = document.getElementById("itemInput");
      const item = input.value.trim();

      if (item !== "") {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
          <label>
            <input type="checkbox">
            ${item}
          </label>
        `;

        document.getElementById("checklist").appendChild(listItem);

        input.value = "";
      }
    }