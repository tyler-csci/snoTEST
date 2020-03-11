<template>
    <navbar position="fixed"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
                <nuxt-link to="/">
                    <img src="/img/logo.png" width="50" height="50" alt="snoDEV logo">
                </nuxt-link>
                
        </template>

        <template slot="navbar-menu">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item category">
                    <nuxt-link to="/" class="nav-link">
                        Home
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/services" class="nav-link category">
                        Services
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/showcase" class="nav-link category" >
                        Showcase
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/about" class="nav-link category">
                        About
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/blog-posts" class="nav-link category">
                        Blog
                    </nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/contact" class="nav-link category">
                        Contact
                    </nuxt-link>
                </li>
            </ul>
        </template>
    </navbar>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
      [Popover.name]: Popover
    },
  }

</script>

<style scoped>

</style>