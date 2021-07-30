<template>
  <div>
    <p class="sales">
      Ventas
    </p>
    <div>
      <div class="card">
        <Toolbar class="p-mb-4">
          <template #right>
            <Button
              label="Exportar"
              icon="pi pi-upload"
              class="p-button-help"
              @click="exportCSV($event)"
            />
          </template>
        </Toolbar>

<!-- Sales Table -->
        <DataTable
          ref="dt"
          dataKey="id"
          v-model:selection="selectedOrders"
          v-model:expandedRows="expandedRows"
          :value="orders"
          :paginator="true"
          :rows="5"
          :filters="filters"
          :rowsPerPageOptions="[5,10,25]"
          responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} ventas">
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h4 class="p-mb-2 p-m-md-0 p-as-md-center">Visor de Ventas</h4>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Buscar..." />
              </span>
            </div>
          </template>

          <Column selectionMode="multiple" style="width: 1rem" :exportable="false"></Column>
          <Column :expander="true" headerStyle="width: 1rem" />
          <Column field="id" header="Código" :sortable="true" style="max-width:4rem">>
            <template #body="slotProps">
              {{(slotProps.data.id).padStart(6, '000000')}}
            </template>
          </Column>
          <Column field="paymentMethod" header="Tipo de Pago" :sortable="true" style="max-width:5rem">>
            <template #body="slotProps">
              {{slotProps.data.paymentMethod}}
            </template>
          </Column>
          <Column field="description" header="Descripción" style="max-width:8rem"></Column>
          <Column field="netValue" header="Valor Neto" :sortable="true" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" style="max-width:5rem">
            <template #body="slotProps">
              {{formatCurrency(slotProps.data.netValue)}}
            </template>
          </Column>
          <Column field="subTotalValue" header="Valor subtotal" :sortable="true" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" style="max-width:5rem">
            <template #body="slotProps">
              {{formatCurrency(slotProps.data.subTotalValue)}}
            </template>
          </Column>
          <Column field="totalValue" header="Valor Total" :sortable="true" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" style="max-width:5rem">
            <template #body="slotProps">
              {{formatCurrency(slotProps.data.totalValue)}}
            </template>
          </Column>
          <Column field="client" header="Contacto" :sortable="true" style="max-width:5rem">>
            <template #body="slotProps">
              {{slotProps.data.client.contactName}}
            </template>
          </Column>
          <template #expansion="slotProps">
            <div class="products-subtable">
              <DataTable :value="slotProps.data.products" responsiveLayout="scroll">
                <template #header>
                  <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
                    <h4>Productos asociados a la Cotización #{{(slotProps.data.id).padStart(6, '000000')}}</h4>
                  </div>
                </template>
                <Column field="id" header="Id" sortable></Column>
                <Column field="name" header="Nombre" sortable></Column>
                <Column field="brandName" header="Marca" sortable></Column>
                <Column field="quantity" header="Cantidad" sortable>
                  <template #body="slotProps" sortable>
                    {{slotProps.data.quantity}}
                  </template>
                </Column>
                <Column field="unit price" header="Precio Unitario" sortable>
                  <template #body="slotProps" sortable>
                    {{formatCurrency(slotProps.data.price)}}
                  </template>
                </Column>
                <Column field="price" header="Precio Total" sortable>
                  <template #body="slotProps" sortable>
                    {{formatCurrency((slotProps.data.quantity)*(slotProps.data.price))}}
                  </template>
                </Column>
                <Column headerStyle="width:4rem">
                  <template #body>
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-info p-mr-2" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" />
                  </template>
                </Column>
              </DataTable>
            </div>
            <div class="services-subtable">
              <DataTable :value="slotProps.data.services" responsiveLayout="scroll">
                <template #header>
                  <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
                    <h4>Servicios asociados a la Cotización #{{(slotProps.data.id).padStart(6, '000000')}}</h4>
                  </div>
                </template>
                <Column field="id" header="Id" sortable></Column>
                <Column field="name" header="Nombre" sortable></Column>
                <Column field="price" header="Precio Total" sortable>
                  <template #body="slotProps" sortable>
                    {{formatCurrency(slotProps.data.price)}}
                  </template>
                </Column>
                <Column headerStyle="width:4rem">
                  <template #body>
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-info p-mr-2" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" />
                  </template>
                </Column>
              </DataTable>
            </div>
          </template>
          <Column :exportable="false">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success" @click="editClient(slotProps.data)" />
            </template>
          </Column>
        </DataTable>
      </div>

