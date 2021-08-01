<template>
  <div>
    <p class="clients">
      Clientes
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
              :disabled="!selectedClients || !selectedClients.length"
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

<!-- Clients Table -->
        <DataTable
          ref="dt"
          dataKey="id"
          :rows="5"
          :value="clients"
          :paginator="true"
          :filters="filters"
          :rowsPerPageOptions="[5,10,25]"
          v-model:selection="selectedClients"
          responsiveLayout="scroll"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} clientes">
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h4 class="p-mb-2 p-m-md-0 p-as-md-center">Administrador de Clientes</h4>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Buscar..." />
              </span>
            </div>
          </template>

          <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
          <Column field="contactName" header="Contacto" :sortable="true" style="max-width:8rem"></Column>
          <Column field="brandName" header="Empresa" :sortable="true" style="max-width:8rem">>
            <template #body="slotProps">
              {{slotProps.data.brandName}}
            </template>
          </Column>
          <Column field="businessName" header="Razon Social" :sortable="true" style="max-width:8rem">>
            <template #body="slotProps">
              {{slotProps.data.businessName}}
            </template>
          </Column>
          <Column field="email" header="Email" :sortable="true" style="min-width:10rem">>
            <template #body="slotProps">
              {{slotProps.data.email}}
            </template>
          </Column>
          <Column field="address" header="Dirección" :sortable="true" style="max-width:8rem">>
            <template #body="slotProps">
              {{slotProps.data.address}}
            </template>
          </Column>
          <Column field="city" header="Ciudad" :sortable="true" style="max-width:8rem">>
            <template #body="slotProps">
              {{slotProps.data.city}}
            </template>
          </Column>
          <Column field="phone" header="Telefono" :sortable="true" style="min-width:5rem">>
            <template #body="slotProps">
              {{slotProps.data.phone}}
            </template>
          </Column>
          <Column field="rut" header="RUT" :sortable="true" style="max-width:5rem">>
            <template #body="slotProps">
              {{slotProps.data.rut}}
            </template>
          </Column>
          <Column :exportable="false">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editClient(slotProps.data)" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteClient(slotProps.data)" />
            </template>
          </Column>
        </DataTable>
      </div>

<!-- New&Edit Client Modal -->
      <Dialog v-model:visible="clientDialog" :style="{width: '450px'}" header="Nuevo Cliente" :modal="true" class="p-fluid">
        <div class="p-field mb-2">
          <label class="mb-2" for="contactName">Contacto</label>
          <InputText id="contactName" v-model.trim="client.contactName" required="true" autofocus :class="{'p-invalid': submitted && !client.contactName}" />
          <small class="p-error" v-if="submitted && !client.contactName">Nombre de contacto es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="brandName">Empresa</label>
          <InputText id="brandName" v-model.trim="client.brandName" autofocus :class="{'p-invalid': submitted && !client.brandName}" />
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="businessName">Razón Social</label>
          <InputText id="businessName" v-model.trim="client.businessName" autofocus :class="{'p-invalid': submitted && !client.businessName}" />
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="email">Email</label>
          <InputText id="email" v-model="client.email" required="true" autofocus :class="{'p-invalid': submitted && !client.email}" />
          <small class="p-error" v-if="submitted && !client.email">Email es requerido.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="address">Dirección</label>
          <Textarea id="address" v-model.trim="client.address" rows="2" cols="20" required="true" autofocus :class="{'p-invalid': submitted && !client.address}" />
          <small class="p-error" v-if="submitted && !client.address">La dirección es requerida.</small>
        </div>
        <div class="p-field mb-2">
          <label class="mb-2" for="city">Ciudad</label>
          <InputText id="city" v-model.trim="client.city" required="true" autofocus :class="{'p-invalid': submitted && !client.city}" />
          <small class="p-error" v-if="submitted && !client.city">La ciudad es requerida.</small>
        </div>
        <div class="p-field mb-2 p-col">
          <label class="mb-2" for="phone">Teléfono</label>
          <InputText id="phone" v-model.trim="client.phone" required="true" autofocus :class="{'p-invalid': submitted && !client.phone}" />
          <small class="p-error" v-if="submitted && !client.phone">Teléfono es requerido.</small>
        </div>
        <div class="p-field mb-2 p-col">
          <label class="mb-2" for="rut">Rut</label>
          <InputText id="rut" v-model.trim="client.rut" required="true" autofocus :class="{'p-invalid': submitted && !client.rut}" />
          <small class="p-error" v-if="submitted && !client.rut">Rut es requerido.</small>
        </div>

        <template class="p-text-center" #footer>
          <Button label="Cancelar" icon="pi pi-times" class="p-button-raised p-button-danger" @click="hideDialog"/>
          <Button label="Guardar" icon="pi pi-check" class="p-button-raised p-button-success" @click="saveClient" />
        </template>
      </Dialog>

