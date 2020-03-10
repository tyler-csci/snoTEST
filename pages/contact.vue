<template>
    <div class="wrapper landing-page">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                 style="background-image: url('img/bg26.jpg')">
            </div>
            <div class="content-center">
                <h2 class="title">CONTACT US</h2>
                <h3>THE BEST WEBSITE IS THE NEXT WEBSITE</h3>
                <div class="text-center">
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

        <div class="main">
            <div class="contact-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 ml-auto mr-auto">
                            <h2 class="title text-center">Send us a message</h2>
                            <p class="description text-center">You can contact us with anything related to our business or services. We'll get
                                in touch with you as soon as possible.
                                <br>
                                <br>
                            </p>
                          
                            <form 
                            name="contact-form"
                            action="/thankyou"
                            method="post"
                            netlify
                            netlify-honeypot="bot-field">
                              
                              <input type="hidden" name="contact-us" value="contact-us" />
                              <label>Your name</label>
                              <fg-input
                                name="name"
                                placeholder="Your Name..."
                                v-model="form.name"
                                addon-left-icon="now-ui-icons users_circle-08">
                              </fg-input>

                              <label>Email address</label>
                              <fg-input
                                name="email"
                                placeholder="Email Here..."
                                v-model="form.email"
                                addon-left-icon="now-ui-icons users_circle-08">
                              </fg-input>
                              
                              <label>Phone</label>
                              <fg-input
                                name="phone"
                                placeholder="Number Here..."
                                v-model="form.phone"
                                addon-left-icon="now-ui-icons tech_mobile">
                              </fg-input>

                              <label>Website</label>
                              <fg-input
                                name="url"
                                placeholder="Website (if applicable)..."
                                v-model="form.url"
                                addon-left-icon="now-ui-icons tech_mobile">
                              </fg-input>

                              <div class="form-group">
                                <label>Your message</label>
                                <textarea 
                                  name="message" 
                                  class="form-control" 
                                  id="message" 
                                  rows="6">
                                </textarea>
                              </div>
                              <div class=" text-center">
                                <button class="btn btn-success btn-round mt-4 btn-lg">
                                  Let's talk
                                </button>
                              </div>
                            </form>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="separator-line separator-primary mt-5"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-info">
                                <i class="now-ui-icons ui-2_chat-round"></i>
                            </div>
                            <h4 class="info-title">Location</h4>
                            <p class="description">Bozeman, MT</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-info">
                                <i class="now-ui-icons ui-2_chat-round"></i>
                            </div>
                            <h4 class="info-title">Email</h4>
                            <p class="description">snodev@gosnodev.com</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info info-hover">
                            <div class="icon icon-info">
                                <i class="now-ui-icons ui-2_chat-round"></i>
                            </div>
                            <h4 class="info-title">Phone</h4>
                            <p class="description">(406) 404-0050</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
  import { Button, InfoSection, FormGroupInput } from '@/components';
  import {API_KEY} from '@/constants'
  import Vue from 'vue'
  import initParallax from '@/utils/initParallax'
  import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
  Vue.use(VueGoogleMaps, {
    load: {
      key: API_KEY
    }
  });
  export default {
    name: 'contact',
    components: {
      InfoSection,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
    },
    head() {
        return {
            titleTemplate: "%s | Contact"
        };
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          url: ''
        },
        center: {
          lat: 40.748817,
          lng: -73.985428
        },
        options: {
          styles: []

        }
      }
    },
    mounted() {
      initParallax()
    }
  }
</script>
<style>
</style>
