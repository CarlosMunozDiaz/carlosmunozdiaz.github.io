<script>
  export let href;
  export let title;
  export let description;
  export let image;
</script>

<style>
  a.home-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    
    box-sizing: border-box;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;

    text-decoration: none;
    color: inherit;
  }

  a.home-card:hover {
    background-color: #f0f0f0;
  }

  .hc_text h2 {
    margin-top: 0px;
  }

  .hc_image {
    width: 100%;
    height: auto;
    border-radius: 4px;

    mix-blend-mode: multiply;
  }

  @media (min-width: 768px) {
    a.home-card {
      flex-direction: row;
    }
    .hc_image {
      max-width: 420px;
    }
  }
</style>

<a class="home-card" href={href} view-transition-name="home-card">
  <div class="hc_text">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  <img class="hc_image" src={image} alt=""/>
</a>