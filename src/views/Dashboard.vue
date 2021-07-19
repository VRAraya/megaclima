<template>
  <div class="Dashboard p-d-flex p-flex-wrap flex">
    <Sidebar/>
    <Sales title="Clientes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Sales from '@/components/Clientes.vue'
import Sidebar from '@/components/Sidebar.vue'
// import { ref } from 'vue'

export default {
  name: 'Dashboard',
  components: {
    Sales,
    Sidebar
  },
  setup () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.p-button {
    margin: 0.3rem .5rem;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-dialog .p-button {
    min-width: 6rem;
}
</style>
