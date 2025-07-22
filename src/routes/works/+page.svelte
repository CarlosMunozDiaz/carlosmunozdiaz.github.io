<script>
  import posts from '$lib/data/articles.json';

  const mediosOrder = [
    "El País",
    "Envejecimiento en Red",
    "Apuntes de Demofrafía",
    "El Confidencial",
    "Vicento Media Lab",
    "El Mundo",
    "El Español"
  ];

  const groupedPosts = posts.reduce((acc, post) => {
      const medio = post.medio;
      const [day, month, yearStr] = post.fecha.split('/');
      const year = parseInt(yearStr, 10);
      if (!acc[medio]) acc[medio] = {};
      if (!acc[medio][year]) acc[medio][year] = [];
      acc[medio][year].push(post);
      return acc;
  }, {});

  function getOrderedMedios(grouped) {
    const medios = Object.keys(grouped);
    const ordered = mediosOrder.filter(m => medios.includes(m));
    const rest = medios.filter(m => !mediosOrder.includes(m));
    return [...ordered, ...rest];
  }

  $: orderedMedios = getOrderedMedios(groupedPosts);
</script>

<style>
  .article-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  aside {
    display: none;
  }

  .articles-list ul,
  .articles-list li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .articles-list li {
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    padding: 0.75rem 0;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .article-layout {
      flex-direction: row;
      align-items: flex-start;
    }
    .articles-list {
      flex: 1 1 0;
    }
    aside {
      display: block;
      min-width: 220px;
      margin-left: 2rem;
      position: sticky;
      top: 2rem;
      align-self: flex-start;
    }
    aside nav ul,
    aside nav li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    aside nav li {
      border-bottom: 1px solid #e0e0e0;
      width: 100%;
    }
    aside nav a {
      display: block;
      padding: 0.5rem 0;
      text-decoration: none;
      color: inherit;
    }
    aside nav ul ul {
      padding-left: 1rem;
    }
  }
</style>

<div class="content" view-transition-name="page">
    <h1>ARTÍCULOS PERIODÍSTICOS</h1>
    <p>Bienvenido a la sección de artículos periodísticos. Aquí encontrarás una lista de publicaciones donde he colaborado.</p>
    
    <div class="article-layout">
      <div class="articles-list">
      {#each orderedMedios as medio}
        <section id={`medio-${medio}`}>
        <h2>{medio}</h2>
        {#each Object.keys(groupedPosts[medio]).sort((a, b) => b - a) as year}
          <article id={`medio-${medio}-year-${year}`}>
          <h3>{year}</h3>
          <ul>
            {#each groupedPosts[medio][year] as post}
            <li style="background: {post['destacado'] ? '#ffeeba' : 'transparent'}">
              <a href={post.link} style="text-decoration: none; color: inherit;">
              {post.title} - {post.author} - {post.content} - {post.fecha}
              </a>
            </li>
            {/each}
          </ul>
          </article>
        {/each}
        </section>
      {/each}
      </div>
      
      <aside>
      <nav>
        <ul>
        {#each orderedMedios as medio}
          <li>
          <a href={`#medio-${medio}`}>{medio}</a>
          <ul>
            {#each Object.keys(groupedPosts[medio]).sort((a, b) => b - a) as year}
            <li>
              <a href={`#medio-${medio}-year-${year}`}>{year}</a>
            </li>
            {/each}
          </ul>
          </li>
        {/each}
        </ul>
      </nav>
      </aside>
    </div>
</div>