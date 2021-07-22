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
    <ConfirmPopup></ConfirmPopup>
    <Button @click=confirmAddCotizacion($event) icon="pi pi-check" iconPos="right" label="Agregar Cotiacion"></Button></div>
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
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click=confirmDeleteProduct($event) />
                        <Button icon="pi pi-check" class="p-button-rounded p-button-success p-mr-2" @click=confirmAddVenta($event) />
                    </template>
                </Column>
            </DataTable>
    </div>
</template>

<script>
export default {
  methods: {
    confirmAddCotizacion (event) {
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
    confirmAddVenta (event) {
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
    confirmDeleteProduct (event) {
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
  name: 'Cotizaciones',
  props: {
    title: String
  },
  setup () {
    const products = [
      { Fecha: '1000', code: 'f230fh0g3', name: 'Bamboo Watch', description: 'Product Description', image: 'bamboo-watch.jpg', price: 65, category: 'Accessories', quantity: 24, inventoryStatus: 'INSTOCK', rating: 5 }
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
