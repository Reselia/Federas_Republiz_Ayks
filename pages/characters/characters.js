const charactersGrid =
    document.getElementById("characters-grid");


characters.forEach(character => {


    const card =
        document.createElement("a");


    card.className =
        "character-card";


    card.href =
        "characters/" + character.profile;


    card.innerHTML = `


        <!-- ID -->

        <div class="character-id">

            ID: ${character.id}

        </div>



        <!-- ОСНОВНАЯ ИНФОРМАЦИЯ -->

        <div class="character-main">


            <!-- ФОТО -->

            <img

                src="${character.photo}"

                alt="${character.name}"

                class="character-photo"

            >



            <!-- ИНФОРМАЦИЯ -->

            <div class="character-info">


                <div class="character-name-label">

                    Имя

                </div>


                <div class="character-name">

                    ${character.name}

                </div>



                <div class="character-position-label">

                    Должность

                </div>


                <div class="character-position">

                    ${character.position}

                </div>


            </div>


        </div>



        <!-- ПРИНАДЛЕЖНОСТЬ -->

        <div class="character-affiliation">


            <img

                src="${character.flag}"

                alt="${character.affiliation}"

                class="character-flag"

            >


            <div class="character-affiliation-name">


                <span class="character-affiliation-label">

                    Принадлежность

                </span>


                ${character.affiliation}


            </div>


        </div>



        <!-- ОТКРЫТИЕ ДОСЬЕ -->

        <div class="character-open">

            ОТКРЫТЬ ПОЛНОЕ ДОСЬЕ →

        </div>


    `;


    charactersGrid.appendChild(card);


});
