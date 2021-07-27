<template>
  <div>
    <p class="services">
      Servicios
    </p>
    <div>
      <div class="card">
        <Toolbar class="p-mb-4">
          <template #left>
            <Button label="Nuevo" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
            <Button label="Eliminar" icon="pi pi-trash" class="p-button-danger p-ml-2" @click="confirmDeleteSelected" :disabled="!selectedServices || !selectedServices.length" />
          </template>

          <template #right>
            <Button label="Exportar" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
          </template>
        </Toolbar>

<!-- Services Table -->
        <DataTable ref="dt" :value="services" v-model:selection="selectedServices" dataKey="id"
          :paginator="true" :rows="5" :filters="filters"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} servicios" responsiveLayout="scroll">
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h5 class="p-mb-2 p-m-md-0 p-as-md-center">Administrador de Servicios</h5>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Buscar..." />
              </span>
            </div>
          </template>

          <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
          <Column field="name" header="Nombre" :sortable="true" style="max-width:8rem"></Column>
          <Column field="price" header="Precio" :sortable="true" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" style="max-width:5rem">
            <template #body="slotProps">
              {{formatCurrency(slotProps.data.price)}}
            </template>
          </Column>
          <Column field="description" header="Descripción" :sortable="true" style="max-width:15rem"></Column>
          <Column :exportable="false">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editService(slotProps.data)" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteService(slotProps.data)" />
            </template>
          </Column>
        </DataTable>
      </div>

<!-- New&Edit Service Modal -->
      <Dialog v-model:visible="serviceDialog" :style="{width: '450px'}" header="Nuevo Servicio" :modal="true" class="p-fluid">
        <div class="p-field mb-2">
          <label class="mb-2" for="name">Nombre</label>
          <InputText id="name" v-model.trim="service.name" required="true" autofocus :class="{'p-invalid': submitted && !service.name}" />
          <small class="p-error" v-if="submitted && !service.name">Nombre es requerido.</small>
        </div>
        <div class="p-field mb-2 p-col">
          <label class="mb-2" for="price">Precio</label>
          <InputNumber id="price" v-model="service.price" required="true" :class="{'p-invalid': submitted && !service.price}" mode="currency" currency="CLP" currencyDisplay="symbol" locale="es-CL" />
          <small class="p-error" v-if="submitted && !service.price">Precio es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="description">Descripción</label>
          <Textarea id="description" v-model="service.description" rows="3" cols="20" />
        </div>
        <template class="p-text-center" #footer>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-raised p-button-danger" @click="hideDialog"/>
          <Button label="Guardar" icon="pi pi-check" class="p-button-raised p-button-success" @click="saveService" />
        </template>
      </Dialog>

<!-- Delete Service Modal -->
      <Dialog v-model:visible="deleteServiceDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
          <span v-if="service">¿Estás seguro que quieres eliminar <b>{{service.name}}</b>?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteServiceDialog = false"/>
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteService" />
        </template>
      </Dialog>

<!-- Delete Services Modal -->
      <Dialog v-model:visible="deleteServicesDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
          <span v-if="client">¿Estás seguro que quieres eliminar los servicios seleccionados?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteServicesDialog = false"/>
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedServices" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import ServiceService from '../service/ServiceService'

export default {
  name: 'Services',
  props: {
    title: String
  },
  setup () {
    onMounted(() => {
      serviceService.value.getServices().then(data => { services.value = data })
    })

    const toast = useToast()
    const dt = ref()
    const services = ref()
    const serviceDialog = ref(false)
    const deleteServiceDialog = ref(false)
    const deleteServicesDialog = ref(false)
    const service = ref({})
    const serviceService = ref(new ServiceService())
    const selectedServices = ref()
    const submitted = ref(false)
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })

    const formatCurrency = (value) => {
      if (value) { return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
    }
    const openNew = () => {
      service.value = {}
      submitted.value = false
      serviceDialog.value = true
    }
    const hideDialog = () => {
      serviceDialog.value = false
      submitted.value = false
    }
    const saveService = () => {
      submitted.value = true

      if (service.value.name.trim()) {
        if (service.value.id) {
          services.value[findIndexById(service.value.id)] = service.value
          toast.add({ severity: 'success', summary: 'Successful', detail: 'Servicio Actualizado', life: 3000 })
        } else {
          service.value.id = createId()
          service.value.price = service.value.price.value ? service.value.price.value : service.value.price
          services.value.push(service.value)
          toast.add({ severity: 'success', summary: 'Successful', detail: 'Servicio Creado', life: 3000 })
        }

        serviceDialog.value = false
        service.value = {}
      }
    }
    const editService = (serv) => {
      service.value = { ...serv }
      serviceDialog.value = true
    }
    const confirmDeleteService = (serv) => {
      service.value = serv
      deleteServiceDialog.value = true
    }
    const deleteService = () => {
      services.value = services.value.filter(val => val.id !== service.value.id)
      deleteServiceDialog.value = false
      service.value = {}
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Servicio Eliminado', life: 3000 })
    }
    const findIndexById = (id) => {
      let index = -1
      for (let i = 0; i < services.value.length; i++) {
        if (services.value[i].id === id) {
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
      deleteServicesDialog.value = true
    }
    const deleteSelectedServices = () => {
      services.value = services.value.filter(val => !selectedServices.value.includes(val))
      deleteServicesDialog.value = false
      selectedServices.value = null
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Servicio Eliminado', life: 3000 })
    }

    return {
      dt,
      services,
      serviceDialog,
      deleteServiceDialog,
      deleteServicesDialog,
      service,
      selectedServices,
      filters,
      submitted,
      formatCurrency,
      openNew,
      hideDialog,
      saveService,
      editService,
      confirmDeleteService,
      deleteService,
      findIndexById,
      createId,
      exportCSV,
      confirmDeleteSelected,
      deleteSelectedServices
    }
  }
}
</script>

<style lang="scss" scoped>
  .services {
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
</style>
