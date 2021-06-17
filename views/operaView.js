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
            opera.perioada = oneperioada
    })
    ALLCURENTE.forEach(onecurent =>{
        if(opera.curent.short == onecurent.short){
            opera.curent.definitie = onecurent.definitie
            opera.curent.name = onecurent.name
        }
    })
    //BOTH EPIC AND LIRIC

    /*let trasaturi_curent = opera.curent.trasaturi.map( tras =>{
        return `<p>${tras}</p>`
    }).join(' ')

    let trasaturi_specie = opera.specie.trasaturi.map( tras =>{
        return `<p>${tras.name}</p><p>${tras.value}</p>`
    }).join(' ')
    

    let teme = opera.teme.name.map(tema => {
        return `<p>${tema}</p>`
    }).join(' ');
    let secvente_teme = opera.teme.secvente.map(sec => {
        return `<p>${sec}</p>`
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
        `   <h3>Trăsături</h3>
            <p></p>  `
        opera.roman.caracterizare.trasaturi_morale.forEach(tras =>{
            trasaturi_morale +=`
                <p>${tras.trasatura}</p>
                <p>${tras.value}</p>
            `
        })
        
        GEN = `
        <div class="package">
            <div class="w100 header flex-row">
                <div><h2 class="subtitle">Proză</h2></div>
                <div class="hide-package" onclick="togglePackage(this)">
                    <img class="vertical" src="../res/UI/line.svg" alt="">
                    <img class="horizontal" src="../res/UI/line.svg" alt="">
                </div>
            </div>
            <div class="grid">
                    <p>Problematica</p>
                    <p>${opera.specie.name} ${opera.roman.problematica.join(', ')}.</p>

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
                    <img class="vertical" src="../res/UI/line.svg" alt="">
                    <img class="horizontal" src="../res/UI/line.svg" alt="">
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
                    <img class="vertical" src="../res/UI/line.svg" alt="">
                    <img class="horizontal" src="../res/UI/line.svg" alt="">
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
                    <img class="vertical" src="../res/UI/line.svg" alt="">
                    <img class="horizontal" src="../res/UI/line.svg" alt="">
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
                    <img class="vertical" src="../res/UI/line.svg" alt="">
                    <img class="horizontal" src="../res/UI/line.svg" alt="">
                </div>
            </div>
            <div class="grid">
                <p>Structura</p>
                <p>${opera.poezie.versificatie.structura}</p>

                <p>Strofe</p>
                <p>Poezia este alcătuită din ${opera.poezie.versificatie.strofe}</p>

                <p>Rima</p>
                <p>${opera.poezie.versificatie.rima}</p>

                <p>Ritmul</p>
                <p>${opera.poezie.versificatie.ritm}</p>

                <p>Măsura versurilor</p>
                <p>${opera.poezie.versificatie.masura}</p>
            </div>
        </div>
        `

        let motive = opera.poezie.motive.join(', ')

        let simboluri = opera.poezie.simboluri.map(simbol =>{
            return `<span>${simbol.name}</span> <span>${simbol.value}</span>`
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
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="grid">
                    <p>Lirismul</p>
                    <p>${opera.poezie.lirism}</p> 
                    
                    <p>Motive lirice</p>
                    <p>${motive}</p> 

                    <p>Simboluri</p>
                    <div class="grid2 grid">    
                        ${simboluri}
                    </div>

                    ${opera.poezie.figuri_stil[0].name==""?``:`
                        <p>Figuri de stil</p>
                        <div class="grid2 grid">
                            ${figuri}
                        </div>
                    `}
                    
                    

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
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>

                <div class="grid">
                    <p>Nume</p>
                    <p>${opera.name}</p>

                    <p>Autor</p>
                    <p>${opera.autor.name}</p>

                    <p>Date despre autor</p>
                    <p>${opera.autor.date}</p>

                    <p>Publicație</p>
                    <p>În anul ${opera.an_publicatie}${opera.volum == ''?'':`, în volumul "${opera.volum}"`}</p>

                    <p>Specie</p>
                    <p>${opera.specie.name}</p>

                    ${opera.link==""?``:
                    `<p>Text</p>
                    <a class="link" href="${opera.link}">${opera.link}</a>`
                    }
                </div>
            </div>
            
            ${opera.curent.enabled==false?'':`
                <div class="package">
                    <div class="w100 header flex-row">
                        <div><h2 class="subtitle">Apartenența la curent: ${opera.curent.name}</h2></div>
                        <div class="hide-package" onclick="togglePackage(this)">
                            <img class="vertical" src="../res/UI/line.svg" alt="">
                            <img class="horizontal" src="../res/UI/line.svg" alt="">
                        </div>
                    </div>
                    <div class="grid">
                        <p>Definiție</p>
                        <p>${opera.curent.definitie}</p>
                        <p>Trăsături</p>
                        <div class="grid grid-1col">
                        ${trasaturi_curent}
                        </div>
                    </div>
                </div>

                
            `}
            ${opera.specie.enabled==false?'':`
                <div class="package">
                    <div class="w100 header flex-row">
                        <div><h2 class="subtitle">Apartenența la specie: ${opera.specie.name}</h2></div>
                        <div class="hide-package" onclick="togglePackage(this)">
                            <img class="vertical" src="../res/UI/line.svg" alt="">
                            <img class="horizontal" src="../res/UI/line.svg" alt="">
                        </div>
                    </div>
                    <div class="grid">
                        <p>Definiție</p>
                        <p>${opera.specie.def}</p>
                        ${trasaturi_specie}
                    </div>
                </div>
            `}
            
            <div class="package">
            <div class="w100 header flex-row">
                <div><h2 class="subtitle">Teme</h2></div>
                <div class="hide-package" onclick="togglePackage(this)">
                    <img class="vertical" src="../res/UI/line.svg" alt="">
                    <img class="horizontal" src="../res/UI/line.svg" alt="">
                </div>
            </div>
            <div class="grid">
                <p>Teme</p>
                <div class="grid-1col grid"> ${teme} </div>
                <p>Secvențe reprezentative</p>
                <div class="grid-1col grid"> ${secvente_teme} </div>
            </div>
            </div>

           ${GEN}

            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Elemente reprezentative</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="grid">
                    ${ELEMENTE}
                </div>
            </div>

        </main>
        
    `
    */

    let curente = opera.argumentare.curent.map(element=>{
        return `<p>${element}</p>`
    }).join(' ')
    let teme = opera.argumentare.tema.map(element=>{
        return `<p>${element}</p>`
    }).join(' ')
    let personaj = opera.argumentare.personaj.map(element=>{
        return `<p>${element}</p>`
    }).join(' ')
    let elemente = opera.argumentare.elemente.map(element=>{
        return `<p>${element}</p>`
    }).join(' ')

    let BODY=`
    <main class="flex-column argumentare">
            <div class="package">
                <h1 class="title" style="background-color: var(--${opera.curent.short}); color: ${opera.perioada.titlecolor}"> ${opera.name} </h1>
            </div>

            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Date despre autor si opera</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="w100  flex-column">
                    <p> ${opera.argumentare.date}</p>
                </div>
            </div>
            
           
            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Curent / Specie</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="w100  flex-column">
                    ${curente}
                </div>
            </div>
            
           
            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Tema</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="w100  flex-column">
                    ${teme}
                </div>
            </div>
           
            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Personaj</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="w100 flex-column">
                    ${personaj}
                </div>
            </div>

            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Elemente semnificative</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="w100 flex-column">
                    ${elemente}
                </div>
            </div>
           
            <div class="package">
                <div class="w100 header flex-row">
                    <div><h2 class="subtitle">Concluzie</h2></div>
                    <div class="hide-package" onclick="togglePackage(this)">
                        <img class="vertical" src="../res/UI/line.svg" alt="">
                        <img class="horizontal" src="../res/UI/line.svg" alt="">
                    </div>
                </div>
                <div class="w100 flex-column">
                    <p> ${opera.argumentare.concluzie}</p>
                </div>
            </div>
        </main>
    `
    return BODY;
}