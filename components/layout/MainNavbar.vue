<template>
    <navbar position="fixed"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope>
                <a href="/">
                    <img src="/img/logo.png" width="60" height="40" alt="snoDEV logo">
                </a>
        </template>

        <template slot="navbar-menu">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item category">
                    <router-link to="/" class="nav-link">
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/services" class="nav-link category">
                        Services
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/showcase" class="nav-link category" >
                        Showcase
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link category">
                        About
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blog-posts" class="nav-link category">
                        Blog
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link category">
                        Contact
                    </router-link>
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
    }
  }
</script>

<style scoped>

</style>