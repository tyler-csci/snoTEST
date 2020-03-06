<template>
  <div class="wrapper landing-page">
          <div class="page-header page-header-small rellax-header">
              <div class="page-header-image"
                  style="background-image: url('img/bg11.jpg')">
              </div>
              <div class="content-center">
                  <h2 class="title mt-5">You're Awesome!</h2>
                  <h3>Thank you for your submission</h3>
                  <div class="container">
                    <router-link to="/">
                      <button class="btn btn-success btn-round mt-4 btn-lg">Back to Home</button>
                    </router-link>
                  </div>
                  <div class="text-center mt-5">
                      <a href="https://www.linkedin.com/company/snodev" target="_blank" rel="noopener" class="btn btn-success btn-icon  btn-round">
                          <i class="fab fa-linkedin"></i>
                      </a>
                      <a href="https://twitter.com/gosnodev" target="_blank" rel="noopener" class="btn btn-success btn-icon  btn-round">
                          <i class="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.facebook.com/gosnodev" target="_blank" rel="noopener" class="btn btn-success btn-icon btn-round">
                          <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/gosnodev" target="_bank" rel="noopener" class="btn btn-success btn-icon btn-round">
                          <i class="fab fa-instagram"></i>
                      </a>
                  </div>
              </div>
          </div>
  </div>
</template>

    

<script>
  export default {
    name: "thankyou"
  }
</script>
