<style>
    header {
        view-transition-name: header;
        width: 100%;
        text-align: center;
        border-bottom: 2px solid #e0e0e0;
        /* Alternativamente, puedes usar box-shadow: */
        box-shadow: 0 2px 8px -2px rgba(0,0,0,0.08);
    }

    .h_name {
        display: block;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0.5rem 0;
    } 

    .h_titles {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .h_title:not(:last-child):after {
        content: '•';
        margin: 0 0.5rem;
    }
</style>

<header>
    <span class="h_name">Carlos Muñoz Díaz</span>
    <div class="h_titles">
        <span class="h_title">Periodismo visual</span>
        <span class="h_title">Desarrollo web</span>
    </div>
</header>

