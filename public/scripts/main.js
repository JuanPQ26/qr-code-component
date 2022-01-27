
Vue.component('qr-card-component', {
  template: `
    <div class="qr-card">
      <img src="public/images/image-qr-code.png" alt="qr-code" class="qr-card-code">
      <h3 class="qr-card-title">{{ title }}</h3>
      <p class="qr-card-text">{{ message }}</p>
    </div>
  `,
  props: ['message', 'title']
})

const app = new Vue({
  el: '#app',
  data: {
    qrMessage: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
    qrTitle: 'Improve your front-end skills by building projects',
  }
})
