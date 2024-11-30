<script lang="ts">
	let { data } = $props();
	let { blogPost }: any = data;
	$inspect(data);
</script>

<h1>Blog Article</h1>

<p>{blogPost}</p>
