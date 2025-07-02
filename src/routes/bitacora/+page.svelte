<script>
  import posts from '$lib/data/bitacora.json';

  let tree = {};

  posts.forEach(post => {
    const date = new Date(post.fecha);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });

    if (!tree[year]) {
      tree[year] = {};
    }
    if (!tree[year][month]) {
      tree[year][month] = [];
    }
    tree[year][month].push(post);
  });

  const years = Object.keys(tree).sort((a, b) => b - a);
</script>

<style>
      .bitacora-layout {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      aside {
        display: none;
      }

      .posts-list ul,
      .posts-list li {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .posts-list li {
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        padding: 0.75rem 0;
        box-sizing: border-box;
      }

      @media (min-width: 768px) {
        .bitacora-layout {
          flex-direction: row;
          align-items: flex-start;
        }
        .posts-list {
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
    <h1>BITÁCORA</h1>
    <p>Como buen cuaderno de bitácora, en este apartado incorporaré artículos periodísticos y de desarrollo web que puedan resultar interesantes para ampliar conocimiento.</p>
    <p>Igualmente, incluiré <span>entradas propias</span> en las que hablaré de-lo-que-sea: periodismo, libros o material web (nuevas técnicas en CSS, librerías frontend o curiosidades que me apetece probar y programar). Lo que sea, cuando sea.</p>
    
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
                <h3>{month}</h3>
                  <ul>
                    {#each tree[year][month] as post}
                      <li style="background: {post['entrada-propia'] ? '#ffeeba' : 'transparent'}">
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
            {#each years as year}
              <li>
                <a href={`#year-${year}`}>{year}</a>
                <ul>
                  {#each Object.keys(tree[year]).sort(
                    (a, b) => 
                      new Date(`${b} 1, 2000`) - new Date(`${a} 1, 2000`)
                  ) as month}
                    <li>
                      <a href={`#year-${year}-month-${month}`}>{month}</a>
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