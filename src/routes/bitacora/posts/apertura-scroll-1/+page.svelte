<script lang="ts">
    import { base } from '$app/paths';
</script>

<style>
    .apertura {
        width: 100vw;
        height: 200vh;
        background: #ccc;
    }
    .apertura_container {
        position: relative;
        width: 100%;
        max-width: 1199px;
        height: 100%;
        margin: 0 auto;
    }
    .apertura_sticky {
        position: sticky;
        top: 0px;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
    }
    .apertura_grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0px 16px;
        width: 100%;
        height: 100vh;
    }
    .apertura_item {
        padding: 0px;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;

        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    .apertura_item:nth-last-child(-n+3) {
        align-items: flex-end;
    }

    .apertura_item img {
        width: 100%;
        max-width: 240px;
        height: auto;
        max-height: 30vh;
        object-fit: cover;
    }

    .apertura_item:last-child {
        display: none;
    }

    .apertura_item:nth-child(n+3):nth-child(-n+6) {
        visibility: hidden;
    }

    .apertura_item:last-child img,
    .apertura_item:nth-child(n+3):nth-child(-n+6) img {display: none;}

    @media (min-width: 768px) {
        .apertura_grid {
            grid-template-columns: repeat(3, 1fr);
        }

        .apertura_item {
            display: flex !important;
        }

        .apertura_item img {display: block !important;}

        .apertura_item:nth-child(3) {
            visibility: visible !important;
        }

        .apertura_item:nth-child(n+4):nth-child(-n+6) {
            visibility: hidden;
        }

        .apertura_item:nth-child(n+4):nth-child(-n+6) img {
            display: none !important;
        }
    }
    @media (min-width: 1001px) {
        .apertura_grid {
            gap: 16px;
        }

        .apertura_item {
            visibility: visible !important;
        }

        .apertura_item img {
            display: block !important;
        }

        .apertura_item:nth-child(5){
            visibility: hidden !important;
        }

        .apertura_item:nth-child(n+4):nth-child(-n+6) img {
            display: block !important;
        }

        .apertura_item:nth-child(5) img {
            display: none !important;
        }
    }

    /* Contenido */
    .apertura_content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .content_first {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content_first_map {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: #333;
        background-color: lightcoral;
    }
    .content_second {
        width: 100%;
        height: 100vh;
        display: flex;      
        align-items: center;
        justify-content: center;
    }
    .content_second_text {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: lightcyan;
    }
    .content_second_text h1 {
        margin: 0;
    }

    @media (min-width: 768px) {
        .content_first_map {
            height: 40vh;
        }
        .content_second_text {
            height: 40vh;
        }
    }

    @media (min-width: 1001px) {
        .content_first_map {
            width: 50%;
        }
        .content_second_text {
            width: 50%;
        }
    }
</style>

<div class="content" view-transition-name="page">
    <h1>Aperturas en scroll (I)</h1>
    <p>En esta página se muestra un ejemplo de apertura en scroll con imágenes alrededor de un elemento central.</p>
    <p>Los otros desarrollos pueden encontrarlos aquí (II), aquí (III) y aquí (IV). Están hechos con Vanilla JS, no con Svelte.</p>
    <!-- Primera apertura -->
    <div class="apertura apertura_1">
        <div class="apertura_container">
            <div class="apertura_sticky">
                <div class="apertura_grid">
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 1"></div>
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 2"></div>
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 3"></div>
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 4"></div>
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 5"></div>
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 6"></div>
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 7"></div>
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 8"></div>
                    <div class="apertura_item"><img src="{base}/media/bitacora/aperturas/sijena_test.jpg" alt="Imagen 9"></div>
                </div>
            </div>
            <div class="apertura_content">
                <div class="content_first">
                    <div class="content_first_map">
                        <span>Aquí iría el mapa</span>
                    </div>
                </div>
                <div class="content_second">
                    <div class="content_second_text">
                        <h1>Los cuadros de Sijena</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>