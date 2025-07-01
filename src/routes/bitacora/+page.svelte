<script>
  import posts from '$lib/data/bitacora.json';
</script>

<div view-transition-name="page">
    <h1>BITÁCORA</h1>
    <ul>
    {#each posts as post}
        <li>{post.title} - {post.author} - {post.content} - {post.fecha}</li>
    {/each}
</ul>
</div>