// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
    rel: 'stylesheet'
  })
  head.link.push({
    rel: "icon",
    type: "image/x-icon",
    href: "/uploads/fw-favicon.png"
  })

  head.meta.push({
    property: 'og:title',
    content: "Flora Wilde Designs | Event Florists & Flower Bombs"
  })
  head.meta.push({
    property: "og:type",
    content: "website"
  })
  head.meta.push({
    property: "og:image",
    content: "https://florawildedesigns.com/uploads/fw3.jpg"
  })

  head.link.push({
    href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
    rel: 'stylesheet'
  })

  head.script.push({
    src: "//cdn.callrail.com/companies/745223785/f11a5e490cf2a9119a5f/12/swap.js",
    body: true,
    type: "text/javascript"
  })
}