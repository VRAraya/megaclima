<template>
  <div>
    <p class="services">
      Servicios
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
              :disabled="!selectedServices || !selectedServices.length"
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

<!-- Services Table -->
        <DataTable
          ref="dt"
          dataKey="id"
          :rows="5"
          :value="services"
          :paginator="true"
          :filters="filters"
          :rowsPerPageOptions="[5,10,25]"
          v-model:selection="selectedServices"
          responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} servicios"
        >
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h4 class="p-mb-2 p-m-md-0 p-as-md-center">Administrador de Servicios</h4>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Buscar..." />
              </span>
            </div>
          </template>

          <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
          <Column field="id" header="Código" :sortable="true" style="max-width:3rem">>
            <template #body="slotProps">
              {{slotProps.data.id}}
            </template>
          </Column>
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
          <span v-if="service">¿Estás seguro que quieres eliminar el servicio de <b>{{service.name}}</b>?</span>
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
          <span v-if="service">¿Estás seguro que quieres eliminar los servicios seleccionados?</span>
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

    const dt = ref()
    const services = ref([])
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

    // Agrega el formato de moneda al campo
    const formatCurrency = (value) => {
      if (value) { return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
    }
    // Abre el modal y prepara un objeto vacío para un nuevo servicio
    const openNew = () => {
      service.value = {}
      submitted.value = false
      serviceDialog.value = true
    }
    // Esconde el modal de servicio
    const hideDialog = () => {
      serviceDialog.value = false
      submitted.value = false
    }
    // Funcion para crear o editar un servicio
    const saveService = () => {
      submitted.value = true
      if (service.value.name.trim()) {
        service.value.name = service.value.name.value ? service.value.name.value : service.value.name
        service.value.price = service.value.price.value ? service.value.price.value : service.value.price
        service.value.description = service.value.description.value ? service.value.description.value : service.value.description
        try {
          serviceService.value.createService(service.value)
            .then(data => { console.log(data) })
            .finally(() => {
              serviceService.value.getServices().then(data => { services.value = data })
            })
        } catch (err) {
          console.error(err)
        }
        serviceDialog.value = false
        service.value = {}
      }
    }

    // Prepara y abre el modal de servicio para su edicion
    const editService = (serv) => {
      service.value = { ...serv }
      serviceDialog.value = true
    }
    // Prepara el modal de confirmación de eliminacion de servicio
    const confirmDeleteService = (serv) => {
      service.value = serv
      deleteServiceDialog.value = true
    }
    // Elimina el servicio
    const deleteService = () => {
      try {
        serviceService.value.deleteService(service.value.id)
          .then(data => {
            console.log(data)
          })
          .finally(() => {
            console.log('Servicio Eliminado')
            serviceService.value.getServices()
              .then(data => { services.value = data })
          })
      } catch (err) {
        console.error(err)
      }
      deleteServiceDialog.value = false
      service.value = {}
    }

    // Exporta un CSV con los servicios existentes
    const exportCSV = () => {
      dt.value.exportCSV()
    }

    // Abre el modal y pide confirmación para eliminar los servicios seleccionados
    const confirmDeleteSelected = () => {
      deleteServicesDialog.value = true
    }
    // Elimina los servicios selecionados
    const deleteSelectedServices = () => {
      try {
        selectedServices.value.forEach(serv => {
          serviceService.value.deleteService(serv.id)
            .then(data => { console.log(data) })
        })
      } catch (err) {
        console.error(err)
      }
      deleteServicesDialog.value = false
      selectedServices.value = null
      try {
        serviceService.value.getServices()
          .then(data => { services.value = data })
        console.log('Servicios Eliminados')
      } catch (err) {
        console.error(err)
      }
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
