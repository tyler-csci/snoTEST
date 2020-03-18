<template>
    <div class="wrapper landing-page">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                 style="background-image: url('img/bg4.jpg')">
            </div>
            <div class="content-center">
                <h2 class="title">OUR WORK</h2>
                <h3>Join the snoDEV family.</h3>
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
        <div class="section section-examples" data-background-color="black">
            <div class="container">
                <div class="col-md-8 ml-auto mr-auto text-center">
                    <div class="section-description">
                        <h2 class="title">Not sure what you need?</h2>
                        <h5 class="description">Get some inspiration here! 
                        </h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <h5 class="title">Services</h5>
                        <div class="card">
                            <a href="https://rlcc.netlify.com" target="_blank" rel="noopener">
                                <img v-lazy="'img/presentation-page/pages/rlccPage.png'" alt="">
                            </a>
                        </div>
                        <h5 class="title">Contact Pages</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/snodevContactPage.png'" alt="">
                            </a>
                        </div>
                        <h5 class="title">Logins</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/rubikonPage.png'" alt="">
                            </a>
                        </div>
                        <h5 class="title">Signups</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/signup.jpg'" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h5 class="title">Landing Pages</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/snodevLandingPage2.png'" alt="">
                            </a>
                        </div>
                        <h5 class="title">Products</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/gatsbyLandingPage.png'" alt="">
                            </a>
                        </div>
                        <h5 class="title">Blog Posts</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/blog-post.jpg'" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h5 class="title">Portfolios</h5>
                        <div class="card">
                            <a href="https://tylerewald.com" target="_blank" rel="noopener">
                                <img v-lazy="'img/presentation-page/pages/tewaldPage.png'" alt="">
                            </a>
                        </div>
                        <h5 class="title">Products</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/blkProductPage.png'" alt="">
                            </a>
                        </div>
                        <h5 class="title">Blog Posts</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/blog-posts.jpg'" alt="">
                            </a>
                        </div>
                        <h5 class="title">Contact Pages</h5>
                        <div class="card">
                            <a>
                                <img v-lazy="'img/presentation-page/pages/blkContactPage.png'" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import ImagesSection from '@/components/pages/components/ImagesSection'
  import BasicElementsSection from "@/components/pages/components/BasicElementsSection";
  import Navigation from '@/components/pages/components/Navigation';
  import TabsSection from '@/components/pages/components/Tabs';
  import PillsSection from '@/components/pages/components/Pills';
  import ProgressPaginationSection from '@/components/pages/components/ProgressPagination';
  import NotificationSection from '@/components/pages/components/Notifications';
  import PreFooterAreas from '@/components/pages/components/PreFooters';
  import FooterAreas from '@/components/pages/components/Footers';
  import TypographyTables from '@/components/pages/components/TypographyTables';
  import CardsSection from '@/components/pages/components/Cards';
  const JavascriptComponents = () =>  import('@/components/pages/components/JavascriptComponents');
  import CarouselSection from '@/components/pages/components/CarouselSection';
  import NucleoIconsSection from '@/components/pages/components/NucleoIconsSection';
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
      [FormGroupInput.name]: FormGroupInput,
      BasicElementsSection,
      ImagesSection,
      Navigation,
      TabsSection,
      PillsSection,
      ProgressPaginationSection,
      NotificationSection,
      PreFooterAreas,
      FooterAreas,
      TypographyTables,
      CardsSection,
      JavascriptComponents,
      CarouselSection,
      NucleoIconsSection
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
