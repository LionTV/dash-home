<script>
  import Container from "../components/container.svelte";
  import Weather from "../components/Weather.svelte";
  import Modal from "../components/Modal.svelte";
  import { browser } from "$app/env";

  let showModal = false;
  let darkmode = true;
  let storage;
  if (browser) {
    storage = window.localStorage;
    if (storage.getItem("darkmode") === null) {
      storage.setItem("darkmode", "true");
    }else if (storage.getItem("darkmode") === "true") {
      darkmode = true;
    } else {
      darkmode = false;
      window.document.body.classList.toggle('light-mode')
    }
  }
  function toggle() {
      window.document.body.classList.toggle('light-mode')
      darkmode = !darkmode;
      let st = window.localStorage;
      st.setItem("darkmode", darkmode.toString());
  }

  let timenow = "";
  function time() {
      var d = new Date();
      var m = d.getMinutes();
      var h = d.getHours();
      var date = d.getDate();
      var month = d.getMonth() + 1;
      var year = d.getFullYear();
      timenow = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + " Uhr \n" + date + "." + month + "." + year;
  }
  time()
  setInterval(time, 1000);

</script>

<div class="bg-slate-600 flex h-16 rounded">
    <p class="my-auto border-b-2 border-indigo-900 mx-4 hover:cursor-pointer hover:text-slate-400">Dashboard</p>
    <p on:click="{() => showModal = true}" class="my-auto mx-4 hover:cursor-pointer hover:text-slate-400 hover:opacity-80" id="settings">Settings</p>
    <div class="mt-4">
      <label for="toggleB" class="flex items-center cursor-pointer ml-6">
        <div class="relative">
          {#if darkmode === true}
            <input checked on:click="{() => toggle()}" type="checkbox" id="toggleB" class="sr-only">
              <div class="block bg-slate-800 w-14 h-8 rounded-full"></div>
            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          {:else}
            <input on:click="{() => toggle()}" type="checkbox" id="toggleB" class="sr-only">
              <div class="block bg-slate-800 w-14 h-8 rounded-full"></div>
            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          {/if}
          </div>
      </label>
    </div>
    <p class="my-auto mx-2 font-bold">{timenow}</p>
</div>

<Weather />

<Container>
</Container>

{#if showModal}
<Modal on:close="{() => showModal = false}">
    <h1 slot="header" class="text-red-600 font-bold">Coming soon...</h1>
    <p class="my-4 ">Ist in Arbeit. Schau später nochmal vorbei...</p>
</Modal>
{/if}

<style>
  :global(body.light-mode) {
        background-color: #ffffff;
        color: #0084f6;
        transition: background-color 0.3s;
  }
  :global(body) {
      background-color: rgb(15, 23, 42);
      color: white;
  }
  input:checked ~ .dot {
    transform: translateX(100%);
    background-color: rgb(49, 46, 129);
  }
  #settings:hover{
    border-bottom: 2px solid rgb(49, 46, 129);
    transition: border-bottom 0.3s;
  }
  input {
    outline: none;
  }
</style>