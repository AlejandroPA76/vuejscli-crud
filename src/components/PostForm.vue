<!-- PostForm.vue -->
<template>
  <form @submit.prevent="create">
    <label for="name">Nombre:</label>
    <input type="text" id="name" v-model="formData.nombres" required>

    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" v-model="formData.apellidos" required>

    <button @click="submit">Agregar</button>
  </form>
   <div class="container">
   <div class="card">
      <div class="card-header">
        Usuarios
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in listClientes" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.nombres}}</td>
              <td>{{item.apellidos}}</td>
              <td>
                 <a class="btn btn-primary" href="" >ver</a>
                 <a class="btn btn-warning" href="" >editar</a>
                 <a class="btn btn-danger" href="" >eliminar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     
   </div>
     </div>
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
  //created es un metodo que indica que cuando se cree un componente se ejecute determinado metodo
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
