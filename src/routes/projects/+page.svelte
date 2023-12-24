<script>
    export let data;
</script>

<h1>Projects</h1>

<ul>
    {#each data.summaries as {title, slug}}
        <a href="projects/{slug}">{title}</a>
    {/each}
</ul>