<template>
  <div class="p-sidebar-left">
      <img alt="Megaclima logo" src="../assets/logo.png">
      <Accordion>
        <AccordionTab header="Ventas">
          <Button label="Ir" />
        </AccordionTab>
        <AccordionTab header="Cotizaciones">
          <div id="irc">
            <button v-on:click="irc">Ir</button>
          </div>
        </AccordionTab>
        <AccordionTab header="Producto/Servicio">
          <Button label="Ir" />
        </AccordionTab>
        <AccordionTab header="Clientes">
          <Button label="Ir" />
        </AccordionTab>
      </Accordion>
    </div>
</template>

<style lang="scss">
img {
  max-width: 100%;
}
</style>
router.Push({ name: "yourroutename"})
