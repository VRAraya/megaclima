<template>
  <div class="servicios">
    <h1>{{MegaC}}</h1>
    <div>
        <label for="Servicio" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Nombre Servicio</label>
        <div class="p-col-12 p-md-10">
            <InputText id="producto" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="Descripcion" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Descripcion</label>
        <div class="p-col-12 p-md-10">
            <InputText id="Descripcion" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="Precio" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Precio</label>
        <div class="p-col-12 p-md-10">
            <InputText id="precio" type="text" />
        </div>
    </div>
    <Button label="Buscar Servicio" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" />
    <ConfirmPopup></ConfirmPopup>
    <Button @click=confirmAddServicio($event) icon="pi pi-check" iconPos="right" label="Agregar Servicio"></Button></div>
       <h5></h5>
            <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >
                <Column field="NombreServicio" header="Nombre Servicio"></Column>
                <Column field="Descripcion" header="Descripcion"></Column>
                <Column field="Precio" header="Precio"></Column>
                <Column :exportable="false" field="action" header="Acción">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                        <ConfirmPopup></ConfirmPopup>
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click=confirmDeleteServicio($event) />
                    </template>
                </Column>
            </DataTable>
</template>

<script>
export default {
  name: 'Sales',
  methods: {
    confirmAddServicio (event) {
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
    },
    confirmDeleteServicio (event) {
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
  },
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
