<script>
    export let data;
</script>

<div class="layout">
    <main>
        <slot />
    </main>

    <aside>
        <h2>Other Projects</h2>
        <ul>
            {#each data.summaries as {title, slug}}
                <li>
                    <a href="/projects/{slug}">{title}</a>
                </li>
            {/each}
        </ul>
    </aside>
</div>