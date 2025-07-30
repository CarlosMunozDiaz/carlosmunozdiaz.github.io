<style>
    header {
        view-transition-name: header;
        width: 100%;

        box-sizing: border-box;
        padding: 32px 0px;
        border-bottom: 2px solid #e0e0e0;
        box-shadow: 0 2px 8px -2px rgba(0,0,0,0.08);

        display: flex;
        flex-direction: column;
        align-items: center;

        font-style: italic;
    }

    .h_name {
        display: block;
        font-size: 2rem;
        font-weight: 400;
    } 

    .h_titles {
        display: flex;
        flex-wrap: wrap;
    }

    .h_title:not(:last-child):after {
        content: '•';
        margin: 0 0.5rem;
    }

    .h_name, .h_title {
        margin: 0;
    }
</style>

<header>
    <span class="h_name">Carlos Muñoz Díaz</span>
    <div class="h_titles">
        <span class="h_title">Periodismo visual</span>
        <span class="h_title">Desarrollo web</span>
    </div>
</header>

