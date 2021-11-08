document.addEventListener('DOMContentLoaded', () => {
    console.log('hua')
    let countDownDate = new Date("Jun 21, 2022 09:00:00").getTime();

    let x = setInterval(function () {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let par = seconds%2
        let format = `
        <div class="pair par${par}"><span class="value">${days}</span><span class="label">d </span></div>
        <div class="pair par${par}"><span class="value">${hours}</span><span class="label">h </span></div>
        <div class="pair par${par}"><span class="value">${minutes}</span><span class="label">m </span></div>
        <div class="pair par${par}"><span class="value">${seconds}</span><span class="label">s </span></div>
        `

        document.getElementById("countdown").innerHTML = format

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
})
let NAV = `<nav id="nav">

    <style>
        #nav{
            position: sticky;
            top:0;
            z-index: 6;
            width: 100%;
            padding: 0.75rem;
            background-color: var(--yellow);
            display: flex;
            justify-content: space-between;
            aling-items: center;
            color: var(--black);
        }
        
        #nav .logo{
            display:flex;
            align-items: flex-end;
            text-decoration: none;
            font-size: 1.5rem;
            margin-left: 2%;
        }
        #nav .logo > *{
            font-weight: 600;
        }
        #nav .BAC{
            font-size: 1.75rem;
            color: var(--white);
            text-shadow: 2px 0px 1px var(--black);
        }
        #nav .H{
            font-size: 1.75rem;
            color: var(--black);
        }
        #nav .elper{
            font-size: 1.5rem;
            color: var(--black);
        }
        #nav .version{
            font-size: 1.25rem;
            margin-left: 0.5rem;
        }
        #nav .message{
            display:flex;
            align-items: flex-end;
            font-size: 1.25rem;
            position: relative;
        }
        #nav #countdown{
            display:flex;
            justify-content: space-between;
            width: 10rem;
        }
        #nav #countdown .pair{
            display:flex;
            justify-content: flex-end;
        }
        #nav .message .tooltip{
            position: absolute;
            top: 115%;
            left: 15%;
            color: var(--white);
            background-color: var(--black);
            padding: 0.5rem;
            font-size: 1rem;
            font-weight: 400;
            border-radius: 0.5rem;
            opacity: 0%;
            transition: all 0.2s ease;
            user-select: none;
        }
        #nav .message:hover .tooltip{
            opacity: 1;
        }
    </style>
    <a class="logo" href="../">
        <span class="BAC">BAC</span>
        <span class="H">H</span>
        <span class="elper">elper</span>
        <span class="version">V 1.(9)</span>
    </a>
    <h4 class="message">
        <div id="countdown"></div>
        <span class="tooltip">E grav fraților</span>
    </h4>
    
</nav>`
