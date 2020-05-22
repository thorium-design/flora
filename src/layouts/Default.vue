<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "../components/Header.vue"
export default {
  components: {
    Header
  }
}
</script>

<style>

html {
  background: linear-gradient(-35deg, #111111, #1f1f1f);
}
body {
  color: #ffffff;
  font-size: 18px;
  font-family: sans-serif;
}
a {
  color: #b9c5db;
}
h2, h3 {
  margin-top: 1.75em;
  margin-bottom: 0.33em;
}
p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.75em;
  margin: 1.75em 0;
}
p strong {
  color: rgba(255, 255, 255, 1);
}
p.ptop5 {
  margin-top: .5em;
}
main {
  min-height: 80vw;
  max-width: 500px;
  padding: 60px 16px 160px;
  margin: auto;
}
.card {
  padding: 16px;
  text-align: center;
  background-color: #343434;
  margin: 32px auto;
  max-width: 400px;
}
.pb32 {
  padding-bottom: 32px;
}
img {
  max-width: 100%;
  height: auto;
}
.sample-images {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sample-images p  {
  width: 100%;
}
@media only screen and (min-width: 425px) {

  .sample-images {
    flex-direction: row;
  }
  .sample-images p  {
    width: 33%;
  }
  
}
.sample-images p img {
  display: block;
  flex-basis: 0;
  flex-grow: 0;
  flex-shrink: 0;
}
.button {
  background: linear-gradient(#a3b0c9,#b9c5db);
  color: #212121;
  padding: 15px 30px;
  font-size: 21px;
  border: none;
  display: inline-block;
  margin: 50px auto;
}
</style>
