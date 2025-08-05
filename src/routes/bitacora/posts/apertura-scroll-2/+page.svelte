<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    onMount(() => {
        let initialPositions = [];
        let randomPositions = [];
        let images = document.querySelectorAll('.apertura_img');

        function setInitialPositions() {
            console.log('Setting initial positions');
            initialPositions = [];
            randomPositions = [];
            images.forEach((img, i) => {
                img.style.position = 'absolute';

                // 4 arriba, 4 abajo
                const row = i < 4 ? 0 : 1;
                const col = i % 4;
                const imgWidth = 120;
                const imgHeight = 200;
                const gridCols = 4;
                const gridRows = 2;

                // Container size
                const containerWidth = imgWidth * gridCols + 30; // gap: 10px * (cols-1)
                const containerHeight = imgHeight * gridRows + 10; // gap: 10px

                // Center in viewport
                const imagesContainer = document.querySelector('.apertura_images');
                const containerRect = imagesContainer.getBoundingClientRect();
                const leftPx = (containerRect.width / 2) - (containerWidth / 2) + col * (imgWidth + 10);
                const topPx = (containerRect.height / 2) - (containerHeight / 2) + row * (imgHeight + 10);
                img.style.left = `${leftPx}px`;
                img.style.top = `${topPx}px`;
                img.style.width = `${imgWidth}px`;
                img.style.height = `${imgHeight}px`;
                initialPositions.push({ left: leftPx, top: topPx });

                // Sutil movimiento aleatorio (máx ±40px horizontal, ±30px vertical)
                const maxOffsetX = window.innerWidth * 0.3; // 30vw
                const maxOffsetY = window.innerHeight * 0.4; // 40vh
                let randX = leftPx + (Math.random() - 0.5) * 2 * maxOffsetX;
                let randY = topPx + (Math.random() - 0.5) * 2 * maxOffsetY;
                randomPositions.push({ left: randX, top: randY });
            });
            document.querySelector('.apertura_images').classList.add('randomized');
        }

        function animateImages(progress) {
            console.log(images,progress);
            images.forEach((img, i) => {
                const init = initialPositions[i];
                const rand = randomPositions[i];
                console.log(img,init,rand,progress);
                const left = init.left + (rand.left - init.left) * progress;
                const top = init.top + (rand.top - init.top) * progress;
                img.style.left = `${left}px`;
                img.style.top = `${top}px`;
            });
        }

        // Reset to initial positions
        function resetImages() {
            setInitialPositions();
        }

        function handleScroll() {
            const start = 0;
            const limit = window.innerHeight * 2;
            if (window.scrollY > start && window.scrollY < limit) {
                const progress = Math.min(1, (window.scrollY - start) / (limit - start));
                animateImages(progress);
            } else if (window.scrollY <= start) {
                resetImages();
            } else if (window.scrollY >= limit) {
                animateImages(1);
            }
        }
        
        setInitialPositions();
        window.addEventListener('scroll', handleScroll);
    });
</script>

<style>
    .apertura {
        height: auto !important;
    }
    .apertura_container {
        width: 100%;
        height: 300vh;
        position: relative;
        
        box-sizing: border-box;
        border: 1px solid #262626;
    }
    .apertura_sticky {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;

        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .apertura_images {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
        justify-items: center;
        align-items: center;
        width: 440px;
        margin: 0 auto;
        transition: all 0.5s;
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .apertura_img {
        width: 120px;
        height: 200px;
        object-fit: cover;
        position: absolute;
    }

    .apertura_content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .apertura_content .apertura_first {
        width: 100%;
        height: 200vh;
    }

    .apertura_content .apertura_second {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .apertura_content .apertura_second .apertura_second_text {
        width: 100%;
        max-width: 600px;
        text-align: center;
        font-weight: bold;

        box-sizing: border-box;
        padding: 40px;
        background-color: lightcoral;
        border-radius: 5px;

        z-index: 12;
    }
    
</style>

<div class="content" view-transition-name="page">
    <h1>Aperturas en scroll (II)</h1>
    <p>En esta página se muestra un ejemplo de apertura en scroll con imágenes alrededor de un elemento central.</p>
    <p>Los otros desarrollos pueden encontrarlos 
        <a href="{base}/bitacora/posts/apertura-scroll-1">aquí (I)</a>, 
        <a href="{base}/bitacora/posts/apertura-scroll-3">aquí (III)</a> y 
        <a href="{base}/bitacora/posts/apertura-scroll-4">aquí (IV)</a>. Están hechos con Vanilla JS, no con Svelte.
    </p>

    <!-- Segunda apertura -->
    <div class="apertura apertura_2">
        <div class="apertura_container">
            <div class="apertura_sticky">
                <div class="apertura_images">
                    <img src="{base}/media/bitacora/aperturas/sijena_test.jpg" class="apertura_img" alt="Apertura Sijena" />
                    <img src="{base}/media/bitacora/aperturas/sijena_test.jpg" class="apertura_img" alt="Apertura Sijena" />
                    <img src="{base}/media/bitacora/aperturas/sijena_test.jpg" class="apertura_img" alt="Apertura Sijena" />
                    <img src="{base}/media/bitacora/aperturas/sijena_test.jpg" class="apertura_img" alt="Apertura Sijena" />
                    <img src="{base}/media/bitacora/aperturas/sijena_test.jpg" class="apertura_img" alt="Apertura Sijena" />
                    <img src="{base}/media/bitacora/aperturas/sijena_test.jpg" class="apertura_img" alt="Apertura Sijena" />
                    <img src="{base}/media/bitacora/aperturas/sijena_test.jpg" class="apertura_img" alt="Apertura Sijena" />
                    <img src="{base}/media/bitacora/aperturas/sijena_test.jpg" class="apertura_img" alt="Apertura Sijena" />
                </div>
            </div>
            <div class="apertura_content">
                <div class="apertura_first"></div>
                <div class="apertura_second">
                    <div class="apertura_second_text">
                        <h1>Título del especial</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>