<script>
    import { slide } from 'svelte/transition';
    import { browser } from "$app/env";

    let togglebutton = false;
    let newItem = '';
    /**
    * @type {any[]}
    */
    let todos = [];
    if (browser) {
        let storage = window.localStorage;
        // @ts-ignore
        todos = JSON.parse(storage.getItem('todos')) || [];
    }
    function toggle() {
        togglebutton = !togglebutton;

    }

    function addToList() {
		todos = [...todos, {title: newItem}];
		newItem = '';
        if (browser) {
            let storage = window.localStorage;
            storage.setItem("todos", JSON.stringify(todos));
        }
	}

    /**
    * @param {number} index
    */
    function removeFromList(index) {
		todos.splice(index, 1)
		todos = todos;
        if (browser) {
            let storage = window.localStorage;
            storage.setItem("todos", JSON.stringify(todos));
        }
    }

</script>

<div class="rounded border-2 border-slate-800 mt-4 h-auto bg-slate-800">
    <div class="flex justify-between">
        <h1 class="m-4 font-bold text-xl">Todos</h1>
        {#if togglebutton === false}
            <button class="rounded-lg mr-4 m-2 bg-green-600 hover:cursor-pointer hover:bg-green-700 h-10 p-2 font-bold" on:click={toggle}>Add</button>
        {:else}
            <button class="rounded-lg mr-4 m-2 bg-red-600 hover:cursor-pointer hover:bg-red-700 h-10 p-2 font-bold" on:click={toggle}>Close</button>
        {/if}
    </div>
    <div>
        {#if togglebutton === true}
            <div class="flex justify-between" transition:slide>
                <form action="javascript:void(0);" class="inline-flex w-full">
                    <input bind:value={newItem} class="border-2 text-lg bg-gray-600 border-slate-800 rounded-lg p-2 w-full ml-4 h-16 text-white outline-none" type="text" placeholder="Add todo">
                    <button on:click={addToList} class="float-leftht mb-2 rounded-lg mr-4 ml-1 bg-gray-600 hover:cursor-pointer hover:bg-gray-700 h-16 pl-2 pr-2 w-20 font-bold ">Add</button>
                </form>
            </div>
        {/if}
    </div>
    <div>
        <ul class="list-reset">
            {#each todos as todo, index}
                <li class="rounded flex items-center justify-between m-4 bg-gray-600 p-2">
                    <span class="text-lg">{todo.title}</span>
                    <button on:click={() => removeFromList(index)} class="rounded-lg mr-4 m-2 bg-red-600 hover:cursor-pointer hover:bg-red-700 h-10 p-2 font-bold ">Delete</button>
                </li>
            {/each}
        </ul>
    </div>
</div>