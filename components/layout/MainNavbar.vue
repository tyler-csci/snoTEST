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
                    <a href="/services" class="nav-link category">
                        Services
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/showcase" class="nav-link category" >
                        Showcase
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/about" class="nav-link category">
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/blog-posts" class="nav-link category">
                        Blog
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/contact" class="nav-link category">
                        Contact
                    </a>
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