<!-- Delete Client Modal -->
      <Dialog v-model:visible="deleteClientDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
          <span v-if="client">¿Estás seguro que quieres eliminar <b>{{client.contactName}}</b>?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteClientDialog = false"/>
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteClient" />
        </template>
      </Dialog>

<!-- Delete Clients Modal -->
      <Dialog v-model:visible="deleteClientsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
          <span v-if="client">¿Estás seguro que quieres eliminar los clientes seleccionados?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteClientsDialog = false"/>
          <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedClients" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue'
import { FilterMatchMode } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import ClientService from '../service/ClientService'

export default {
  name: 'Clients',
  props: {
    title: String
  },
  setup () {
    onMounted(() => {
      clientService.value.getClients().then(data => { clients.value = data })
    })

    const dt = ref()
    const clients = ref()
    const client = ref({})
    const toast = useToast()
    const submitted = ref(false)
    const selectedClients = ref()
    const clientDialog = ref(false)
    const deleteClientDialog = ref(false)
    const deleteClientsDialog = ref(false)
    const clientService = ref(new ClientService())
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    })

    const openNew = () => {
      client.value = {}
      console.log(client.value)
      submitted.value = false
      clientDialog.value = true
    }
    const hideDialog = () => {
      clientDialog.value = false
      submitted.value = false
    }
    const saveClient = () => {
      submitted.value = true

      if (client.value.contactName.trim()) {
        if (client.value.id) {
          clients.value[findIndexById(client.value.id)] = client.value
          toast.add({ severity: 'success', summary: 'Successful', detail: 'Cliente Actualizado', life: 3000 })
        } else {
          client.value.contactName = client.value.contactName.value ? client.value.contactName.value : client.value.contactName
          client.value.brandName = client.value.brandName.value ? client.value.brandName.value : client.value.brandName
          client.value.businessName = client.value.businessName.value ? client.value.businessName.value : client.value.businessName
          client.value.email = client.value.email.value ? client.value.email.value : client.value.email
          client.value.address = client.value.address.value ? client.value.address.value : client.value.address
          client.value.city = client.value.city.value ? client.value.city.value : client.value.city
          client.value.phone = client.value.phone.value ? client.value.phone.value : client.value.phone
          client.value.rut = client.value.rut.value ? client.value.rut.value : client.value.rut
          // clients.value.push(client.value)
          clientService.value.createClient(client.value).then(data => { console.log(data) })
          console.log('Cliente Creado')
          clientService.value.getClients().then(data => { clients.value = data })
        }

        clientDialog.value = false
        client.value = {}
      }
    }
    const editClient = (cli) => {
      client.value = { ...cli }
      clientDialog.value = true
    }
    const confirmDeleteClient = (cli) => {
      client.value = cli
      deleteClientDialog.value = true
    }
    const deleteClient = () => {
      clients.value = clients.value.filter(val => val.id !== client.value.id)
      deleteClientDialog.value = false
      client.value = {}
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Cliente Eliminado', life: 3000 })
    }
    const findIndexById = (id) => {
      let index = -1
      for (let i = 0; i < clients.value.length; i++) {
        if (clients.value[i].id === id) {
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
      deleteClientsDialog.value = true
    }
    const deleteSelectedClients = () => {
      clients.value = clients.value.filter(val => !selectedClients.value.includes(val))
      deleteClientsDialog.value = false
      selectedClients.value = null
      toast.add({ severity: 'success', summary: 'Successful', detail: 'Clientes Eliminados', life: 3000 })
    }

    watchEffect(() => {
      if (clients.value) {
        console.log(clients.value)
      }
    })

    return {
      dt,
      client,
      clients,
      filters,
      openNew,
      createId,
      submitted,
      exportCSV,
      hideDialog,
      saveClient,
      editClient,
      clientDialog,
      deleteClient,
      findIndexById,
      selectedClients,
      deleteClientDialog,
      deleteClientsDialog,
      confirmDeleteClient,
      confirmDeleteSelected,
      deleteSelectedClients
    }
  }
}
</script>

<style lang="scss" scoped>
  .clients {
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
