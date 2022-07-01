<!-- https://www.weatherapi.com -->
<script>
    let links = [
        {
            title: "Wetter API",
            link: "https://www.weatherapi.com",
        },
        {
            title: "Github",
            link: "https://github.com/LionTV/",
        }
    ]
</script>

<footer class="py-3 w-full mt-4 h-20 text-center" id="footer">
    <ul>
        {#each links as link}
        <li class="inline-block mx-6 my-3">
            <a href="{link.link}" target="_blank">{link.title}</a>
        {/each}
    </ul>
</footer>

<style>
    #footer {
        background-color: #0a0a0a;
        transition: background-color 0.3s;
    }
</style>