<script>
    import { onNavigate } from '$app/navigation';
    import HomeCard from './components/HomeCard.svelte';

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<div class="content" view-transition-name="page">
    <HomeCard href="/works" title="Mis trabajos" description="Una colección de mis proyectos y trabajos realizados." image="/media/test.png"/>
    <HomeCard href="/bitacora" title="Bitácora" description="Reflexiones y lecturas a lo largo del tiempo." image="/media/test.png"/>
    <HomeCard href="/about-me" title="Sobre mí" description="Conoce más sobre mi recorrido laboral." image="/media/test.png"/>
</div>
