<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title class="text-h5">
          Editar tarefa
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text
          class="mt-2"
        >Informe o novo título.</v-card-text> 
        <v-text-field
          class="px-3"
          label="Título"
          placeholder="Informe um novo título..."
          outlined
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="gray darken-1"
            text
            @click="$emit('fechaModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = true"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'ModalEditar',
    data () {
      return {
        dialog: true,
      }
    },
  }
</script>

<style>

</style>