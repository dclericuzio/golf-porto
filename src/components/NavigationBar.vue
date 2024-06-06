<script>
export default {
    name: 'NavigationBar',
}
</script>

<template>
  <div class="nav">
    <div class="nav-wrapper golf-container">
        <div class="nav-img">
            XXX
        </div>
        <div class="nav-links">
            LINKS
        </div>
        <div class="nav-search">
            <v-icon name="bi-search" />
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav{
    background: #f9f9f9;

    .nav-wrapper{
        display: flex;
        padding: 1rem;
        align-items: center;

        // .nav-img{
        //     width: 150px;
        //     height: 36px;
        // }

        .nav-links{
            margin: 0 auto;
        }

        .nav-search{
            display: flex;
        }
    }
}
</style>
