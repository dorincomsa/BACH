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
        }
        #nav a{
            text-decoration: none;
            font-size: 1.5rem;
            margin-left: 5%;
        }
        #nav a > *{
            font-weight: 600;
        }
        #nav .BAC{
            font-size: 2rem;
            color: var(--white);
            text-shadow: 2px 0px 1px var(--black);
        }
        #nav .H{
            font-size: 2rem;
            color: var(--black);
        }
        #nav .elper{
            font-size: 1.66rem;
            color: var(--black);
        }
        #nav h4{
            display:flex;
            align-items: center;
        }
    </style>
    <a href="">
        <span class="BAC">BAC</span><span class="H">H</span><span class="elper">elper</span>
    </a>
    <h4>dorin va iubeste</h4>
</nav>`