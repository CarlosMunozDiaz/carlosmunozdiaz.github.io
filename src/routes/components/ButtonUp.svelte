<script>
    import { onMount, onDestroy } from 'svelte';
    import { writable } from 'svelte/store';
    import { fly } from 'svelte/transition';

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

        background-color: #1e1f20;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 18px;
        line-height: 48px;
        width: 48px;
    }
</style>

{#if $show}
    <div class="button-up">
        <button on:click={() => scrollTo({ top: 0, behavior: 'smooth' })} transition:fly={{ y: 100, duration: 2000 }}>
            ☝️
        </button>
    </div>
{/if}