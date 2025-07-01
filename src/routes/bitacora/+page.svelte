<script>
  import posts from '$lib/data/bitacora.json';
</script>

<div class="content" view-transition-name="page">
    <h1>BITÁCORA</h1>
    <p>Bienvenido a la Bitácora de este proyecto. Aquí encontrarás una lista de publicaciones recientes.</p>
    <ul>
    {#each posts as post}
        <li>{post.title} - {post.author} - {post.content} - {post.fecha}</li>
    {/each}
</ul>
</div>