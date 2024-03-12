<script lang="ts">
	import type { CodeSnippetInput } from "../../app";
    import CodeSnippetCard from "../../components/CodeSnippetCard.svelte";
	import { addSnippet, snippetStore } from "../../stores/snippetStore";
    import type { PageData } from "./$types";

    export let data: PageData;

    let formData: CodeSnippetInput = {
		title: "",
		language: "html",
		code: ""
	}

    snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
    <div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h2 class="text-center py-6">Create a Snippet</h2>
        <div class="card p-4 w-full text-token space-y-4">
            <label for="" class="label">
                <span>
                    Snippet Title
                </span>
                <input class="input" type="text" placeholder="Enter your title here" bind:value={formData.title}/>
            </label>
            <label for="" class="label">
                <span>
                    Snippet Language
                </span>
                <select class="select" bind:value={formData.language}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="typescript">TypeScript</option>
                </select>
            </label>
            <label class="label">
                <span>Snippet Code</span>
                <textarea class="textarea" rows="4" placeholder="Enter your code here" bind:value={formData.code}/>
            </label>
            <button type="button" class="btn btn-sm variant-filled-primary" on:click={() => addSnippet(formData)}>Add</button>
        </div>
        <div class="text-center py-6">
            <h2>My Code Snippets</h2>
        </div>
        {#each $snippetStore as snippet, index}
            <CodeSnippetCard snippet={snippet} index={index}/>
        {/each}
    </div>
</div>