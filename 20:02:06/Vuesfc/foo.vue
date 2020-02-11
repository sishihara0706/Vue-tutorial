<template>
  <div class="foo">
    <h1 class="header">Foo コンポーネント</h1>
    <p :class="$style.message">これはFooコンポーネントです</p>
  </div>
</template>
<script>
export default {
  created() {
    console.log("css module: $style", this.$style);
  }
};
</script>

<style>
p {
  text-decoration: underline;
}
</style>
<style scoped>
.foo {
  border: solid 1px green;
  margin: 4px;
  padding: 4px;
}

.header {
  font-size: 150%;
}
</style>
<style module>
.message {
  color: #42b983;
}
</style>