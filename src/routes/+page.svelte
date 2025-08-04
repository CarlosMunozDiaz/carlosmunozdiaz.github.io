<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { onNavigate } from '$app/navigation';
    import HomeCard from './components/HomeCard.svelte';

    let isVisible = [false, false, false];

    let card0;
    let card1;
    let card2;

    onMount(() => {
        const cards = [card0, card1, card2];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const idx = cards.indexOf(entry.target);
                    if (entry.isIntersecting && idx !== -1) {
                        isVisible[idx] = true;
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        cards.forEach(card => {
            if (card) observer.observe(card);
        });
    });

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

<style>
    .card-animate {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1);

        margin-bottom: 1.5rem;
    }
    .card-animate.visible {
        opacity: 1;
        transform: translateY(0);
    }

    @medin (min-width: 768px) {
        .card-animate {
            margin-bottom: 3rem;
        }
    }   
</style>

<div class="content" view-transition-name="page">
    <div bind:this={card0} class="card-animate" class:visible={isVisible[0]}>
        <HomeCard href="{base}/works" title="Mis trabajos" description="Una colección de proyectos y trabajos realizados." image="{base}/media/elpais_2.png"/>
    </div>
    <div bind:this={card1} class="card-animate" class:visible={isVisible[1]}>
        <HomeCard href="{base}/bitacora" title="Bitácora" description="Reflexiones y lecturas a lo largo del tiempo." image="{base}/media/instagram_4.jpg"/>
    </div>
    <div bind:this={card2} class="card-animate" class:visible={isVisible[2]}>
        <HomeCard href="{base}/about-me" title="Sobre mí" description="Mi recorrido laboral." image="{base}/media/instagram_3.jpg"/>
    </div>
</div>
