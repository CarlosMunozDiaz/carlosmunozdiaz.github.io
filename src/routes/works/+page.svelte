<script>
  import posts from '$lib/data/articles.json';
</script>

<div class="content" view-transition-name="page">
    <h1>ARTÍCULOS PERIODÍSTICOS</h1>
    <p>Bienvenido a la sección de artículos periodísticos. Aquí encontrarás una lista de publicaciones donde he colaborado.</p>
    <ul>
    {#each posts as post}
        <li>{post.title} - {post.author} - {post.content} - {post.fecha} - {post.medio}</li>
    {/each}
</ul>
</div>