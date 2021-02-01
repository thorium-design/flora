<template>
<main class="layout">
  <Header />
  <div>
    <VueRemarkContent>
      <template v-slot:banner>
        <p class="card">{{ $page.pages.banner_text }}</p>
      </template>

      <template v-slot:delivery>
        <p class="card">{{ $page.pages.delivery_times }}</p>
      </template>

      <template v-slot:button>
        <p style="text-align: center;">
          <a class="button" href="https://florawilde.square.site/">Order Now({{ $page.pages.order_price }})</a>
          <!-- <button class="button" @click="showForm()">
            Order Now({{ $page.pages.order_price }})
          </button> -->
        </p>
      </template>
    </VueRemarkContent>

    <div style="text-align: center;">
        <p>
          <a class="button" href="https://florawilde.square.site/">Order Now({{ $page.pages.order_price }})</a>
          <!-- <button class="button" @click="showForm()">Order Now ({{ $page.pages.order_price }})</button> -->
        </p>
        <p>Need customizations or placing a bulk order? Please email <a href="mailto:florawildedesigns@gmail.com">florawildedesigns@gmail.com</a></p>
    </div>

    <div id="order_form_card_1" class="card pb32" style="display: none;">
        <h3>We need some information to complete the order</h3>
        <p>Payment will be collected in the next step</p>
        <div id="cr-form-FOR671ff796be13466fbe3f17375b2c16df"></div>
    </div>

  </div>
</main>
</template>

<page-query>
query Pages ($id: ID!) {
  pages (id: $id) {
    seo_title
    seo_description
    banner_text
    order_price
    delivery_times
  }
}
</page-query>

<script>
import Header from "../components/Header.vue"
export default {
  components: {
    Header
  },
  methods: {
    showForm () {
      var form = document.getElementById("order_form_card_1");
      form.style.display = "block";
      form.scrollIntoView();
    }
  },
  metaInfo() {
    return {
      title: this.$page.pages.seo_title || 'Flora Wilde Designs',
      meta: [
        { key: 'description', name: 'description', content: this.$page.pages.seo_description || 'Flora Wilde Designs' }
      ]
    }
  }
}
</script>

<style>

</style>