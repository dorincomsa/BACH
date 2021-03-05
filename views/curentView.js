function renderCurentView(curentshort) {
    let curent = null
    ALLCURENTE.forEach(onecurent => {
        if (curentshort == onecurent.short) {
            curent = onecurent
        }
    });

    let trasaturi = ""
    curent.trasaturi.forEach(trasatura =>{
        trasaturi+=`
            <p class="name">
                ${trasatura.name}
            </p>
            <p class="value">
                ${trasatura.value}
            </p>`
    })

    let autori = ""
    ALLAUTORI.forEach(autor =>{
        if(autor.curent == curent.short)
            autori += 
            `<a class="autor"  onclick="changeView(renderAutorView('${autor.short}'),'autori')"
                style="background-color: var(--${curent.short}); color:${curent.titlecolor}">
                ${autor.name}
            </a> `
    })


    let BODY =`
    <main class="flex-column">
        <h1 class="title" style="background-color: var(--${curent.short}); color:${curent.titlecolor}">
            ${curent.name}
        </h1>
        
        <h4 class="subtitle">Trăsături</h4>
        <div class="grid">
            <p class="name">Definiție</p>
            <p class=value>${curent.definitie}</p>
            ${trasaturi}
        </div>

        <h3 class="reprez">Reprezentanți</h3>
        <div class="autori flex-row">
            ${autori}
        </div>
    </main>`
    return BODY;
}