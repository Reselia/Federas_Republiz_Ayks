const countriesList = document.getElementById("countries-list");


countries.forEach(country => {


    /* =========================
       СОЗДАНИЕ СТРОКИ
    ========================= */

    const row = document.createElement("div");


    row.className = "country-row";


    /* =========================
       НАЗВАНИЕ
    ========================= */

    const nameBlock = document.createElement("div");


    nameBlock.innerHTML = `

        <div class="country-name-container">

            ${
                country.flag
                ? `<img
                    src="${country.flag}"
                    alt="${country.name}"
                    class="country-flag"
                >`
                : ""
            }

            <div>

                <div class="country-name">

                    ${country.name}

                </div>

                <div class="country-id">

                    ID: ${country.id}

                </div>

            </div>

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

            ${
                country.embassyFRA
                ? "● Посольство ФРА: активно"
                : "● Посольство ФРА: не активно"
            }

        </span>


        <span class="embassy-status ${
            country.embassyCountry
            ? "embassy-yes"
            : "embassy-no"
        }">

            ${
                country.embassyCountry
                ? `Посольство ${country.embassyName}: активно`
                : `Посольство ${country.embassyName}: не активно`
            }

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
       КНОПКА ПОЛНОГО ДОСЬЕ
    ========================= */

    const dossierButton = document.createElement("a");


    dossierButton.className = "country-dossier-button";


    dossierButton.innerHTML = "→";


    dossierButton.title = "Открыть полное досье";


    /* =========================
       ПЕРЕХОД В ПОЛНОЕ ДОСЬЕ
    ========================= */

    if (country.profile) {

        dossierButton.href = country.profile;

    } else {

        dossierButton.href = "#";

        dossierButton.classList.add("disabled");

    }


    /* =========================
       ДОБАВЛЕНИЕ В СТРОКУ
    ========================= */

    row.appendChild(nameBlock);

    row.appendChild(distanceBlock);

    row.appendChild(embassyBlock);

    row.appendChild(tensionBlock);

    row.appendChild(dossierButton);


    /* =========================
       ДОБАВЛЕНИЕ В БАЗУ
    ========================= */

    countriesList.appendChild(row);

});
