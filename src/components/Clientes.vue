<template>
  <div class="clientes">
    <h1>{{MegaC}}</h1>
    <div>
        <label for="cliente" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Cliente</label>
        <div class="p-col-12 p-md-10">
            <InputText id="cliente" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="rut" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Rut</label>
        <div class="p-col-12 p-md-10">
            <InputText id="rut" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="telefono" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Telefono</label>
        <div class="p-col-12 p-md-10">
            <InputText id="telefono" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="correo" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Correo</label>
        <div class="p-col-12 p-md-10">
            <InputText id="correo" type="text" />
        </div>
    </div>
    <ConfirmPopup></ConfirmPopup>
    <Button label="Buscar Cliente" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" />
    <Button @click=confirmAddCliente($event) icon="pi pi-check" label="Agregar Cliente"></Button></div>
       <h5></h5>
            <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >
                <Column field="Nombre" header="Nombre"></Column>
                <Column field="Rut" header="Rut"></Column>
                <Column field="Telefono" header="Telefono"></Column>
                <Column field="Correo" header="Correo"></Column>
                <Column :exportable="false" field="action" header="Acción">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
</template>

<script>

export default {
  name: 'Clientes',
  props: {
    title: String
  },
  setup () {
    const products = [
      { id: '1009', code: 'cm230f032', name: 'Gaming Set', description: 'Product Description', image: 'gaming-set.jpg', price: 299, category: 'Electronics', quantity: 63, inventoryStatus: 'INSTOCK', rating: 3 }
    ]
    return {
      products
    }
  },
  methods: {
    confirmAddCliente (event) {
      this.$confirm.require({
        target: event.currentTarget,
        message: 'Estas seguro?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
        },
        reject: () => {
        }
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 60px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
