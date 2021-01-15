<script>
    import Router from 'svelte-spa-router';
    import routes from './routes';

    import Header from './Header/Header.svelte';
    import Footer from './Footer/Footer.svelte';
    import Navigation from './Body/Navigation/Navigation.svelte';
</script>

<div>
  <Header />
  <Navigation />
  <Router {routes} />
  <Footer />
</div>