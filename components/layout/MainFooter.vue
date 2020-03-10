<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <router-link to="/">
                            snoDEV
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about">
                            About Us
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact">
                            Contact
                        </router-link>
                    </li>
                    <li>
                        <a href="https://app.termly.io/document/privacy-policy/406ff816-5739-4921-8706-ff7f1182ccf1" target="_blank" rel="noopener">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                <a>snoDEV &copy; {{year}} - using <a href="https://nuxtjs.org/" target="_blank" rel="noopener">Nuxt.js</a></a>
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
