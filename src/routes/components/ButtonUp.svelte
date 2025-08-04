<script>
    import { onMount, onDestroy } from 'svelte';
    import { writable } from 'svelte/store';

    const show = writable(false);

    let scrollHandler;

    onMount(() => {
       function handleScroll() {
            show.set(window.scrollY > 2 * window.innerHeight);
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
    .button-up {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        z-index: 1000;
    }
</style>

{#if $show}
    <div class="button-up">
        <button on:click={() => scrollTo({ top: 0, behavior: 'smooth' })}>
            Volver arriba
        </button>
    </div>
{/if}