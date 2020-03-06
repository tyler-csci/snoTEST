<template>
    <div class="wrapper landing-page">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                 style="background-image: url('img/header.jpg')">
            </div>
             <div class="content-center">
                <h2 class="title">snoDEV</h2>
                <h3>BRINGING IDEAS TO LIFE</h3>
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

        <div class="section section-about-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Simpler. Faster. Better.</h2>
                        <h5 class="description">SnoDEV uses latest technologies and industry best practices to ensure your website looks and 
                                performs better than any other. Whether you need a personal site or something for business, SnoDEV is here to 
                                provide you with a responsive, efficient, secure, and aesthetic website.
                            </h5>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons objects_globe"></i>
                                </div>
                                <h4 class="info-title">Single Page Applications</h4>
                                <p class="description">Load once. After that, your users won't have to wait when they browse your site.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons education_atom"></i>
                                </div>
                                <h4 class="info-title">Server-Sided Rendering</h4>
                                <p class="description">Better SEO, and faster time-to-content. SSR user experience is dramatically improved from standard websites.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons education_atom"></i>
                                </div>
                                <h4 class="info-title">Progressive Web Applications</h4>
                                <p class="description">Install, load offline, and get the same experience as a mobile app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="separator-line separator-primary"></div>
        <div class="section">
            <div class="about-description text-center">
                <div class="container">
                    <h5>People get a Ferrari not just for the looks, but also because of what lies under the hood.</h5>
                </div>
            </div>
        </div>
        <div class="separator-line separator-primary"></div>

        <div class="features-6">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">The Future is Now.</h2>
                        <h4>Businesses and users alike deserve the best.</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="info info-horizontal">
                            <div class="icon icon-info">
                                <i class="now-ui-icons business_chart-pie-36"></i>
                            </div>
                            <div class="description">
                                <h5 class="info-title">Web Development</h5>
                                <p>Extensive research is done to meet your needs and that of the market. </p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-danger">
                                <i class="now-ui-icons design_palette"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">SEO</h4>
                                <p>Development does not start until you are 100% happy with the design of your website.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="phone-container">
                            <img v-lazy="'img/iphone2.png'" />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="info info-horizontal">
                            <div class="icon icon-success">
                                <i class="now-ui-icons design-2_ruler-pencil"></i>
                            </div>
                            <div class="description">
                                <h5 class="info-title">Marketing</h5>
                                <p>Your dream website becomes a reality.</p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-success">
                                <i class="now-ui-icons education_atom"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Performance Testing</h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
        <div class="section section-contact-us text-center">
            <div class="container">
                <h2 class="title">Give us a shout!</h2>
                <p class="description">Send us a quick message and we'll get back to you</p>
                <form 
                    class="index-form"
                    name="index-form"
                    action="/thankyou"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    >
                <input type="hidden" name="contact-us" value="contact-us" />
                <div class="row">
                    <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
                        <fg-input
                            name="name"
                            class="input-lg"
                            placeholder="First Name..."
                            v-model="form.firstName"
                            addon-left-icon="now-ui-icons users_circle-08">
                        </fg-input>
                        <fg-input
                            name="email"
                            class="input-lg"
                            placeholder="Email Here..."
                            v-model="form.email"
                            addon-left-icon="now-ui-icons ui-1_email-85">
                        </fg-input>
                        
                        <div class="textarea-container">
                            <textarea 
                                name="message"
                                class="form-control"
                                rows="4" 
                                cols="80"
                                v-model="form.message"
                                placeholder="Type a message..."></textarea>
                        </div>
                        <div class="col-md-4 ml-auto mr-auto text-center">
                            <button class="btn btn-success btn-round mt-4 btn-lg">
                                Let's talk
                            </button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
  import { Card, Button, FormGroupInput, Tabs, TabPane } from '@/components';
  import initParallax from '@/utils/initParallax'
  export default {
    name: 'landing-page',
    layout: 'gray-footer',
    components: {
      Card,
      Tabs,
      TabPane,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          message: ''
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
