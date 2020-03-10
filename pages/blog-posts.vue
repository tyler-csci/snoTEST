<template>
    <div class="wrapper blog-posts">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" 
                style="background-image: url('img/bg11.jpg') ;">
            </div>
            <div class="content-center">
                <h2 class="title">snoBLOG</h2>
                <h3>STAY UP TO DATE WITH THE LATEST NEWS!</h3>
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
            <div class="container">
                <div class="section">
                    <br/>
                    <div class="row">
                        <div class="col-md-4">
                            <card type="blog" plain>
                                <img slot="image" class="img rounded img-raised" src="/icon.png"/>
                                <h6 class="category text-info">Business</h6>
                                <h4 class="card-title">
                                    The launch of snoDEV
                                </h4>
                                <p class="card-description">
                                    It's been a long time coming but it's here! snoDEV Web Development. Stay tuned for more info.
                                </p>
                                <div class="author">
                                    <img v-lazy="'img/smallme.png'" alt="..." class="avatar img-raised">
                                    <span>Tyler Ewald</span>
                                </div>
                            </card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
  import { Card, Button, FormGroupInput } from '@/components';
  import initParallax from '@/utils/initParallax'
  export default {
    name: 'blog-posts',
    layout: 'gray-footer',
    components: {
      Card,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput
    },
    data() {
      return {
        year: new Date().getFullYear()
      }
    },
    head() {
        return {
            titleTemplate: "%s | Blog"
        };
    },
    mounted() {
      initParallax()
    }
  }
</script>
<style>
</style>
