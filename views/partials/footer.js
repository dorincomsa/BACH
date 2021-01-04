let FOOTER = `
<footer class="flex-row">
    <style>
        footer {
            background-color: var(--black);
            width: 100%;
            min-height: 15rem;
        }
        footer.flex-row div{
            color: var(--white);
            align-items: flex-start;
            justify-content: flex-start;
        }
        footer h3{
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        footer a{
            cursor: pointer;
            margin: 0.5rem 0;
        }
        footer a:hover{
            text-decoration: underline;
            color: var(--yellow);
            transition: color 0.15s ease;
        }
        footer *{
            user-select:none;
        }
        
    </style>
    <div class="flex-column">
        <h3>Links</h3>
        <a>Autori</a>
        <a>Curente</a>
        <a>Perioade</a>
        <a>Opere</a>
    </div>
    <div class="flex-column">
        <h3>Info</h3>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>TOS</a>
    </div>
</footer>`