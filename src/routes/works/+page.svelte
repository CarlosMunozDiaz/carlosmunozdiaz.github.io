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
      // Ordenar los posts por fecha descendente (más nuevo primero)
      acc[medio][year].sort((a, b) => {
        const [da, ma, ya] = a.fecha.split('/').map(Number);
        const [db, mb, yb] = b.fecha.split('/').map(Number);
        const dateA = new Date(ya, ma - 1, da);
        const dateB = new Date(yb, mb - 1, db);
        return dateB - dateA;
      });
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
    margin: 1rem auto;
  }

  .article-layout h2:first-child {
    margin-top: 0px;
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
      justify-content: space-between;
      align-items: flex-start;
    }
    .contenedor {
      grid-template-columns: repeat(2, 1fr); /* 2 columnas iguales */
    }

    aside {
      display: block;
      min-width: 220px;
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

    aside nav li {width: 100%;}

    aside nav a {
      display: block;
      padding: 0px;
      text-decoration: none;
      color: inherit;
    }

    aside nav ul ul {
      padding-left: 1rem;
    }

    aside nav > ul li a {
      padding-bottom: 0px;
    }

    aside nav ul .media-item {
      border-bottom: 0px;
      padding: 0px;
    }

    aside nav ul .media-item:not(:first-child) {
      margin-top: 1rem;
    }

    aside nav ul .year-item {
      padding: 0px;
      border-bottom: 1px solid #e0e0e0;
      margin-top: .25rem;
    }
  }
</style>

<div class="content" view-transition-name="page">
    <p>A lo largo de mi trayectoria profesional he tenido la suerte de trabajar en diferentes medios de comunicación y departamentos científicos donde he podido aportar (al menos, intentarlo) mi conocimiento sobre periodismo, visualización de información y programación web.</p>
    <p>Los artículos -no están todos los que son, pero son todos los que están- están organizados por medio/departamento y fecha de publicación para facilitar una lectura ordenada.</p>
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
                <a class="tarjeta" href="{post.link}" style="text-decoration: none; color: inherit; background: {post['own_entry'] ? '#ffeeba' : 'transparent'}">
                  <div class="tarjeta-content">
                    <h4>{post.title} ({post.fecha})</h4>
                    <p>{post.author}</p>
                    <p>{post.description}</p>
                  </div>
                </a>
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
          <li class="media-item">
            <a href={`#medio-${medio}`} on:click|preventDefault={() => {
                const el = document.getElementById(`medio-${medio}`);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  history.replaceState(null, '', `#medio-${medio}`);
                }
            }}>{medio}</a>
            <ul>
              {#each Object.keys(groupedPosts[medio]).sort((a, b) => b - a) as year}
              <li class="year-item">
                <a href={`#medio-${medio}-year-${year}`} on:click|preventDefault={() => {
                  const el = document.getElementById(`medio-${medio}-year-${year}`);
                  if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  history.replaceState(null, '', `#medio-${medio}-year-${year}`);
                  }
                }}>{year}</a>
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