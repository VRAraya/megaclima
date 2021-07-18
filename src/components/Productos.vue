<template>
  <div class="productos">
    <h1>{{MegaC}}</h1>
    <div>
        <label for="Producto" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Nombre Producto</label>
        <div class="p-col-12 p-md-10">
            <InputText id="producto" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="cantidad" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Cantidad</label>
        <div class="p-col-12 p-md-10">
            <InputText id="cantidad" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="precio" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Precio</label>
        <div class="p-col-12 p-md-10">
            <InputText id="precio" type="text" />
        </div>
    </div>
    <Button label="Buscar Producto" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" />
    <Button label="Agregar Producto" icon="pi pi-check" iconPos="right" class="p-button-text p-button-text" />
</div>
       <h5></h5>
            <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >
                <Column field="NombreProducto" header="Nombre Producto"></Column>
                <Column field="Cantidad" header="Cantidad"></Column>
                <Column field="Precio" header="Precio"></Column>
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
  name: 'Sales',
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
