<script>
	import { base } from '$app/paths';
</script>

<style>
    nav {
        view-transition-name: navigation;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 32px;

		height: 60px;
    }

	nav a:hover {
		color: #0070f3;
	}
</style>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/works">Trabajos</a>
	<a href="{base}/bitacora">Bitácora</a>
	<a href="{base}/about-me">Sobre mí</a>
</nav>

