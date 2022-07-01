<script>
  import Weather from "../components/Weather.svelte";
  import Modal from "../components/Modal.svelte";
  import { browser } from "$app/env";
  import Account from "../components/Account.svelte";
  import Todos from "../components/Todos.svelte";
  import Footer from "../components/Footer.svelte";

  let showModal = false;
  let darkmode = true;
  let storage;
  let standort = "Berlin";
  let bundesland = "Brandenburg";

  if (browser) {
    storage = window.localStorage;

    //city
    if (storage.getItem("standort") === null) {
      storage.setItem("standort", "Berlin");
    } else {
      //@ts-ignore
      standort = storage.getItem("standort");
    }

    //state
    if (storage.getItem("bundesland") === null) {
      storage.setItem("bundesland", "Brandenburg");
    } else {
      //@ts-ignore
      bundesland = storage.getItem("bundesland");
    }

    //darkmode
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

  function changecity() {
    let st = window.localStorage;
    if (bundesland == "") {
      bundesland = "...";
    }
    st.setItem("standort", standort);
    st.setItem("bundesland", bundesland);
    window.location.reload();
  }

</script>

<div id="main">
  <div class="bg-slate-600 flex h-16 rounded">
    <p class="my-auto border-b-2 border-indigo-900 mx-4 hover:cursor-pointer hover:text-slate-400">Dashboard</p>
      <p on:click="{() => showModal = true}" class="my-auto mx-4 hover:cursor-pointer hover:text-slate-400 hover:opacity-80" id="settings">Settings</p>
      <p class="my-auto ml-auto mr-2 float-right font-bold">{timenow}</p>
  </div>
  <div id="content">
    <Weather ort={standort} bundesland={bundesland}/>
    <Todos />
  </div>

  <Footer />
</div>

{#if showModal}
  <Modal on:close="{() => showModal = false}">
    <h1 slot="header" class="text-white font-bold text-xl">Settings</h1>
    <p class="text-gray-400 font-semibold mt-2">Standort*</p>
    <input autocomplete="off" bind:value={standort} autocorrect="off" type="text" placeholder="Ort..." id="changecity" class="mt-1 mb-4 text-white bg-transparent ">
    <p class="text-gray-400 font-semibold">Bundesland <em>(optional)</em></p>
    <input autocomplete="off" bind:value={bundesland} autocorrect="off" type="text" placeholder="Bundesland..." id="changecity" class="mt-1 mb-4 text-white bg-transparent ">
    <div class="flex justify-between">
      <p class="text-white font-semibold mt-2">Darkmode</p>
      <div class="mt-2 mb-4">
        <label for="toggleB" class="flex items-center cursor-pointer">
          <div class="relative">
            {#if darkmode === true}
              <input checked on:click="{() => toggle()}" type="checkbox" id="toggleB" class="sr-only">
                <div class="block bg-slate-500 w-14 h-8 rounded-full"></div>
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            {:else}
              <input on:click="{() => toggle()}" type="checkbox" id="toggleB" class="sr-only">
                <div class="block bg-slate-500 w-14 h-8 rounded-full"></div>
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            {/if}
            </div>
        </label>
      </div>
    </div>
    <button on:click={changecity} slot="footer" id="closebutton" class="text-white bg-gray-500 mt-2 rounded">Schließen</button>
  </Modal>
{/if}

<style>
  :global(body.light-mode) {
        background-color: #ffffff;
        color: white;
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
  #changecity {
    border: 1px solid gray;
    padding: 4px;
    width: 100%;
  }

  #closebutton {
		display: block;
		outline: none;
		padding: 4px;
	}

  #main {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  #content {
    flex: 1;
  }
</style>