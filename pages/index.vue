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

        <div class="section">
            <div class="about-description text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mr-auto ml-auto">
                            <h2 class="title">Simpler. Better. Faster.</h2>
                            <h4>SnoDEV uses latest technologies and industry best practices to ensure your website looks and performs better than any other. Whether you need a personal site or something for business, SnoDEV is here to provide you with a responsive, efficient, secure, and aesthetic website.</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons objects_globe"></i>
                                </div>
                                <h4 class="info-title">ADVISE</h4>
                                <p class="description">We advise the best route for you.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons education_atom"></i>
                                </div>
                                <h4 class="info-title">DECIDE</h4>
                                <p class="description">You decide what you want.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons education_atom"></i>
                                </div>
                                <h4 class="info-title">PROVIDE</h4>
                                <p class="description">We provide your dream website.</p>
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
                    <h5>People get a Ferrari for two reasons: the looks and the engine.</h5>
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
                                <p>Development does not start until you are 100% happy with the design of your website.</p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-danger">
                                <i class="now-ui-icons design_palette"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">SEO</h4>
                                <p>Let people find your website fast and easy!</p>
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
                                <p>Extensive research is done to meet your needs and that of the market.</p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-success">
                                <i class="now-ui-icons education_atom"></i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Security</h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
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
.hidden {
  display: none;
}
</style>
