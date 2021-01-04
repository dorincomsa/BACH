function renderOperaView(operashort) {
    let opera
    ALLOPERE.forEach(oneopera => {
        if (oneopera.short == operashort)
            opera = oneopera
    })
    ALLAUTORI.forEach(oneautor => {
        if(opera.autor == oneautor.short)
            opera.autor = oneautor
    })
    ALLPERIOADE.forEach(oneperioada => {
        if(opera.perioada == oneperioada.short)
            opera.perioada = perioada
    })
    //BOTH EPIC AND LIRIC

    let teme = opera.teme.name.join('\n')
    let secvente_teme = opera.teme.secvente.map(sec => {
        return `<p>Secvență</p><p>${sec}</p>`
    }).join(' ')


    let ELEMENTE = opera.elemente.map(element =>{
        return `<p>${element.name}</p><p>${element.value}</p>`
    }).join('')

    let GEN
    ///// GEN EPIC /////////////////////////////
    if(opera.gen =='epic'){
        let personaje = '';
        opera.roman.personaje.forEach(personaj => {
            personaje += `
                <p>${personaj.name}</p>
                <p>${personaj.about}</p>
            `
        })
        let trasaturi_morale = 
        `   <p>Trăsătură</p>
            <p>EXEMPLU</p>  `
        opera.roman.caracterizare.trasaturi_morale.forEach(tras =>{
            trasaturi_morale +=`
                <p>${tras.trasatura}</p>
                <p>${tras.value}</p>
            `
        })
        
        GEN = `
        <div class="package">
            <div class="w100 header flex-row">
                <div><h2 class="subtitle">Roman</h2></div>
                <div class="hide-package" onclick="togglePackage(this)">
                    <img class="vertical" src="res/UI/line.svg" alt="">
                    <img class="horizontal" src="res/UI/line.svg" alt="">
                </div>
            </div>
            <div class="grid">
                    <p>Problematica</p>
                    <p>Roman ${opera.roman.problematica.join(', ')}.</p>

                <p>Perspectiva narativă</p>
                <p>${opera.roman.perspectiva_narativa}</p>

                <p>Coordonate de timp</p>
                <p>${opera.roman.timp}</p>

                <p>Coordonate de spațiu</p>
                <p>${opera.roman.spatiu}</p>
            </div>
        </div>

        <div class="package">
            <div class="w100 header flex-row">
                <div><h2 class="subtitle">Personaje</h2></div>
                <div class="hide-package" onclick="togglePackage(this)">
                    <img class="vertical" src="res/UI/line.svg" alt="">
                    <img class="horizontal" src="res/UI/line.svg" alt="">
                </div>
            </div>
            <div class="grid">
                ${personaje}
            </div>
        </div>

        <div class="package">
            <div class="w100 header flex-row">
                <div><h2 class="subtitle">Rezumat</h2></div>
                <div class="hide-package" onclick="togglePackage(this)">
                    <img class="vertical" src="res/UI/line.svg" alt="">
                    <img class="horizontal" src="res/UI/line.svg" alt="">
                </div>
            </div>
            <div class="grid">
                <p>Expozițiune</p>
                <p>${opera.roman.rezumat.expozitiune}</p>

                <p>Intrigă</p>
                <p>${opera.roman.rezumat.intriga}</p>

                <p>Desfășurarea acțiunii</p>
                <p>${opera.roman.rezumat.desfasurarea_actiunii}</p>

                <p>Punctul culminant</p>
                <p>${opera.roman.rezumat.punctul_culminant}</p>

                <p>Deznodământ</p>
                <p>${opera.roman.rezumat.deznodamant}</p>
            </div>
        </div>
        
        <div class="package">
            <div class="w100 header flex-row">
                <div>
                    <h2 class="subtitle">Caracterizarea lui ${opera.roman.caracterizare.personaj}</h2>
                </div>
                <div class="hide-package" onclick="togglePackage(this)">
                    <img class="vertical" src="res/UI/line.svg" alt="">
                    <img class="horizontal" src="res/UI/line.svg" alt="">
                </div>
            </div>
            <div class="grid">
                <p>Prezentare</p>
                <p>${opera.roman.caracterizare.context}</p>

                <p>Statut social</p>
                <p>${opera.roman.caracterizare.statut_social}</p>

                <p>Portret fizic</p>
                <p>${opera.roman.caracterizare.portret_fizic}</p>

                <p>Portret moral</p>
                <p>${opera.roman.caracterizare.portret_moral}</p>

            ${trasaturi_morale}
            </div>
        </div>
        `
    }
    
    ///// GEN LIRIC ////////////////////////////
    else if(opera.gen=='liric'){
        let versificatie=`
        <div class="package">
            <div class="w100 header flex-row">
                <div><h2 class="subtitle">Elemente de versificație</h2></div>
                <div class="hide-package" onclick="togglePackage(this)">
                    <img class="vertical" src="res/UI/line.svg" alt="">
                    <img class="horizontal" src="res/UI/line.svg" alt="">
                </div>
            </div>
            <div class="grid">
                <p>Structura</p>
                <p>${opera.poezie.versificatie.structura}</p>

                <p>Strofe</p>
                <p>Poezia este alcătuită din ${opera.poezie.versificatie.strofe}.</p>

                <p>Rima</p>
                <p>Rima este ${opera.poezie.versificatie.rima}.</p>

                <p>Ritmul</p>
                <p>Ritmul este ${opera.poezie.versificatie.ritm}.</p>

                <p>Măsura versurilor</p>
                <p>Măsura versurilor este de ${opera.poezie.versificatie.masura}.</p>
            </div>
        </div>
        `

        let motive = opera.poezie.motive.join(', ')
        let simboluri = opera.poezie.simboluri.map(simbol =>{
            return `<span class="mar">${simbol.name}, ${simbol.value}</span>`
        }).join(' ')

        let figuri = opera.poezie.figuri_stil.map(figura =>{
            let value = figura.value.map(oneval =>{
                    return `"${oneval}"`
            }).join(', ')
            console.log('value')
            return `<p>${figura.name}</p> <p>${value}</p>`
        }).join(' ')
        let elemlirice=`
            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Elemente lirice</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="res/UI/line.svg" alt="">
                        <img class="horizontal" src="res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="grid">
                    <p>Lirismul</p>
                    <p>${opera.poezie.lirism}</p> 
                    
                    <p>Motive lirice</p>
                    <p>${motive}</p> 

                    <p>Simboluri</p>
                    <p>${simboluri}</p> 
                
                    <p>Figuri de stil</p>
                    <div class="grid2 grid">
                        ${figuri}
                    </div>
                    

                </div>
            </div>
        `
        GEN=`
        ${elemlirice}
        ${versificatie}
        `
    }
    

    let BODY = `
        <main class="flex-column">
            <div class="package">
                <h1 class="title" style="background-color: var(--${opera.curent.short}); color: ${opera.perioada.titlecolor}"> ${opera.name} </h1>
            </div>

            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Descriere</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="res/UI/line.svg" alt="">
                        <img class="horizontal" src="res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="grid">
                    <p>Nume</p>
                    <p>${opera.name}</p>

                    <p>Autor</p>
                    <p>${opera.autor.name}</p>

                    <p>Publicație</p>
                    <p>În anul ${opera.an_publicatie}${opera.volum == ''?'':`, în volumul ${opera.volum}`}</p>

                    <p>Specie</p>
                    <p>${opera.specie}</p>

                </div>
            </div>
            
            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Teme</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="res/UI/line.svg" alt="">
                        <img class="horizontal" src="res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="grid">
                    
                    <p>Teme</p>
                    <p>${teme}</p>

                    ${secvente_teme}

                    
                </div>
            </div>

           ${GEN}

            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Elemente reprezentative</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="res/UI/line.svg" alt="">
                        <img class="horizontal" src="res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="grid">
                    ${ELEMENTE}
                </div>
            </div>

        </main>
        
    `


    return BODY;
}