<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

  export default{
    components: {
      Header,
      Footer
    }
  }
</script>

<style></style>