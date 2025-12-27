<script>
    import ButtonUp from '../components/ButtonUp.svelte';
    import posts from '$lib/data/bitacora.json';

  let tree = {};

  posts.forEach(post => {
    const [day, month, yearStr] = post.date_read.split('/');
    const year = parseInt(yearStr, 10);

    if (!tree[year]) {
      tree[year] = {};
    }
    if (!tree[year][month]) {
      tree[year][month] = [];
    }
    tree[year][month].push(post);
  });

  // Ordenar los posts dentro de cada mes por date_read (de más nuevo a más antiguo)
  Object.keys(tree).forEach(year => {
    Object.keys(tree[year]).forEach(month => {
      tree[year][month].sort((a, b) => {
        // date_read formato: "DD/MM/YYYY"
        const [da, ma, ya] = a.date_read.split('/');
        const [db, mb, yb] = b.date_read.split('/');
        const dateA = new Date(`${ya}-${ma}-${da}`);
        const dateB = new Date(`${yb}-${mb}-${db}`);
        return dateB - dateA; // más nuevo primero
      });
    });
  });

  const years = Object.keys(tree).sort((a, b) => b - a);

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  function getMonthName(monthStr) {
    const idx = parseInt(monthStr, 10) - 1;
    return monthNames[idx] || monthStr;
  }
</script>

<style>
  .bitacora-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 1rem auto 2rem auto;
  }

  .bitacora-layout h2 {
    margin-bottom: 0px;
  }

  .bitacora-layout .posts-list section:first-of-type h2 {
    margin-top: 0px;
  }

  .bitacora-layout .posts-list section article:first-of-type h3 {
    margin-top: 0px;
  }

  .contenedor {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  .tarjeta {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 16px -4px rgba(0, 0, 0, 0.35);
  }

  .tarjeta:hover {
    box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.25);
  }

  .tarjeta h4 {margin-top: 0px;}

  .tarjeta .tarjeta-authors {
    font-style: italic;
    margin: 0rem auto;
  }

  aside {
    display: none;
  }

  @media (min-width: 48em) {
    .bitacora-layout {
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
      top: 1rem;
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

    aside nav ul .year-item {
      border-bottom: 0px;
      padding: 0px;
    }

    aside nav ul .year-item:not(:first-child) {
      margin-top: .75rem;
    }

    aside nav ul .month-item {
      padding: 0px;
      border-bottom: 1px solid #e0e0e0;
      margin-top: 0.2rem;
    }
  }

  @media (min-width: 48em) and (max-height: 700px) {
    aside nav ul {
      max-height: 400px;
      overflow-y: auto;
    }

    aside nav ul:after {
      content: "";
      position: sticky;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30px;

      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );

      pointer-events: none;
    }
  }
</style>

<div class="content" view-transition-name="page">
  <p>Como buen cuaderno de bitácora, aquí incorporaré artículos relacionados con el periodismo, la literatura o el desarrollo web que puedan resultar útiles e interesantes para ampliar conocimiento.</p>
  <p>También incluiré <span style="background: #ffeeba; padding: 0.25rem">entradas propias</span> en las que hablaré de aspectos variopintos: desde reflexiones sobre periodismo o lecturas recomendadas hasta experimentos con nuevas técnicas en CSS, librerías front-end o cualquier curiosidad que me apetezca probar y programar. Sin calendario fijo, sin obligaciones. Lo que sea, cuando sea.</p>
  <p>Las entradas se ordenan por fecha: de creación si son mías o de lectura si son de otros autores. No obstante, en cada tarjeta se mostrará la fecha de publicación para que puedas contextualizarlas fácilmente.</p>

  <div class="bitacora-layout">
    <div class="posts-list">
      {#each years as year}
        <section id={`year-${year}`}>
          <h2>{year}</h2>
          {#each Object.keys(tree[year]).sort(
            (a, b) => 
              new Date(`${b} 1, 2000`) - new Date(`${a} 1, 2000`)
          ) as month}
            <article id={`year-${year}-month-${month}`}>
                <h3>{getMonthName(month)}</h3>
              <div class="contenedor">
                {#each tree[year][month] as post}
                  <a class="tarjeta" href="{post.link}" style="text-decoration: none; color: inherit; background: {post['own_entry'] ? '#ffeeba' : 'transparent'}">
                    <div class="tarjeta-content">
                      <h4>{post.title} ({post.date_publication})</h4>
                      {#if !post['own_entry']}
                        <p class="tarjeta-authors">{post.authors}</p>
                      {/if}
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
          {#each years as year}
            <li class="year-item">
              <a href={`#year-${year}`} on:click|preventDefault={() => {
                document.getElementById(`year-${year}`)?.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', `#year-${year}`);
              }}>{year}</a>
              <ul>
          {#each Object.keys(tree[year]).sort(
            (a, b) => 
              new Date(`${b} 1, 2000`) - new Date(`${a} 1, 2000`)
          ) as month}
            <li class="month-item">
              <a href={`#year-${year}-month-${month}`} on:click|preventDefault={() => {
                document.getElementById(`year-${year}-month-${month}`)?.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', `#year-${year}-month-${month}`);
              }}>{getMonthName(month)}</a>
            </li>
          {/each}
              </ul>
            </li>
          {/each}
        </ul>
      </nav>
    </aside>
  </div>

  <ButtonUp />
</div>