<!-- New&Edit Order Modal -->
      <Dialog v-model:visible="orderDialog" :style="{width: '450px'}" header="Nueva Cotización" :modal="true" class="p-text-center p-fluid">
        <div class="p-field mb-2">
          <label class="mb-2" for="contactName">Contacto</label>
          <InputText id="contactName" v-model.trim="order.contactName" required="true" autofocus :class="{'p-invalid': submitted && !order.contactName}" />
          <small class="p-error" v-if="submitted && !order.contactName">Nombre de contacto es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="brandName">Empresa</label>
          <InputText id="brandName" v-model.trim="order.brandName" autofocus :class="{'p-invalid': submitted && !order.brandName}" />
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="businessName">Razón Social</label>
          <InputText id="businessName" v-model.trim="order.businessName" autofocus :class="{'p-invalid': submitted && !order.businessName}" />
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="email">Email</label>
          <InputText id="email" v-model="order.email" required="true" autofocus :class="{'p-invalid': submitted && !order.email}" />
          <small class="p-error" v-if="submitted && !order.email">Email es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="address">Dirección</label>
          <Textarea id="address" v-model.trim="order.address" rows="2" cols="20" required="true" autofocus :class="{'p-invalid': submitted && !order.address}" />
          <small class="p-error" v-if="submitted && !order.address">La dirección es requerida.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="city">Ciudad</label>
          <InputText id="city" v-model.trim="order.city" required="true" autofocus :class="{'p-invalid': submitted && !order.city}" />
          <small class="p-error" v-if="submitted && !order.city">La ciudad es requerida.</small>
        </div>
        <div class="p-field mb-2 p-col">
          <label class="mb-2" for="phone">Teléfono</label>
          <InputText id="phone" v-model.trim="order.phone" required="true" autofocus :class="{'p-invalid': submitted && !order.phone}" />
          <small class="p-error" v-if="submitted && !order.phone">Teléfono es requerido.</small>
        </div>
        <div class="p-field mb-2 p-col">
          <label class="mb-2" for="rut">Rut</label>
          <InputText id="rut" v-model.trim="order.rut" required="true" autofocus :class="{'p-invalid': submitted && !order.rut}" />
          <small class="p-error" v-if="submitted && !order.rut">Rut es requerido.</small>
        </div>

        <template class="p-text-center" #footer>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-raised p-button-danger" @click="hideDialog"/>
          <Button label="Guardar" icon="pi pi-check" class="p-button-raised p-button-success" @click="saveOrder" />
        </template>
      </Dialog>

<!-- Delete Order Modal -->
      <Dialog v-model:visible="deleteOrderDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
          <span v-if="order">¿Estás seguro que quieres eliminar <b>{{order.contactName}}</b>?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteOrderDialog = false"/>
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteOrder" />
        </template>
      </Dialog>

<!-- Delete Orders Modal -->
      <Dialog v-model:visible="deleteOrdersDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
          <span v-if="client">¿Estás seguro que quieres eliminar las cotizaciones seleccionados?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteOrdersDialog = false"/>
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedOrders" />
        </template>
      </Dialog>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import OrderService from '../service/OrderService'

export default {
  name: 'Sales',
  props: {
    title: String
  },
  setup () {
    onMounted(() => {
      orderService.value.getOrders().then(data => { orders.value = data })
    })

    const toast = useToast()
    const dt = ref()
    const orders = ref()
    const orderDialog = ref(false)
    const deleteOrderDialog = ref(false)
    const deleteOrdersDialog = ref(false)
    const order = ref({})
    const orderService = ref(new OrderService())
    const selectedOrders = ref()
    const submitted = ref(false)
    const expandedRows = ref([])

    const onRowExpand = (event) => {
      toast.add({ severity: 'info', summary: 'Cotización Expandida', detail: event.data.name, life: 3000 })
    }
    const onRowCollapse = (event) => {
      toast.add({ severity: 'success', summary: 'Cotización Colapsada', detail: event.data.name, life: 3000 })
    }
    const expandAll = () => {
      expandedRows.value = order.value.filter(o => o.id)
      toast.add({ severity: 'success', summary: 'Todas las filas expandidas', life: 3000 })
    }
    const collapseAll = () => {
      expandedRows.value = null
      toast.add({ severity: 'success', summary: 'Todas las filas colapsadas', life: 3000 })
    }
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })

    const formatCurrency = (value) => {
      if (value) { return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
    }
    const openNew = () => {
      order.value = {}
      submitted.value = false
      orderDialog.value = true
    }
    const hideDialog = () => {
      orderDialog.value = false
      submitted.value = false
    }
    const saveOrder = () => {
      submitted.value = true

      if (order.value.contactName.trim()) {
        if (order.value.id) {
          orders.value[findIndexById(order.value.id)] = order.value
          toast.add({ severity: 'success', summary: 'Successful', detail: 'Cotizacion Actualizada', life: 3000 })
        } else {
          order.value.id = createId()
          order.value.brandName = order.value.brandName.value ? order.value.brandName.value : order.value.brandName
          orders.value.push(order.value)
          toast.add({ severity: 'success', summary: 'Successful', detail: 'Cotizacion Creada', life: 3000 })
        }

        orderDialog.value = false
        order.value = {}
      }
    }
    const editOrder = (ord) => {
      order.value = { ...ord }
      orderDialog.value = true
    }
    const confirmDeleteOrder = (ord) => {
      order.value = ord
      deleteOrderDialog.value = true
    }
    const deleteOrder = () => {
      orders.value = orders.value.filter(val => val.id !== order.value.id)
      deleteOrderDialog.value = false
      order.value = {}
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Cotización Eliminada', life: 3000 })
    }
    const findIndexById = (id) => {
      let index = -1
      for (let i = 0; i < orders.value.length; i++) {
        if (orders.value[i].id === id) {
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
      deleteOrdersDialog.value = true
    }
    const deleteSelectedOrders = () => {
      orders.value = orders.value.filter(val => !selectedOrders.value.includes(val))
      deleteOrdersDialog.value = false
      selectedOrders.value = null
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Cotizaciones Eliminadas', life: 3000 })
    }

    return {
      dt,
      orders,
      orderDialog,
      deleteOrderDialog,
      deleteOrdersDialog,
      order,
      selectedOrders,
      filters,
      submitted,
      openNew,
      hideDialog,
      saveOrder,
      editOrder,
      confirmDeleteOrder,
      deleteOrder,
      findIndexById,
      createId,
      exportCSV,
      confirmDeleteSelected,
      deleteSelectedOrders,
      formatCurrency,
      expandedRows,
      onRowExpand,
      onRowCollapse,
      expandAll,
      collapseAll
    }
  }
}
</script>

<style lang="scss" scoped>
  .sales {
    display: flex;
    justify-content: center;
    // align-items: center;
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

  .products-subtable {
    padding: 1rem;
  }

  .services-subtable {
    padding: 1rem;
  }
</style>
