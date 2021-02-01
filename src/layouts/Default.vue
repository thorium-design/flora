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
  background: #ffffff;
}
body {
  color: #000000;
  font-size: 18px;
  font-family: sans-serif;
}
a {
  color: #B55A30;
}
h2, h3 {
  margin-top: 1.75em;
  margin-bottom: 0.33em;
}
p {
  color: rgba(0, 0, 0, 1);
  line-height: 1.75em;
  margin: 1.75em 0;
}
p strong {
  color: rgba(0, 0, 0, 1);
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
  background-color: #e4e4e4;
  color: #000000;
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
  background: #E9897E;
  color: #ffffff;
  padding: 15px 30px;
  font-size: 21px;
  border: none;
  display: inline-block;
  margin: 50px auto;
  text-decoration: none;
}
</style>
