<template>
    <div class="wrapper landing-page">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                 style="background-image: url('img/bg4.jpg')">
            </div>
            <div class="content-center">
                <h2 class="title">SERVICES</h2>
                <h3>IT'S 2020. YOUR WEBSITE SHOULD LOOK LIKE IT.</h3>
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

        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mt-5 mr-auto">
                    <h2 class="title text-center">WHO WE SERVE</h2>
                    <h4 class="description text-center">We love helping small businesses, startups, photographers, and entrepreneurs.</h4>
                    <div class="separator-line separator-primary"></div>
                    <h4 class="description text-center">Aside from building websites, here are other popular services we offer. 
                            If you need something but don't see it, send us a message!</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-info">
                            <i class="now-ui-icons ui-2_chat-round"></i>
                        </div>
                        <h4 class="info-title">Free Consultation</h4>
                        <p class="description">Tell us about your project and we'll give you an honest, in-depth solution.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-info">
                            <i class="now-ui-icons business_chart-pie-36"></i>
                        </div>
                        <h4 class="info-title">Performance Testing</h4>
                        <p class="description">See how well your website performs and how it can be improved.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-info">
                            <i class="now-ui-icons design-2_ruler-pencil"></i>
                        </div>
                        <h4 class="info-title">Data Analytics</h4>
                        <p class="description">Track users, sessions, pageviews, etc. See user behavior and how to increase conversions.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-info">
                            <i class="now-ui-icons ui-2_chat-round"></i>
                        </div>
                        <h4 class="info-title">SEO Optimization</h4>
                        <p class="description">See how your website is currently optimized and how it can climb the ranks of search engines.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-info">
                            <i class="now-ui-icons business_chart-pie-36"></i>
                        </div>
                        <h4 class="info-title">CMS</h4>
                        <p class="description">Integrate an easy-to-use content management system to your website. CMS is great for blogs and news.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="info info-hover">
                        <div class="icon icon-info">
                            <i class="now-ui-icons design-2_ruler-pencil"></i>
                        </div>
                        <h4 class="info-title">Third Party Integrations</h4>
                        <p class="description">Need a specific plugin or API but not sure how to add it to your site? We can do it for you!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
  import { Card, Button, Badge, InfoSection, FormGroupInput, Checkbox } from '@/components';
  import { Select, Option } from 'element-ui'
  import initParallax from '@/utils/initParallax'
  export default {
    name: 'services',
    layout: 'gray-footer',
    components: {
      Card,
      InfoSection,
      Badge,
      [Button.name]: Button,
      [Checkbox.name]: Checkbox,
      [FormGroupInput.name]: FormGroupInput,
      [Select.name]: Select,
      [Option.name]: Option,
    },
    head() {
        return {
            titleTemplate: "%s | Services"
        };
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          service: ''
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
