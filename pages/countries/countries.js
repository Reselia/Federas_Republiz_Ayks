const countriesList = document.getElementById("countries-list");


countries.forEach(country => {


    /* =========================
       СОЗДАНИЕ СТРОКИ
    ========================= */

    const row = document.createElement("a");


    row.className = "country-row";


    /* =========================
       ССЫЛКА НА ДОСЬЕ
    ========================= */

    if (country.profile) {

        row.href = country.profile;

    } else {

        row.href = "#";

    }


    /* =========================
       НАЗВАНИЕ
    ========================= */

    const nameBlock = document.createElement("div");


    nameBlock.innerHTML = `

        <div class="country-name">

            ${country.name}

        </div>

        <div class="country-id">

            ID: ${country.id}

        </div>

    `;


    /* =========================
       РАССТОЯНИЕ
    ========================= */

    const distanceBlock = document.createElement("div");


    distanceBlock.innerHTML = `

        <span class="country-label">

            Расстояние до Центрального мира

        </span>

        <span class="country-distance">

            ${country.distance}

        </span>

    `;


    /* =========================
       ПОСОЛЬСТВА
    ========================= */

    const embassyBlock = document.createElement("div");


    embassyBlock.className = "country-embassy";


    embassyBlock.innerHTML = `

        <span class="country-label">

            Дипломатические отношения

        </span>

        <span class="embassy-status ${
            country.embassyFRA
            ? "embassy-yes"
            : "embassy-no"
        }">

            ${country.embassyFRA
            ? "● Посольство ФРА: имеется"
            : "● Посольство ФРА: отсутствует"}

        </span>


        <span class="embassy-status ${
            country.embassyCountry
            ? "embassy-yes"
            : "embassy-no"
        }">

            ${country.embassyCountry
            ? "● Посольство государства: имеется"
            : "● Посольство государства: отсутствует"}

        </span>

    `;


    /* =========================
       ШКАЛА НАПРЯЖЁННОСТИ
    ========================= */

    const tensionBlock = document.createElement("div");


    tensionBlock.className = "country-tension";


    const tensionValue = document.createElement("div");


    tensionValue.className = "tension-value";


    tensionValue.innerHTML = `

        <span class="country-label">

            Уровень напряжённости

        </span>

        ${country.relations}

    `;


    tensionBlock.appendChild(tensionValue);


    const tensionBar = document.createElement("div");


    tensionBar.className = "tension-bar";


    for (let i = 1; i <= 10; i++) {


        const segment = document.createElement("div");


        segment.className = "tension-segment";


        if (i <= country.tension) {

            segment.classList.add("active");

        }


        tensionBar.appendChild(segment);

    }


    tensionBlock.appendChild(tensionBar);


    /* =========================
       ДОБАВЛЕНИЕ В СТРОКУ
    ========================= */

    row.appendChild(nameBlock);

    row.appendChild(distanceBlock);

    row.appendChild(embassyBlock);

    row.appendChild(tensionBlock);


    /* =========================
       ДОБАВЛЕНИЕ В БАЗУ
    ========================= */

    countriesList.appendChild(row);

});
