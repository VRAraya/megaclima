<template>
  <div>
    <p class="products">
      Productos
    </p>
    <div>
      <div class="card">
        <Toolbar class="p-mb-4">
          <template #left>
            <Button label="Nuevo" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
            <Button label="Eliminar" icon="pi pi-trash" class="p-button-danger p-ml-2" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
          </template>

          <template #right>
            <Button label="Exportar" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
          </template>
        </Toolbar>

<!-- Product Table -->
        <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id"
          :paginator="true" :rows="5" :filters="filters"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} productos" responsiveLayout="scroll">
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h5 class="p-mb-2 p-m-md-0 p-as-md-center">Administrador de Productos</h5>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Buscar..." />
              </span>
            </div>
          </template>

          <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
          <Column field="name" header="Nombre" :sortable="true" style="max-width:8rem"></Column>
          <Column field="brandName" header="Marca" :sortable="true" style="max-width:8rem">>
            <template #body="slotProps">
              {{slotProps.data.brandName}}
            </template>
          </Column>
          <Column field="price" header="Precio" :sortable="true" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" style="max-width:5rem">
            <template #body="slotProps">
              {{formatCurrency(slotProps.data.price)}}
            </template>
          </Column>
          <Column field="cost" header="Costo" :sortable="true" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" style="max-width:5rem">
            <template #body="slotProps">
              {{formatCurrency(slotProps.data.cost)}}
            </template>
          </Column>
          <Column field="description" header="Descripción" :sortable="true" style="max-width:15rem"></Column>
          <Column :exportable="false">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
            </template>
          </Column>
        </DataTable>
      </div>

<!-- New&Edit Product Modal -->
      <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Nuevo Producto" :modal="true" class="p-text-center p-fluid">
        <div class="p-field mb-2">
          <label class="mb-2" for="name">Nombre</label>
          <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
          <small class="p-error" v-if="submitted && !product.name">Nombre es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="brand">Marca</label>
          <InputText id="brand" v-model.trim="product.brandName" required="true" :class="{'p-invalid': submitted && !product.brandName}" />
          <small class="p-error" v-if="submitted && !product.brandName">Marca es requerida.</small>
        </div>
        <div class="p-formgrid p-grid">
          <div class="p-field mb-2 p-col">
            <label class="mb-2" for="price">Precio</label>
            <InputNumber id="price" v-model="product.price" required="true" :class="{'p-invalid': submitted && !product.price}" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" />
            <small class="p-error" v-if="submitted && !product.price">Precio es requerido.</small>
          </div>
          <div class="p-field mb-2 p-col">
            <label class="mb-2" for="cost">Coste</label>
            <InputNumber id="cost" v-model="product.cost" required="true" :class="{'p-invalid': submitted && !product.cost}" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" />
            <small class="p-error" v-if="submitted && !product.cost">Coste es requerido.</small>
          </div>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="description">Descripción</label>
          <Textarea id="description" v-model="product.description" rows="3" cols="20" />
        </div>
        <template class="p-text-center" #footer>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-raised p-button-danger" @click="hideDialog"/>
          <Button label="Guardar" icon="pi pi-check" class="p-button-raised p-button-success" @click="saveProduct" />
        </template>
      </Dialog>

<!-- Delete Product Modal -->
      <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
          <span v-if="product">¿Estás seguro que quieres eliminar <b>{{product.name}}</b>?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
        </template>
      </Dialog>

<!-- Delete Products Modal -->
      <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
          <span v-if="product">¿Estás seguro que quieres eliminar los productos seleccionados?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import ProductService from '../service/ProductService'

export default {
  name: 'Products',
  props: {
    title: String
  },
  setup () {
    onMounted(() => {
      productService.value.getProducts().then(data => { products.value = data })
    })

    const toast = useToast()
    const dt = ref()
    const products = ref()
    const productDialog = ref(false)
    const deleteProductDialog = ref(false)
    const deleteProductsDialog = ref(false)
    const product = ref({})
    const productService = ref(new ProductService())
    const selectedProducts = ref()
    const submitted = ref(false)
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })

    const formatCurrency = (value) => {
      if (value) { return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
    }
    const openNew = () => {
      product.value = {}
      submitted.value = false
      productDialog.value = true
    }
    const hideDialog = () => {
      productDialog.value = false
      submitted.value = false
    }
    const saveProduct = () => {
      submitted.value = true

      if (product.value.name.trim()) {
        if (product.value.id) {
          products.value[findIndexById(product.value.id)] = product.value
          toast.add({ severity: 'success', summary: 'Successful', detail: 'Producto Actualizado', life: 3000 })
        } else {
          product.value.id = createId()
          product.value.brandName = product.value.brandName.value ? product.value.brandName.value : product.value.brandName
          products.value.push(product.value)
          toast.add({ severity: 'success', summary: 'Successful', detail: 'Producto Creado', life: 3000 })
        }

        productDialog.value = false
        product.value = {}
      }
    }
    const editProduct = (prod) => {
      product.value = { ...prod }
      productDialog.value = true
    }
    const confirmDeleteProduct = (prod) => {
      product.value = prod
      deleteProductDialog.value = true
    }
    const deleteProduct = () => {
      products.value = products.value.filter(val => val.id !== product.value.id)
      deleteProductDialog.value = false
      product.value = {}
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Producto Eliminado', life: 3000 })
    }
    const findIndexById = (id) => {
      let index = -1
      for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].id === id) {
          index = i
          break
        }
      }

      return index
    }
    const createId = () => {
      let id = ''
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      return id
    }
    const exportCSV = () => {
      dt.value.exportCSV()
    }
    const confirmDeleteSelected = () => {
      deleteProductsDialog.value = true
    }
    const deleteSelectedProducts = () => {
      products.value = products.value.filter(val => !selectedProducts.value.includes(val))
      deleteProductsDialog.value = false
      selectedProducts.value = null
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Productos Eliminados', life: 3000 })
    }

    return {
      dt,
      products,
      productDialog,
      deleteProductDialog,
      deleteProductsDialog,
      product,
      selectedProducts,
      filters,
      submitted,
      formatCurrency,
      openNew,
      hideDialog,
      saveProduct,
      editProduct,
      confirmDeleteProduct,
      deleteProduct,
      findIndexById,
      createId,
      exportCSV,
      confirmDeleteSelected,
      deleteSelectedProducts
    }
  }
}
</script>

<style lang="scss" scoped>
  .products {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    height: 100%;
    width: 100%;
    font-size: 40px;
    color: rgb(167, 167, 167);
    font-weight: 600;
  }

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
      align-items: start;
    }
  }

  .confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 960px) {
    ::v-deep(.p-toolbar) {
      flex-wrap: wrap;

      .p-button {
        margin-bottom: 0.25rem;
      }
    }
  }
</style>
