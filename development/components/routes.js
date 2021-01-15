// Components
import Home from './Body/Views/Home/Home.svelte';
import Journalism from './Body/Views/Articles/JournalisticArticles/Article.svelte';
import Bitacoras from './Body/Views/Articles/Bitacoras/Article.svelte';
import About from './Body/Views/Articles/Who/Article.svelte';

// Export the route definition object
export default {
    '/': Home,
    '/journalism': Journalism,
    '/bitacoras': Bitacoras,
    '/about': About,
}