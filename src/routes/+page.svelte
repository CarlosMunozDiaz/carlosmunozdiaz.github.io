<script>
    import { base } from '$app/paths';
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
    <HomeCard href="{base}/works" title="Mis trabajos" description="Una colección de mis proyectos y trabajos realizados." image="{base}/media/test.png"/>
    <HomeCard href="{base}/bitacora" title="Bitácora" description="Reflexiones y lecturas a lo largo del tiempo." image="{base}/media/test.png"/>
    <HomeCard href="{base}/about-me" title="Sobre mí" description="Conoce más sobre mi recorrido laboral." image="{base}/media/test.png"/>
</div>
