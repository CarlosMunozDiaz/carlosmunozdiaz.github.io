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
            const end = windowHeight * 0.2 + rect.height - (amImageEl.offsetHeight * 1.5);
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
        max-width: 840px;
        margin: 0 auto;
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
        .am_text_bio p:first-child {
            margin-top: 0;
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
    <div class="about-me">
        <div class="am_image" bind:this={amImageEl}>
            <img
                src="{base}/media/cmd.webp"
                alt="Carlos Muñoz Díaz"
                width="100"
                height="100"
                style="transform: rotate({$rotation}deg);"
            />
        </div>
        <div class="am_text" bind:this={amTextEl}>
            <div class="am_text_bio">
            <p>Soy Carlos Muñoz Díaz. Nací en Madrid en 1993, pero crecí en Getafe, una ciudad al sur de la capital de España.</p>
            <p>Estudié Periodismo en la Universidad Carlos III de Madrid entre 2011 y 2015 y, posteriormente, el Máster en Periodismo de Investigación, Datos y Visualización de Unidad Editorial entre 2015 y 2016.</p>
            <p>Tras una serie de oportunidades laborales fallidas, decidí darle un pequeño vuelco a mi carrera profesional y opté por estudiar Desarrollo de Aplicaciones Web entre 2017 y 2019. Así, a lo loco. Una de las decisiones más acertadas de mi vida.</p>
            <p>Desde entonces, he trabajado en consultoría (Raona), departamentos científicos (área de Demografía en el Centro de Ciencias Humanas y Sociales) y medios de comunicación (El Confidencial y El País).</p>
            <p>En la actualidad, mi trabajo abarca desde la maquetación de formatos especiales -con HTML, CSS y JS- pasando por el desarrollo de componentes interactivos como buscadores, modales o widgets electorales.</p>
            <p>Creo en el trabajo en equipo, en el aprendizaje continuo y en un trabajo siempre perfeccionista (sin ser yo nada perfecto, pero el intento es el intento).</p>
            </div>
            <div class="am_text_trayectoria">
                <h3>Trayectoria profesional</h3>
                <ul>
                    <li>
                        <h4>Desarrollador web – El País</h4>
                        <p>Junio de 2022 – Actualidad<br>Maquetación web de formatos especiales y widgets electorales.</p>
                    </li>
                    <li>
                        <h4>Analista y visualizador de datos – Consejo Superior de Investigaciones Científicas (CSIC)</h4>
                        <p>Julio 2021 – Junio 2022<br>Análisis de bases de datos demográficas y visualización interactiva de datos estadísticos.</p>
                    </li>
                    <li>
                        <h4>Desarrollador front-end – El Confidencial</h4>
                        <p>Marzo 2020 – Junio 2021<br>Desarrollo de páginas web interactivas, visualizaciones con D3.js, Leaflet, Mapbox, scraping con Node.js y procesamiento de datos con R y Mapshaper.</p>
                    </li>
                    <li>
                        <h4>Desarrollador web – Raona</h4>
                        <p>Marzo 2019 – Marzo 2020<br>Desarrollo con React, TypeScript y SharePoint Framework. Automatizaciones con PowerShell y plantillas con XML y JSON.</p>
                    </li>
                    <li>
                        <h4>Periodista de datos – Bez</h4>
                        <p>Junio 2017 – Julio 2017<br>Análisis y visualización de datos.</p>
                    </li>
                    <li>
                        <h4>Prácticas en periodismo de datos – Vocento Media Lab</h4>
                        <p>Octubre 2016 – Mayo 2017<br>Análisis y visualización de datos.</p>
                    </li>
                    <li>
                        <h4>Prácticas en periodismo de datos – El Español</h4>
                        <p>Junio 2016 – Septiembre 2016<br>Análisis y visualización de datos.</p>
                    </li>
                </ul>
            </div>
            <div class="am_text_educacion">
                <h3>Formación académica</h3>
                <ul>
                    <li>
                        <h4>Grado Superior en Desarrollo de Aplicaciones Web</h4>
                        <p>Instituto Clara del Rey (Madrid, España)<br>Septiembre 2017 – Junio 2019</p>
                    </li>
                    <li>
                        <h4>Máster en Periodismo de Investigación, Datos y Visualización</h4>
                        <p>Universidad Rey Juan Carlos y Unidad Editorial (Madrid, España)<br>Septiembre 2015 – Junio 2016</p>
                    </li>
                    <li>
                        <h4>Grado en Periodismo</h4>
                        <p>Universidad Carlos III de Madrid (Getafe, España)<br>Septiembre 2011 – Junio 2015</p>
                    </li>
                </ul>
            </div>
            <div class="am_text_habilidades">
                <h3>Habilidades técnicas</h3>
                <ul>
                    <li><strong>Lenguajes principales:</strong> HTML, CSS/SCSS, JavaScript</li>
                    <li><strong>Otros lenguajes:</strong> Python, R</li>
                    <li><strong>Diseño:</strong> Figma (conocimiento básico)</li>
                    <li><strong>Frameworks y librerías:</strong> Svelte, React</li>
                    <li><strong>Entornos y herramientas:</strong> Node.js, Webpack/Vite, consumo de APIs</li>
                    <li><strong>Manipulación y análisis de datos:</strong> Web scraping (con Node.js, Python o desde el inspector), tratamiento de datos con R y Node.js</li>
                    <li><strong>Visualización de datos:</strong> D3.js, Datawrapper y Vanilla JS (SVG y Canvas)</li>
                    <li><strong>Visualización de mapas:</strong> Leaflet.js y Mapbox GL JS </li>
                    <li><strong>Optimización de mapas:</strong> Mapshaper y Tippecanoe</li>
                    <li><strong>Control de versiones:</strong> Git (software), GitHub</li>
                    <li><strong>Optimización de archivos:</strong> Minificación de archivos, de imágenes (image-resize) o de vídeos (ffmpeg), empaquetado eficiente (Webpack, Vite)</li>
                </ul>
            </div>
            <div class="am_text_habilidades_futuras">
                <h3>¿Qué estoy mirando o quiero mirar para mejorar?</h3>
                <ul>
                    <li>Three.js y Blender (visualizaciones en tres dimensiones)</li>
                    <li>Adobe Illustrator (para el desarrollo de infografías) junto a ai2html o ai2svelte</li>
                    <li>Inteligencia Artificial (LLM, MCP)</li>
                    <li>Inglés (hablado y escrito)</li>
                    <li>Italiano (hablado y escrito)</li>
                </ul>
            </div>
        </div>
    </div>
</div>