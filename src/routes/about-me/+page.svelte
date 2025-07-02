<script lang="ts">
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { writable } from 'svelte/store';

    // Store for rotation
    const rotation = tweened(0, { duration: 0, easing: cubicOut });

    let amTextEl: HTMLDivElement;
    let amImageEl: HTMLDivElement;

    // Helper to clamp value between min and max
    function clamp(val: number, min: number, max: number) {
        return Math.max(min, Math.min(max, val));
    }

    onMount(() => {
        function handleScroll() {
            if (!amTextEl || !amImageEl) return;

            const rect = amTextEl.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate scroll progress within am_text block
            const start = windowHeight * 0.2; // start animating when am_text is 20% into view
            const end = windowHeight * 0.2 + rect.height - amImageEl.offsetHeight;
            const scrolled = clamp(-rect.top + start, 0, end);

            const progress = clamp(scrolled / end, 0, 1);

            rotation.set(progress * 360);
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    });
</script>

<style>
    .about-me {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media (min-width: 900px) {
        .about-me {
            flex-direction: row;
            align-items: flex-start;
        }
        .am_image {
            min-width: 120px;
            max-width: 180px;
            width: 160px;
            margin-right: 2rem;
            position: relative;
            /* For sticky positioning */
        }
        .am_text {
            flex: 1;
        }
    }

    .am_image {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        top: 2rem;
    }

    @media (min-width: 900px) {
        .am_image {
            position: sticky;
            top: 2rem;
        }
    }

    .am_image img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        object-fit: cover;
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        transition: box-shadow 0.2s;
        background: #fff;
        will-change: transform;
    }

    .content {
        view-transition-name: page
    }
</style>

<div class="content">
    <h1>SOBRE MÍ</h1>
    
    <div class="about-me">
        <div class="am_image" bind:this={amImageEl}>
            <img
                src="/media/cmd.webp"
                alt="Carlos Muñoz Díaz"
                width="100"
                height="100"
                style="transform: rotate({$rotation}deg);"
            />
        </div>
        <div class="am_text" bind:this={amTextEl}>
            <div class="am_text_bio">
                <h3>Biografía</h3>
                <p>Soy Carlos Muñoz Díaz. Nací en Madrid en 1993 pero crecí en Getafe, una ciudad al sur de la capital de España.</p>
                <p>Estudié Periodismo en la Universidad Carlos III de Madrid entre 2011 y 2015 y, posteriormente, el Máster en Periodismo de Investigación, Datos y Visualización de Unidad Editorial entre 2015 y 2016.</p>
                <p>Tras una serie de oportunidades laborales fallidos, decidí darle un pequeño vuelco a mi carrera profesional y opté por estudiar Desarrollo de Aplicaciones Web entre 2017 y 2019. Así, a lo loco.</p>
                <p>Pero es una de las decisiones más acertadas de mi vida.</p>
                <p>Desde marzo de 2020, trabajo como desarrollador web en el equipo de Formatos de El Confidencial, un medio de comunicación español.</p>
                <p>Mi trabajo abarca desde la maquetación de formatos especiales (como éste o éste), pasando por el desarrollo de componentes interactivos (como este buscador de centros educativos en España) hasta la visualización de datos (como las de éste, éste o este artículo).</p>
                <p>¿Y qué tecnologías utilizo en el día a día? Para las maquetas, HTML, SCSS, Vanilla JS y Webpack (como module bundler); para la visualizaciones, D3 (y si toca algún mapita, también suelen entrar en escena D3+LeafletsJS, Mapbox GL JS, Mapshaper y/o QGIS -este último, en menor medida que Mapshaper-).</p>
                <p>Aunque gran parte del tiempo la destine al desarrollo de lo citado en los dos párrafos anteriores, también suelo trabajar con NodeJS (para web scraping o APIs sencillas, por ejemplo) y R (para la manipulación y análisis de datos).</p>
                <p>Como desarrollador también he trabajado en Raona, una consultora tecnológica. El día a día lo pasaba entre códigos de React, TypeScript y SharePoint Online.</p>
                <p>De forma previa también trabajé como periodista de datos -como becario o como freelance- en diferentes medios de comunicación como El Español, Vocento Media Lab o el extinto Bez.</p>
                <p>Creo firmemente en el trabajo en equipo y en el aprendizaje continuo. De hecho, en los próximos meses, mi objetivo es mejorar en el uso de patrones de diseño en mis códigos, R (me queda mucho por aprender a nivel de análisis y visualización), el uso de Adobe Illustrator para el desarrollo de infografías (junto a AI2HTML, por ejemplo) o el manejo del inglés hablado y escrito.</p>
            </div>
            <div class="am_text_educacion">
                <h3>Educación</h3>
                <p>Lorem ipsum</p>
            </div>
            <div class="am_text_trayectoria">
                <h3>Habilidades</h3>
                <p>Lorem ipsum</p>
            </div>
        </div>
    </div>
</div>