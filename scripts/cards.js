
//LOAD CURENTE
window.addEventListener('DOMContentLoaded', loadCurenteCards)

var curenteBTN = document.querySelector('[option=curente]')
curenteBTN.addEventListener('click', loadCurenteCards)
async function loadCurenteCards() {
    let curente = ALLCURENTE
    let allperioade = ALLPERIOADE

    curente.forEach(curent => {
        allperioade.forEach(perioada => {
            if (JSON.stringify(curent.perioada) == JSON.stringify(perioada.short)) {
                curent.perioadaName = perioada.name
            }
        });
    })

    let curenteContainer = document.querySelector('[tab=curente]')
    curenteContainer.innerHTML = ''
    curente.forEach(curent => {
        curenteContainer.insertAdjacentHTML('beforeend', renderCurentCard(curent))
    })
}
function renderCurentCard(curent) {

    let curentCard =
        `
    <div class="card flex-column">
        <div class="top flex-row" style="background-color: var(--${curent.short})">
            <h2 class="tit" style="color: ${curent.titlecolor}">${curent.name}</h2>
        </div>
        <div class="bottom flex-column">
            <h3>${curent.perioadaName}</h3>
            <p>${curent.definitie}</p>
            <div class="flex-row ui">
                <a onclick="changeView(renderCurentView('${curent.short}'),'curente')">Read more</a>
                <div class="flex-row">
                    <p>Compara</p>
                    <img src="res/UI/check.svg"/>
                </div>
            </div>
            
        </div>
    </div>
    `
    return curentCard
}


//LOAD PERIOADE
var perioadeBTN = document.querySelector('[option=perioade]')
perioadeBTN.addEventListener('click', loadPerioadeCards)

async function loadPerioadeCards() {
    let allperioade = ALLPERIOADE
    let perioadeContainer = document.querySelector('[tab=perioade]')
    perioadeContainer.innerHTML = ''

    allperioade.forEach(perioada => {
        perioadeContainer.insertAdjacentHTML('beforeend', renderPerioadaCard(perioada))
    })
}
function renderPerioadaCard(perioada) {
    let perioadaCard =
        `
    <div class="card flex-column">
        <div class="top flex-row" style="background-color: var(--${perioada.short})">
            <h2 class="tit" style="color: ${perioada.titlecolor}">${perioada.name}</h2>
        </div>
        <div class="bottom flex-column">
            <h3>${perioada.date}</h3>
            <p>${perioada.about}</p>
            <div class="flex-row ui">
                <a href="/perioade/${perioada.short}">Read more</a>
                <div class="flex-row">
                    <p>Compara</p>
                    <img src="res/UI/check.svg"/>
                </div>
            </div>
            
        </div>
    </div>
    `
    return perioadaCard
}

//LOAD AUTORI
var autoriBTN = document.querySelector('[option=autori]')
autoriBTN.addEventListener('click', loadAutoriCards)

async function loadAutoriCards() {
    let allautori = ALLAUTORI
    let allperioade = ALLPERIOADE

    allautori.forEach(autor => {
        allperioade.forEach(perioada => {
            if (JSON.stringify(autor.perioada) == JSON.stringify(perioada.short)) {
                autor.perioadaName = perioada.name

            }
        });
    });

    let autoriContainer = document.querySelector('[tab=autori]')
    autoriContainer.innerHTML = ''

    allautori.forEach(autor => {
        autoriContainer.insertAdjacentHTML('beforeend', renderAutorCard(autor))
    })
}

function renderAutorCard(autor) {
    let autorCard =
        `
    <div class="card flex-column">
        <div class="top flex-row" style="background-color: var(--white)" >
            <div class="image fullbox" style="background-image: url('res/images/${autor.short}.png')"> </div>
            <div class="overlay" style="background-color: var(--${autor.perioada})"></div>
            <h2 class="tit" >${autor.name}</h2>
        </div>
        <div class="bottom flex-column">
            <h3>${autor.perioadaName}</h3>
            <p>${autor.date}</p>
            <div class="flex-row ui">
                <a onclick="changeView(renderAutorView('${autor.short}'),'autori')">Read more</a>
                <div class="flex-row">
                    <p>Compara</p>
                    <img src="/res/UI/check.svg"/>
                </div>
            </div>
            
        </div>
    </div>
    `
    return autorCard;

}

//LOAD OPERE
var opereBTN = document.querySelector('[option=opere]')
opereBTN.addEventListener('click', loadOpereCards)

function loadOpereCards() {
    let opereContainer = document.querySelector('[tab=opere]')
    opereContainer.innerHTML = ''

    ALLOPERE.forEach(opera => {
        ALLPERIOADE.forEach(perioada => {
            if (opera.perioada == perioada.short) {
                opera.perioada = perioada
            }
        })
        ALLAUTORI.forEach(autor => {
            if(opera.autor == autor.short)
                opera.autor = autor
        })

        ALLCURENTE.forEach(curent => {
            if(opera.curent == curent.short)
                opera.curent = curent
        })
        
        let desc
        if(opera.gen=="epic"){
            desc = opera.specie
            
        }else if(opera.gen=='liric'){
            desc = opera.specie
            
        }
        opera.desc = desc
        
        opereContainer.insertAdjacentHTML('beforeend', renderOperaCard(opera))
    })
}
function renderOperaCard(opera) {
    let operaCard =
        `
    <div class="card flex-column">
        <div class="top flex-column" style="background-color: var(--${opera.curent.short})">
            <h2 class="tit" style="color: ${opera.perioada.titlecolor}">${opera.name}</h2>
            <h4 style="color: ${opera.perioada.titlecolor}">${opera.autor.name}</h4>
        </div>
        <div class="bottom flex-column">
            <h3>${opera.desc}</h3>
            <p>${opera.perioada.name}</p>
            <p>${opera.curent.name}</p>
            <div class="flex-row ui">
                <a onclick="changeView(renderOperaView('${opera.short}'),'opere')">Read more</a>
                <div class="flex-row">
                    <p>Compara</p>
                    <img src="res/UI/check.svg"/>
                </div>
            </div>
            
        </div>
    </div>
    `
    return operaCard
}