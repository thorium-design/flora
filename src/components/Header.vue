<template>
    <header class="header">
      <g-image class="logo" src="/uploads/logo_04_white.png"></g-image>
      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
      </nav> -->
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {

}
</script>

<style>
.logo {
  display: block;
  width: 100%;
  height: auto;
  max-width: 240px;
  margin: auto;
}
</style>