document.addEventListener("DOMContentLoaded", () => {

    const registry =
        document.getElementById("interpol-person-list");


    if (!registry) {
        return;
    }


    /*
    =========================================================
    INTERPOL — ПЕРСОНАЛЬНЫЙ РЕЕСТР

    persons-data.js:
    содержит только данные записей.

    persons.js:
    отвечает только за построение интерфейса.
    =========================================================
    */


    if (
        typeof persons === "undefined" ||
        !Array.isArray(persons)
    ) {

        console.error(
            "INTERPOL: persons-data.js не найден или содержит ошибку."
        );

        return;

    }


    /*
    =========================================================
    ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
    =========================================================
    */


    function safeValue(value, fallback = "НЕ УКАЗАНО") {

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {

            return fallback;

        }

        return value;

    }


    function renderLabels(labels) {

        if (!labels) {
            return "";
        }


        if (!Array.isArray(labels)) {

            labels = [labels];

        }


        return labels
            .filter(label => label)
            .map(label => `
                <span class="person-label">
                    ${label}
                </span>
            `)
            .join("");

    }


    function renderDateRemoved(date) {

        return safeValue(
            date,
            "НЕ УСТАНОВЛЕНА"
        );

    }


    function renderTerm(term) {

        return safeValue(
            term,
            "БЕССРОЧНО"
        );

    }


    function renderStatus(status) {

        return safeValue(
            status,
            "АКТИВНА"
        );

    }


    /*
    =========================================================
    ПУСТОЙ РЕЕСТР
    =========================================================
    */


    if (persons.length === 0) {

        registry.innerHTML = `

            <div
                class="interpol-empty-state"
                style="
                    margin-top: 30px;
                    padding: 55px 35px;
                    text-align: center;
                "
            >

                <div
                    class="empty-code"
                    style="
                        margin-bottom: 20px;
                    "
                >
                    INT-FRA-P / 000
                </div>


                <h3
                    style="
                        margin: 0 0 16px;
                    "
                >
                    ЗАПИСИ ОТСУТСТВУЮТ
                </h3>


                <p
                    style="
                        margin: 0;
                        line-height: 1.8;
                    "
                >
                    В настоящее время опубликованных
                    персональных ограничений нет.
                </p>

            </div>

        `;

        return;

    }


    /*
    =========================================================
    СОЗДАНИЕ РЕЕСТРА
    =========================================================
    */


    registry.innerHTML = "";


    persons.forEach(person => {


        const card =
            document.createElement("article");


        card.className =
            "interpol-person-card";


        card.dataset.personId =
            safeValue(person.id, "UNKNOWN");


        card.innerHTML = `


            <!-- =================================================
                 ВЕРХНЯЯ ЧАСТЬ
            ================================================= -->


            <div class="person-card-main">


                <!-- ФОТО -->


                <div class="person-photo-container">

                    <img
                        src="${safeValue(person.photo, "")}"
                        alt="Фотография: ${safeValue(person.name)}"
                        class="person-photo"
                        loading="lazy"
                    >

                </div>



                <!-- ОСНОВНАЯ ИНФОРМАЦИЯ -->


                <div class="person-information">


                    <div class="person-name-row">


                        <h3 class="person-name">

                            ${safeValue(person.name)}

                        </h3>



                        <div class="person-labels">

                            ${renderLabels(person.labels)}

                        </div>


                    </div>



                    <div class="person-id">

                        ${safeValue(person.id)}

                    </div>



                    <div class="person-status">

                        <span class="person-status-label">
                            СТАТУС
                        </span>

                        <span class="person-status-value">

                            ${renderStatus(person.status)}

                        </span>

                    </div>


                </div>


            </div>



            <!-- =================================================
                 СЛУЖЕБНАЯ ИНФОРМАЦИЯ
            ================================================= -->


            <div class="person-meta">


                <div class="person-meta-item">

                    <span class="person-meta-label">
                        ДАТА ВНЕСЕНИЯ
                    </span>

                    <span class="person-meta-value">

                        ${safeValue(person.dateAdded)}

                    </span>

                </div>



                <div class="person-meta-item">

                    <span class="person-meta-label">
                        ДАТА УДАЛЕНИЯ
                    </span>

                    <span class="person-meta-value">

                        ${renderDateRemoved(person.dateRemoved)}

                    </span>

                </div>



                <div class="person-meta-item">

                    <span class="person-meta-label">
                        СРОК
                    </span>

                    <span class="person-meta-value">

                        ${renderTerm(person.term)}

                    </span>

                </div>


            </div>



            <!-- =================================================
                 ОСНОВАНИЕ
            ================================================= -->


            <div class="person-card-reason">


                <div class="person-section-label">

                    ОСНОВАНИЕ ВНЕСЕНИЯ

                </div>


                <p>

                    ${safeValue(person.reason)}

                </p>


            </div>



            <!-- =================================================
                 ОФИЦИАЛЬНЫЙ ДОКУМЕНТ
            ================================================= -->


            <div class="person-card-document">


                ${
                    person.document
                    ?

                    `

                    <a
                        href="${person.document}"
                        class="person-document-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <span>
                            ОТКРЫТЬ ОФИЦИАЛЬНЫЙ ДОКУМЕНТ
                        </span>

                        <span>
                            →
                        </span>

                    </a>

                    `

                    :

                    `

                    <div class="person-document-unavailable">

                        ОФИЦИАЛЬНЫЙ ДОКУМЕНТ НЕ ОПУБЛИКОВАН

                    </div>

                    `
                }


            </div>


        `;


        registry.appendChild(card);

    });


});
