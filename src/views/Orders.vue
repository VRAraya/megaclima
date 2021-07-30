<template>
  <div>
    <p class="orders">
      Cotizaciones
    </p>
    <div>
      <div class="card">
        <Toolbar class="p-mb-4">
          <template #left>
            <Button
              label="Nuevo"
              icon="pi pi-plus"
              class="p-button-success p-mr-2"
              @click="openNew"
            />
            <Button
              label="Eliminar"
              icon="pi pi-trash"
              class="p-button-danger p-ml-2"
              @click="confirmDeleteSelected"
              :disabled="!selectedOrders || !selectedOrders.length"
            />
          </template>

          <template #right>
            <Button
              label="Exportar"
              icon="pi pi-upload"
              class="p-button-help"
              @click="exportCSV($event)"
            />
          </template>
        </Toolbar>

<!-- Orders Table -->
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
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} cotizaciones">
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h4 class="p-mb-2 p-m-md-0 p-as-md-center">Administrador de Cotizaciones</h4>
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
                    <Button
                      label="Agregar Producto"
                      icon="pi pi-plus"
                      class="p-button-success p-mr-2"
                    />
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
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-info mr-1" />
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
                    <Button
                      label="Agregar Servicio"
                      icon="pi pi-plus"
                      class="p-button-success mr-2"
                    />
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
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-info mr-1" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" />
                  </template>
                </Column>
              </DataTable>
            </div>
          </template>
          <Column :exportable="false">
            <template #body="slotProps">
              <Button icon="pi pi-money-bill" class="p-button-rounded p-button-info mr-1" @click="payOrder(slotProps.data)" />
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-1" @click="editOrder(slotProps.data)" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteOrder(slotProps.data)" />
            </template>
          </Column>
        </DataTable>
      </div>

<!-- New&Edit Order Modal -->
      <Dialog v-model:visible="orderDialog" :style="{width: '800px'}" header="Nueva Cotización" :modal="true" class="p-fluid">
        <div class="grid">
          <div class="col p-field">
            <label class="mb-2" for="client">Cliente</label>
            <AutoComplete
              id="client"
              v-model="order.client"
              :suggestions="filteredClients"
              @complete="searchClient($event)"
              :dropdown="true"
              field="contactName"
              forceSelection
            >
              <template #item="slotProps">
                <div class="client-item">
                  <div class="p-ml-2">{{slotProps.item.contactName}}</div>
                </div>
              </template>
            </AutoComplete>
          </div>
          <div class="col flex align-items-end">
            <Button
              label="Nuevo Cliente"
              icon="pi pi-plus"
              class="p-button-success p-mr-2"
              @click="openNewClient"
            />
          </div>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="products">Productos a vender</label>
          <MultiSelect
            id="products"
            :filter="true"
            :showToggleAll="false"
            optionLabel="name"
            v-model="order.products"
            :options="productsOptions"
            class="multiselect-custom"
          >
            <template #value="slotProps">
              <div class="product-item product-item-value" v-for="option of slotProps.value" :key="option.id">
                <div>{{option.name}}</div>
              </div>
            </template>
            <template #option="slotProps">
              <div class="product-item">
                <div>{{slotProps.option.name}}</div>
              </div>
            </template>
          </MultiSelect>
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

<!-- New Client Modal -->
      <Dialog v-model:visible="clientDialog" :style="{width: '450px'}" header="Nuevo Cliente" :modal="true" class="p-fluid">
        <div class="p-field mb-2">
          <label class="mb-2" for="contactName">Contacto</label>
          <InputText id="contactName" v-model.trim="client.contactName" required="true" autofocus :class="{'p-invalid': submittedClient && !client.contactName}" />
          <small class="p-error" v-if="submittedClient && !client.contactName">Nombre de contacto es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="brandName">Empresa</label>
          <InputText id="brandName" v-model.trim="client.brandName" autofocus :class="{'p-invalid': submittedClient && !client.brandName}" />
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="businessName">Razón Social</label>
          <InputText id="businessName" v-model.trim="client.businessName" autofocus :class="{'p-invalid': submittedClient && !client.businessName}" />
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="email">Email</label>
          <InputText id="email" v-model="client.email" required="true" autofocus :class="{'p-invalid': submittedClient && !client.email}" />
          <small class="p-error" v-if="submittedClient && !client.email">Email es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="address">Dirección</label>
          <Textarea id="address" v-model.trim="client.address" rows="2" cols="20" required="true" autofocus :class="{'p-invalid': submittedClient && !client.address}" />
          <small class="p-error" v-if="submittedClient && !client.address">La dirección es requerida.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="city">Ciudad</label>
          <InputText id="city" v-model.trim="client.city" required="true" autofocus :class="{'p-invalid': submittedClient && !client.city}" />
          <small class="p-error" v-if="submittedClient && !client.city">La ciudad es requerida.</small>
        </div>
        <div class="p-field mb-2 p-col">
          <label class="mb-2" for="phone">Teléfono</label>
          <InputText id="phone" v-model.trim="client.phone" required="true" autofocus :class="{'p-invalid': submittedClient && !client.phone}" />
          <small class="p-error" v-if="submittedClient && !client.phone">Teléfono es requerido.</small>
        </div>
        <div class="p-field mb-2 p-col">
          <label class="mb-2" for="rut">Rut</label>
          <InputText id="rut" v-model.trim="client.rut" required="true" autofocus :class="{'p-invalid': submittedClient && !client.rut}" />
          <small class="p-error" v-if="submittedClient && !client.rut">Rut es requerido.</small>
        </div>

        <template class="p-text-center" #footer>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-raised p-button-danger" @click="hideClientDialog"/>
          <Button label="Guardar" icon="pi pi-check" class="p-button-raised p-button-success" @click="saveClient" />
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

