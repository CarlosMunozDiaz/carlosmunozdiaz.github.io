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
    box-shadow: 0 4px 16px -4px rgba(0, 0, 0, 0.35);
    border-radius: 2px;

    text-decoration: none;
    color: inherit;

    width: 100%;
    max-width: 820px;
    margin: 0 auto;
  }

  a.home-card:hover {
    box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.25);
  }

  .hc_text h2 {
    margin: 0px;
  }
  .hc_text p {
    margin-top: 0px;
  }

  .hc_image {
    width: 100%;
    height: auto;
    border-radius: 4px;

    aspect-ratio: 420 / 334;
    object-fit: cover;
  }

  @media (min-width: 48em) {
    a.home-card {
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem 2rem;
      height: 340px;
    }
    .hc_image {
      max-width: 420px;
      align-self: flex-end;
      transform: rotate3d(1, 1, 2, -5deg) scale(1);
      transition: transform 0.3s ease-in-out;
    }

    a.home-card:hover .hc_image {
      transform: rotate3d(1, 1, 2, 5deg) scale(1.15);
      transition: transform 0.3s ease-in-out;
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