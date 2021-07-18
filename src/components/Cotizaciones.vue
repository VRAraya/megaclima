<template>
  <div class="cotizaciones">
    <h1>{{MegaC}}</h1>
    <div>
      <label>Fecha</label>
      <Calendar v-model="value" selectionMode="single"/>
      <div class="p-fluid">
    <div class="p-field p-grid">
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
    <div class="p-m-1 p-p-1 p-m-lg-3 p-b-lg-3"><label>Producto/Servicio</label>
    <AutoComplete v-model="brand" :dropdown="true" :suggestions="filteredBrands" @complete="searchBrand($event)" placeholder="Hint: type 'v' or 'f'" />
    </div>
    <div class="p-field p-grid">
        <label for="valor" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Valor</label>
        <div class="p-col-12 p-md-10">
            <InputText id="valor" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="descripcion" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Descripcion</label>
        <div class="p-col-12 p-md-10">
            <InputText id="descripcion" type="text" />
        </div>
    </div>
    <div class="p-field p-grid">
        <label for="folio" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Numero de Folio</label>
        <div class="p-col-12 p-md-10">
            <InputText id="folio" type="text" />
        </div>
    </div>
    <Button label="Buscar Cotizacion" icon="pi pi-search" iconPos="right" class="p-button-text p-button-text" />
    <Button label="Agregar Cotizacion" icon="pi pi-check" iconPos="right" class="p-button-text p-button-text" />
</div>
       <h5></h5>
            <DataTable :value="products" v-model:selection="selectedProduct3" dataKey="id" responsiveLayout="scroll" >
                <Column field="Fecha" header="Fecha"></Column>
                <Column field="Nombre" header="Nombre"></Column>
                <Column field="Rut" header="Rut"></Column>
                <Column field="Telefono" header="Telefono"></Column>
                <Column field="Correo" header="Correo"></Column>
                <Column field="Producto/Servicio" header="Producto/Servicio"></Column>
                <Column field="Valor" header="Valor"></Column>
                <Column field="Descripcion" header="Descripcion"></Column>
                <Column field="Folio" header="Folio"></Column>
                <Column :exportable="false" field="action" header="Acción">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                        <Button icon="pi pi-check" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sales',
  props: {
    title: String
  },
  setup () {
    const products = [
      { Fecha: '1000', code: 'f230fh0g3', name: 'Bamboo Watch', description: 'Product Description', image: 'bamboo-watch.jpg', price: 65, category: 'Accessories', quantity: 24, inventoryStatus: 'INSTOCK', rating: 5 },
      { id: '1001', code: 'nvklal433', name: 'Black Watch', description: 'Product Description', image: 'black-watch.jpg', price: 72, category: 'Accessories', quantity: 61, inventoryStatus: 'INSTOCK', rating: 4 },
      { id: '1002', code: 'zz21cz3c1', name: 'Blue Band', description: 'Product Description', image: 'blue-band.jpg', price: 79, category: 'Fitness', quantity: 2, inventoryStatus: 'LOWSTOCK', rating: 3 },
      { id: '1003', code: '244wgerg2', name: 'Blue T-Shirt', description: 'Product Description', image: 'blue-t-shirt.jpg', price: 29, category: 'Clothing', quantity: 25, inventoryStatus: 'INSTOCK', rating: 5 },
      { id: '1004', code: 'h456wer53', name: 'Bracelet', description: 'Product Description', image: 'bracelet.jpg', price: 15, category: 'Accessories', quantity: 73, inventoryStatus: 'INSTOCK', rating: 4 },
      { id: '1005', code: 'av2231fwg', name: 'Brown Purse', description: 'Product Description', image: 'brown-purse.jpg', price: 120, category: 'Accessories', quantity: 0, inventoryStatus: 'OUTOFSTOCK', rating: 4 },
      { id: '1006', code: 'bib36pfvm', name: 'Chakra Bracelet', description: 'Product Description', image: 'chakra-bracelet.jpg', price: 32, category: 'Accessories', quantity: 5, inventoryStatus: 'LOWSTOCK', rating: 3 },
      { id: '1007', code: 'mbvjkgip5', name: 'Galaxy Earrings', description: 'Product Description', image: 'galaxy-earrings.jpg', price: 34, category: 'Accessories', quantity: 23, inventoryStatus: 'INSTOCK', rating: 5 },
      { id: '1008', code: 'vbb124btr', name: 'Game Controller', description: 'Product Description', image: 'game-controller.jpg', price: 99, category: 'Electronics', quantity: 2, inventoryStatus: 'LOWSTOCK', rating: 4 },
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
