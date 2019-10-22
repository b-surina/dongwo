<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<style lang="scss">
#app{
  width:100%;
  height: 100%;
  display:flex;
  section{
    flex:1;
  }
}

</style>
