const worldsList = document.getElementById("worlds-list");


/* =========================
   РАСШИФРОВКИ
========================= */

const worldDescriptions = {

    distance:
        "Расстояние от мирового субъекта до Главного узла межмировой навигационной сети.",

    type:
        "Классификация мирового субъекта в составе Федерации Республик Аякса.",

    lvs:
        "LVS — уровень доступа к информации, объектам и операциям, связанным с данным миром или субмиром."

};


/* =========================
   РАСШИФРОВКИ ТИПОВ
========================= */

const worldTypeDescriptions = {

    "Республика":
        "Мировой субъект, обладающий правом иметь собственную конституцию и принимать законодательные акты, не противоречащие Основному кодексу ФРА.",

    "ТРПУ":
        "Территория республиканско-парламентского управления. Не имеет собственной конституции, но может принимать законодательные акты, не противоречащие Основному кодексу ФРА.",

    "Колония":
        "Мировой субъект, находящийся под прямым управлением Федерации. Не имеет собственной конституции и не может принимать собственные законы."

};


/* =========================
   РАСШИФРОВКИ LVS
========================= */

const lvsDescriptions = {

    "LVS-0":
        "Ограниченный доступ. Используется преимущественно в сфере туризма и предоставляет минимальный набор прав и разрешений.",

    "LVS-1":
        "Гражданский доступ. Предназначен для лиц, постоянно живущих или работающих в данном мире или субмире. Предоставляет доступ к публичной информации о мире проживания.",

    "LVS-1.5":
        "Подготовительный доступ. Предназначен для стажёров и лиц, проходящих обучение.",

    "LVS-2":
        "Исследовательский доступ. Предназначен для сотрудников, завершивших обучение и допущенных к исследовательской деятельности.",

    "LVS-3.5":
        "Оперативно-аналитический доступ. Предназначен для старших научных сотрудников и сотрудников службы безопасности.",

    "LVS-4.5":
        "Оперативно-тактический доступ. Предназначен для узкоспециализированных экспертов и руководителей операций.",

    "LVS-5":
        "Стратегический доступ. Предназначен для лиц, занимающих руководящие должности.",

    "LVS-7.5":
        "Экзекутивный доступ. Специальный уровень для лиц, непосредственно руководящих системой безопасности.",

    "LVS-8":
        "Омниконтроль. Высший автоматизированный уровень контроля, предназначенный для интеграции искусственного интеллекта или управляющих систем.",

    "LVS-10":
        "Абсолютный доступ. Канцлерский уровень, предназначенный исключительно для Канцлера Федерации."

};


/* =========================
   СОЗДАНИЕ СТРОК
========================= */

worlds.forEach(world => {


    /* =========================
       СОЗДАНИЕ СТРОКИ
    ========================= */

    const row = document.createElement("div");

    row.className = "world-row";


    /* =========================
       НАЗВАНИЕ + ФЛАГ
    ========================= */

    const nameBlock = document.createElement("div");


    nameBlock.innerHTML = `

        <div class="world-name-container">

            ${
                world.flag
                ? `
                    <img
                        src="${world.flag}"
                        alt="${world.name}"
                        class="world-flag"
                    >
                `
                : ""
            }

            <div>

                <div class="world-name">

                    ${world.name}

                </div>

                <div class="world-id">

                    ID: ${world.id}

                </div>

            </div>

        </div>

    `;


    /* =========================
       РАССТОЯНИЕ
    ========================= */

    const distanceBlock = document.createElement("div");


    distanceBlock.innerHTML = `

        <span
            class="world-label"
            title="${worldDescriptions.distance}"
        >

            Расстояние до Главного узла

        </span>

        <span class="world-value">

            ${world.distance}

        </span>

    `;


    /* =========================
       ТИП СУБЪЕКТА
    ========================= */

    const typeBlock = document.createElement("div");


    const typeDescription =
        worldTypeDescriptions[world.type]
        || worldDescriptions.type;


    typeBlock.innerHTML = `

        <span
            class="world-label"
            title="${worldDescriptions.type}"
        >

            Тип субъекта

        </span>

        <span
            class="world-type"
            title="${typeDescription}"
        >

            ${world.type}

        </span>

    `;


    /* =========================
       УРОВЕНЬ ДОСТУПА
    ========================= */

    const accessBlock = document.createElement("div");


    const lvsDescription =
        lvsDescriptions[world.lvs]
        || worldDescriptions.lvs;


    accessBlock.innerHTML = `

        <span
            class="world-label"
            title="${worldDescriptions.lvs}"
        >

            Уровень доступа

        </span>

        <span
            class="world-access"
            title="${lvsDescription}"
        >

            ${world.lvs}

        </span>

    `;


    /* =========================
       КНОПКА ДОСЬЕ
    ========================= */

    const dossierButton = document.createElement("div");


    dossierButton.className = "world-dossier-button";


    dossierButton.innerHTML = "→";


    dossierButton.title =
        "Открыть полное досье";


    /* =========================
       ПЕРЕХОД ПО СТРЕЛКЕ
    ========================= */

    dossierButton.addEventListener("click", event => {

        event.preventDefault();

        event.stopPropagation();


        if (world.profile) {

            window.location.href = world.profile;

        }

    });


    /* =========================
       ДОБАВЛЕНИЕ В СТРОКУ
    ========================= */

    row.appendChild(nameBlock);

    row.appendChild(distanceBlock);

    row.appendChild(typeBlock);

    row.appendChild(accessBlock);

    row.appendChild(dossierButton);


    /* =========================
       ДОБАВЛЕНИЕ В РЕЕСТР
    ========================= */

    worldsList.appendChild(row);

});
