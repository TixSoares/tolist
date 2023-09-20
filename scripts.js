    input.value = ''

}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++) {
        if (values[i].deleted) {
            list.innerHTML += `
            <li class="line-through">
                ${values[i]['name']}
                <div class="flex">
                <button id='btn-ok' onclick='removeItem("${values[i].name}")'>
                <i class="fa-solid fa-xmark icon-size"></i>
            </button>
                    <button id='btn-ok' onclick='riscarItem("${values[i]['name']}")'>
                        <i class="fa-solid fa-arrow-rotate-left icon-size"></i>
                    </button> 
                </div>
            </li>`
        }   else {
            list.innerHTML += `
            <li>
                ${values[i]['name']}
                <div class="flex">
                <button id='btn-ok' onclick='removeItem("${values[i].name}")'>
    <i class="fa-solid fa-xmark icon-size"></i>
</button>
                <button id='btn-ok' onclick='riscarItem("${values[i]['name']}")'>
                    <i class="fa fa-check icon-size"></i>
                </button>
                </div>
            </li>`
        }
    }
}


function riscarItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)

    values[index].deleted = !values[index].deleted
    localStorage.setItem(localStorageKey, JSON.stringify(values))

    showValues()
}

function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
}

showValues()

