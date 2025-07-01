<style>
    footer {
        view-transition-name: footer;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16px;
        padding: 16px 0;
        position: relative;

        box-shadow: 0 -4px 16px -4px rgba(0, 0, 0, 0.12);
    }

    .f_contacto,
    .f_rrss {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 200px;
    }

    .f_contacto .fc_title,
    .f_rrss .fr_title {
        font-weight: 500;
        font-size: 1.2rem;
        margin-bottom: 8px;
    }
    .f_contacto .fc_elems {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }

    @media (min-width: 37.5em) {
        footer {
            flex-direction: row;
            justify-content: center;
            gap: 0;
        }
        .f_contacto,
        .f_rrss {
            align-items: flex-start;
        }
    }
</style>

<footer>
    <div class="f_contacto">
        <span class="fc_title">Contacto</span>
        <div class="fc_elems">
            <span class="fc_elem">Teléfono: <a href="tel:34628258170">(+34)628258170</a></span>
            <span class="fc_elem">Email: <a href="mailto:carlos10md@gmail.com">carlos10md</a></span>
        </div>
    </div>
    <div class="f_rrss">
        <span class="fr_title">Redes sociales</span>
        <div class="fr_elems">
            <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter" style="margin-right: 8px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22.46 5.924c-.793.352-1.645.59-2.54.697a4.48 4.48 0 0 0 1.964-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.085A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.388 5.976 4.44 4.44 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.595 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v5.58z"/>
                </svg>
            </a>
        </div>
    </div>
</footer>