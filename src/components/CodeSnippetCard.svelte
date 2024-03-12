<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { deleteSnippets, toggleFavorite } from '../stores/snippetStore';
	import type { CodeSnippet } from '../app';

	export let snippet: CodeSnippet = {
		title: '',
		language: '',
		code: '',
		favorite: false
	};

	export let index: number;
</script>

<div class="card">
	<header class="card-header">
		{snippet.title}
		<div class="float-right">
			<button
				type="button"
				class={snippet.favorite
					? 'btn btn-sm variant-filled-error'
					: 'btn btn-sm variant-filled-secondary'}
				on:click={() => toggleFavorite(index)}
			>
				{snippet.favorite ? 'Unfavorite' : 'Favorite'}
			</button>
			<button
				type="button"
				class="btn btn-sm variant-filled-error"
				on:click={() => deleteSnippets(index)}>X</button
			>
		</div>
	</header>
	<section class="p-4">
		<CodeBlock language={snippet.language} code={snippet.code} />
	</section>
</div>
