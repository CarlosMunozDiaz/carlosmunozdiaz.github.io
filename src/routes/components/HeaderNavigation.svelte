<script>
	import { base } from '$app/paths';
</script>

<style>
    nav {
        view-transition-name: navigation;

		display: flex;
		gap: 32px;

		height: 60px;

		align-items: center;
		border-bottom: 1px solid #ccc;
    }
</style>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/about-me">Sobre mí</a>
	<a href="{base}/bitacora">Bitácora</a>
	<a href="{base}/works">Artículos</a>
</nav>

