<script lang="ts">
	import './app.css';

	import { onNavigate } from '$app/navigation';
	
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import Navigation from './components/Navigation.svelte';
	let { children } = $props();

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

<Header />
<Navigation />
{@render children()}
<Footer />