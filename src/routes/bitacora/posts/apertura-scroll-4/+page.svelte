<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    onMount(() => {
        let images = document.querySelectorAll('.apertura_img');

        const initialPositions = [
            {left: '-200%', top: '-200%'},
            {left: '-50%', top: '-200%'},
            {left: '100%', top: '-200%'},
            {left: '-200%', top: '-50%'},
            {left: '100%', top: '-50%'},
            {left: '-200%', top: '100%'},
            {left: '-50%', top: '100%'},
            {left: '100%', top: '100%'}
        ];

        // Versión móvil: menos porcentaje
        const initialPositionsMobile = [
            {left: '-200%', top: '-150%'},
            {left: '-50%', top: '-150%'},
            {left: '100%', top: '-150%'},
            {left: '-200%', top: '-49%'},
            {left: '100%', top: '-49%'},
            {left: '-200%', top: '52%'},
            {left: '-50%', top: '52%'},
            {left: '100%', top: '52%'}
        ];
        const finalPositions = [
            {left: '-156%', top: '-40%'},
            {left: '-50%', top: '-150%'},
            {left: '56%', top: '-40%'},
            {left: '56%', top: '-150%'},
            {left: '3%', top: '70%'},
            {left: '-50%', top: '-40%'},
            {left: '-156%', top: '-150%'},
            {left: '-103%', top: '70%'}
        ];

        function setInitialPositions() {
            const isMobile = window.innerWidth <= 600;
            const positions = isMobile ? initialPositionsMobile : initialPositions;
            images.forEach((img, i) => {
            if (positions[i]) {
                img.dataset.initialLeft = positions[i].left;
                img.dataset.initialTop = positions[i].top;
                img.style.transform = `translate3d(${positions[i].left}, ${positions[i].top}, -100px)`;
            }
            });
        }

        function animateImages(progress) {
            const isMobile = window.innerWidth <= 600;
            const positions = isMobile ? initialPositionsMobile : initialPositions;
            images.forEach((img, i) => {
                if (positions[i] && finalPositions[i]) {
                    const initialLeft = parseFloat(img.dataset.initialLeft || positions[i].left);
                    const initialTop = parseFloat(img.dataset.initialTop || positions[i].top);
                    const finalLeft = parseFloat(finalPositions[i].left);
                    const finalTop = parseFloat(finalPositions[i].top);
                    const left = initialLeft + (finalLeft - initialLeft) * progress;
                    const top = initialTop + (finalTop - initialTop) * progress;
                    img.style.transform = `translate3d(${left}%, ${top}%, -100px)`;
                }
            });
        }
        
        function resetImages() {
            setInitialPositions();
        }

        function handleScroll() {
            const start = 0;
            const limit = window.innerHeight * 1.5;
            if (window.scrollY > start && window.scrollY < limit) {
                const progress = Math.min(1, (window.scrollY - start) / (limit - start));
                animateImages(progress);
            } else if (window.scrollY <= start) {
                //resetImages();
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
        height: 250vh;
        position: relative;
        margin: 0 auto;

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
        width: 100%;
        height: 100%;
        position: relative;
    }
    .apertura_img {
        width: 300px;
        height: 200px;
        object-fit: cover;

        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
    }

    .apertura_content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .apertura_content .apertura_first {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .apertura_content .apertura_second {
        width: 100%;
        height: 200vh;
    }

    @media (max-width: 600px) {
        .apertura_images {
            height: 50vh;
        }
        .apertura_img {
            width: 32%;
        }
    }
</style>

<div class="content" view-transition-name="page">
    <h1>Aperturas en scroll (IV)</h1>
    <p>
        Hace poco estuve probando posibles aperturas para un especial de El País. En este ejemplo muestro una de ellas. Las otras las puedes ver 
        <a href="{base}/bitacora/posts/apertura-scroll-1">aquí (I)</a>, 
        <a href="{base}/bitacora/posts/apertura-scroll-2">aquí (II)</a> y 
        <a href="{base}/bitacora/posts/apertura-scroll-3">aquí (III)</a>. Todas ellas están desarrolladas con Vanilla JS, no con Svelte.
    </p>

    <!-- Cuarta apertura -->
    <div class="apertura apertura_4">
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
                <div class="apertura_first">
                    <div class="apertura_first_text">
                        <h1>Título del especial</h1>
                    </div>
                </div>
                <div class="apertura_second"></div>
            </div>
        </div>
    </div>
</div>