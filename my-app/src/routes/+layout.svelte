<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
    <!-- <link rel="manifest" href="./app.webmanifest" /> -->
</svelte:head>

{@render children()}
