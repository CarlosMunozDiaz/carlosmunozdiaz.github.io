<script lang="ts">
	import './app.css';

	import { onNavigate } from '$app/navigation';
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import HeaderNavigation from './components/HeaderNavigation.svelte';
	let { children } = $props();
</script>

<Header />
<HeaderNavigation />
<main>
	{@render children()}
</main>
<Footer />