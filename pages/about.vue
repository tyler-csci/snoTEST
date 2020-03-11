<template>
    <div class="wrapper landing-page">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                 style="background-image: url('img/bg7.jpg')">
            </div>
            <div class="content-center">
                <h2 class="title">ABOUT US</h2>
                <h3>FOR THE PEOPLE, BY THE PEOPLE.</h3>
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
        <div class="section">
            <div class="about-description text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mr-auto ml-auto">
                            <h2 class="title">snoDEV is a Web Development Company.</h2>
                            <h4>Based in Bozeman, MT</h4>
                            <h4 class="description">Because we are developers, technology comes first. Combine this with style and you get an unstoppable website.
                            </h4>
                        </div>
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
                                <h4 class="info-title">Server Sided Rendering</h4>
                                <p class="description">Better SEO, and faster time-to-content. SSR user experience is dramatically improved from standard websites.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info info-hover">
                                <div class="icon icon-info icon-circle">
                                    <i class="now-ui-icons education_atom"></i>
                                </div>
                                <h4 class="info-title">Progressive Web Apps</h4>
                                <p class="description">Install, load offline, and get the same experience as a mobile app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="separator-line separator-primary"></div>
            
        <div class="team-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">The Creator</h2>
                        <h4 class="description">This is only the beginning....</h4>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <card type="profile" plain>
                            <img slot="image" class="img img-raised rounded"
                                 src="img/me.jpg"/>

                            <h4 class="card-title">Tyler Ewald</h4>
                            <h6 class="category">Computer Scientist</h6>
                            <div class="card-footer">
                                <p class="description">Tyler graduated from <a href="https://www.montana.edu/" target="_blank" rel="noopener">MSU</a> with a B.S. in Computer Science. 
                                He created snoDEV to help people get the most of technology. </p>
                            </div>

                        </card>
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
    name: 'about-us',
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
            titleTemplate: "%s | About"
        };
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          speciality: ''
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
