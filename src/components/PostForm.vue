<!-- PostForm.vue -->
<template>
  <form @submit.prevent="create">
    <label for="name">Nombre:</label>
    <input type="text" id="name" v-model="formData.nombres" required>

    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" v-model="formData.apellidos" required>

    <button @click="submit">Enviar</button>
  </form>
   <ul>
      <!-- listar todos los datos del api-->
      <li v-for="item in listClientes" :key="item.id">
        {{item.nombres}} 
        {{item.apellidos}} 
        <button>show</button>{{}}
        <button>edit</button>{{}}
        <button>delete</button>
    </li>

    </ul>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      //recuerda sacar la lista del formData
       listClientes:[],

      formData: {
      //las variables donde se guarde la informacion debe ser igual al de la api
        nombres: '',
        apellidos: '',
      },
    };
  },
   created() {
   this.read();
  },

  methods: {
    //metodo leer
    read(){
       // Llamada GET utilizando Axios
    axios.get('http://127.0.0.1:8000/api/clientes')
      .then(response => {
        // La respuesta de la API estará en la propiedad 'data' del objeto response
        this.listClientes = response.data;
      })
      .catch(error => {
        console.error('Error al obtener la lista de clientes:', error);
        // Puedes manejar errores aquí
      });
    },
    //metodo crear
    create() {
      // Realizar la solicitud POST utilizando Axios
      axios.post('http://127.0.0.1:8000/api/clientes', this.formData)
        .then(response => {
          console.log('Respuesta de la API:', response.data);
          // Puedes manejar la respuesta de la API aquí
          //agregue this.add para que se llame al metodo get y mantener la lista actualizada
          this.read();
        })
        .catch(error => {
          console.error('Error al hacer POST:', error);
          // Puedes manejar errores aquí
        });
    },
    //metodo show
    show(){
      
        },
    }
};
</script>
