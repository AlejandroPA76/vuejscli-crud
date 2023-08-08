<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Agregar nuevo Usuarios
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Nombre:</label>
            <div class="col-sm-10">
              <input type="text" v-model="usuario.nombres" class="form-control"  id="nombre" placeholder="nombre">
              <small class="form-text text-muted">Escribe el nombre del usuario</small>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Apellido:</label>
            <div class="col-sm-10">
              <input type="text" v-model="usuario.apellidos" class="form-control" id="apellidos" placeholder="apellido">
              <small class="form-text text-muted">Escribe el apellido del usuario</small>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10 offset-sm-2">
              <button type="submit" class="btn btn-success">Agregar</button>
              <button type="button" class="btn btn-warning">Cancelar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      usuario: {
      //las variables donde se guarde la informacion debe ser igual al de la api
        nombres: '',
        apellidos: '',
      },
    };
  },
  
  methods: {
    //metodo crear
    agregarRegistro() {
      // Realizar la solicitud POST utilizando Axios
      axios.post('http://127.0.0.1:8000/api/clientes', this.usuario)
        .then(response => {
          console.log('Respuesta de la API:', response.data);
          //vacio el arreglo de usuario 
          this.usuario.nombres="";
          this.usuario.apellidos="";
          //con window location href redirijo a la ruta que quiera
          //me quede en el 53.39 de develoteca
          window.location.href='lista-usuarios'
          
        })
        .catch(error => {
          console.error('Error al hacer POST:', error);
          // Puedes manejar errores aquí
        });
    },
    
    }
};
</script>