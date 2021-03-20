let FOOTER = `
<footer class="flex-row">
    <style>
        footer {
            background-color: var(--black);
            width: 100%;
            min-height: 15rem;
            padding: 2rem 0;
        }
        footer.flex-row div{
            color: var(--white);
            align-items: flex-start;
            justify-content: flex-start;
        }
        footer h3{
            margin-bottom: 1.5rem;
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
        <h3>@ Dorin</h3>
    </div>
</footer>`