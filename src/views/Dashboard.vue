<template>
  <div class="dashboard">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  name: 'Dashboard',

  components: {
    Sidebar
  }
}
</script>

<style scoped>
  .dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(12, 154, 211);
    min-height: 100vh;
    width: 100vw;
  }

  .content {
    background-color: white;
    border-radius: 20px;
    margin: 6px 6px 6px 0px;
  }
</style>
