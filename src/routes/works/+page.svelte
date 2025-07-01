<script>
  import posts from '$lib/data/articles.json';
</script>

<div view-transition-name="page">
    <h1>ARTÍCULOS PERIODÍSTICOS</h1>
    <ul>
    {#each posts as post}
        <li>{post.title} - {post.author} - {post.content} - {post.fecha} - {post.medio}</li>
    {/each}
</ul>
</div>