<template>

  <HomeView />
  <router-view/>
</template>

<script>
import HomeView from './views/HomeView.vue';

export default({
  components:{
    HomeView
}
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800&family=Pacifico&family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');
@import '@/assets/styles/main.css';
</style>
