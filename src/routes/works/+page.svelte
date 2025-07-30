<script>
  import posts from '$lib/data/articles.json';

  const mediosOrder = [
    "El País",
    "Envejecimiento en Red",
    "Apuntes de Demografía",
    "El Confidencial",
    "Vocento Media Lab",
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

      .contenedor {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px; /* espacio entre tarjetas */
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }

      .tarjeta {
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        /* No establecer altura fija */
      }

  @media (min-width: 768px) {
    .article-layout {
      flex-direction: row;
      align-items: flex-start;
    }
    .contenedor {
      grid-template-columns: repeat(2, 1fr); /* 2 columnas iguales */
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
            <div class="contenedor">
              {#each groupedPosts[medio][year] as post}
                <div class="tarjeta" style="background: {post['own_entry'] ? '#ffeeba' : 'transparent'}">
                  <a href={post.link} style="text-decoration: none; color: inherit;">
                    {post.title} - {post.author} - {post.content} - {post.fecha}
                  </a>
                </div>
              {/each}
            </div>
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