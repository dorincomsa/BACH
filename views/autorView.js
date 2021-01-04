function renderAutorView(autorshort){
    let autor = null
    ALLAUTORI.forEach(oneautor => {
        if(oneautor.short == autorshort){
            autor=oneautor
        }
    });

    let perioada = null
    ALLPERIOADE.forEach(oneperioada => {
        if(autor.perioada == oneperioada.short)
            perioada = oneperioada
    });
    autor.titlecolor = perioada.titlecolor
    let autorBODY = `
    <main>
        <div class="top flex-row">
            <div class="flex-column img">
                <img src="res/images/${autor.short}.png" alt="${autor.name}">
            </div>
            <div class="flex-column title">
                <div class="flex-column">
                    <h1 class="name">
                        ${autor.name}
                    </h1>
                    <h3 class="viata">
                        ${autor.viata}
                    </h3>
                </div>
                <a  class="perioada" style="background-color: var(--${autor.perioada}); color:${autor.titlecolor}">
                    ${autor.perioadaName}
                </a>
            </div>
        </div>
        <div class="info">
            <p>
                ${autor.date}
            </p>
            <p>
                ${autor.opera}
            </p>
        </div>
    </main>`
    return autorBODY
}