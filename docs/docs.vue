<template>
  <section class="developers-header">
    <md-viewer src="src/markdown/getting-started.md"></md-viewer>
  </section>
</template>

<script>
import Markdown from 'components/markdown'

export default {
  name: 'docs',
  components: {
    [Markdown.name]: Markdown
  }
};
</script>
