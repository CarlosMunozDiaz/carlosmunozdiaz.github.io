<script>
  export let href;
  export let title;
  export let description;
  export let image;
</script>

<style>
  a.home-card {
    display: flex;
    gap: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-decoration: none;
    color: inherit;
  }

  a.home-card:hover {
    background-color: #f0f0f0;
  }

  .hc_text {
    margin-bottom: 10px;
  }

  .hc_image {
    width: 100%;
    max-width: 420px;
    height: auto;
    border-radius: 4px;
  }
</style>

<a class="home-card" href={href} view-transition-name="home-card">
  <div class="hc_text">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  <img class="hc_image" src={image} alt=""/>
</a>