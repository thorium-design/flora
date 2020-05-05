<template>
<main class="layout">
  <Header />
  <div>
    <h1>{{ $page.pages.heading }}</h1>
    <h2>{{ $page.pages.sub_heading }}</h2>

    <div class="card">{{ $page.pages.banner_text }}</div>
 
    <VueRemarkContent />

    <h2>Ordering</h2>
    <p class="ptop5">Orders need to be placed at least 2 days prior to first delivery date (if delivery day is Friday, orders need to be in by Wednesday morning) so we can make sure we purchase enough flowers to fulfill all our orders. </p>
    <p style="text-align: center;"><button class="button" @click="showForm()">Order Now ({{ $page.pages.order_price }})</button></p>
    
    <h2>Deliveries</h2>
    <p class="ptop5"><em>*verify delivery zones before purchase.</em></p>
    <p><strong>All orders will be delivered on the stated delivery date to the best of our abilities. Specific delivery days will be determined by location.</strong></p>
    <p class="card">{{ $page.pages.delivery_times }}</p>
    <p>Bouquets and vases will be hand delivered by us and will be no-contact porch drop-off.</p>
    <p><strong>Flora Wilde currently only delivers to select areas so make sure the delivery address matches with our delivery zones above.</strong></p>

    <div style="text-align: center;">
        <p><button class="button" @click="showForm()">Order Now ({{ $page.pages.order_price }})</button></p>
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
    heading
    sub_heading
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
  }
}
</script>

<style>

</style>