<!-- Pay Order Modal -->
      <Dialog v-model:visible="payOrderDialog" :style="{width: '450px'}" header="Pagar Cotizacion" :modal="true" class="p-fluid">
        <div class="p-field mb-2">
          <label class="mb-2" for="paymentMethod">Tipo de Pago</label>
          <InputText id="paymentMethod" v-model.trim="order.paymentMethod" required="true" autofocus :class="{'p-invalid': submitted && !order.contactName}" />
          <small class="p-error" v-if="submitted && !order.paymentMethod">Tipo de Pago es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="billingNumber">Numero de Facturación</label>
          <InputText id="billingNumber" v-model.trim="order.billingNumber" autofocus :class="{'p-invalid': submitted && !order.brandName}" />
        </div>
        <template #footer>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-raised p-button-danger" @click="hideDialog"/>
          <Button label="Guardar" icon="pi pi-check" class="p-button-raised p-button-success" @click="saveOrder" />
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
// eslint-disable-next-line no-unused-vars
import { ref, onMounted, watchEffect } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import OrderService from '../service/OrderService'
import ClientService from '../service/ClientService'
import ProductService from '../service/ProductService'

export default {
  name: 'Orders',
  props: {
    title: String
  },
  setup () {
    onMounted(() => {
      orderService.value.getOrders().then(data => { orders.value = data })
      productService.value.getProducts().then(data => { productsOptions.value = data })
      clientService.value.getClients().then(data => { clients.value = data.reverse() })
    })

    const dt = ref()
    const orders = ref()
    const clients = ref()
    const order = ref({})
    const client = ref({})
    const toast = useToast()
    const selectedOrders = ref()
    const submitted = ref(false)
    const submittedClient = ref(false)
    const expandedRows = ref([])
    const selectedClient = ref()
    const filteredClients = ref()
    const productsOptions = ref()
    const orderDialog = ref(false)
    const clientDialog = ref(false)
    const payOrderDialog = ref(false)
    const deleteOrderDialog = ref(false)
    const deleteOrdersDialog = ref(false)
    const orderService = ref(new OrderService())
    const clientService = ref(new ClientService())
    const productService = ref(new ProductService())

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
    const openNewClient = () => {
      client.value = {}
      submittedClient.value = false
      clientDialog.value = true
    }
    const hideClientDialog = () => {
      clientDialog.value = false
      submittedClient.value = false
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

    const saveClient = () => {
      submittedClient.value = true

      if (client.value.contactName.trim()) {
        client.value.id = createId()
        client.value.brandName = client.value.brandName.value ? client.value.brandName.value : client.value.brandName
        clients.value.push(client.value)
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Cliente Creado', life: 3000 })

        clientDialog.value = false
        client.value = {}
      }
    }

    const searchClient = (event) => {
      setTimeout(() => {
        if (!event.query.trim().length) {
          filteredClients.value = [...clients.value]
        } else {
          filteredClients.value = clients.value.filter((cli) => {
            return cli.contactName.toLowerCase().startsWith(event.query.toLowerCase())
          })
        }
      }, 250)
    }

    watchEffect(() => {
      if (order.value) {
        console.log(order.value)
      }
    })

    // watchEffect(() => {
    //   console.log(clientDialog.value)
    // })

    const editOrder = (ord) => {
      order.value = { ...ord }
      orderDialog.value = true
    }
    const payOrder = (ord) => {
      order.value = { ...ord }
      payOrderDialog.value = true
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
      order,
      orders,
      client,
      openNew,
      clients,
      filters,
      payOrder,
      createId,
      saveOrder,
      editOrder,
      expandAll,
      submitted,
      exportCSV,
      saveClient,
      hideDialog,
      orderDialog,
      collapseAll,
      deleteOrder,
      onRowExpand,
      searchClient,
      expandedRows,
      clientDialog,
      openNewClient,
      findIndexById,
      onRowCollapse,
      selectedOrders,
      selectedClient,
      payOrderDialog,
      formatCurrency,
      productsOptions,
      submittedClient,
      filteredClients,
      hideClientDialog,
      deleteOrderDialog,
      deleteOrdersDialog,
      confirmDeleteOrder,
      deleteSelectedOrders,
      confirmDeleteSelected
    }
  }
}
</script>

<style lang="scss" scoped>
  .orders {
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

  .p-multiselect {
    width: 100%;
}

.quantity-option {
  height: 100%;
  width: 20px;
}

::v-deep(.multiselect-custom) {
    .p-multiselect-label:not(.p-placeholder) {
        padding-top: .25rem;
        padding-bottom: .25rem;
    }

    .product-item-value {
        padding: .25rem .5rem;
        border-radius: 3px;
        display: inline-flex;
        margin-right: .5rem;
        background-color: var(--primary-color);
        color: var(--primary-color-text);

        img.flag {
            width: 17px;
        }
    }
}

@media screen and (max-width: 640px) {
    .p-multiselect {
        width: 100%;
    }
}
</style>
