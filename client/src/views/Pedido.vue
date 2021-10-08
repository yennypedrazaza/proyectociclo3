<template>
  <div class='container'>
    <h3>Listado de pedidos</h3>

      <b-alert :show="dismissCountDown" 
      dismissible 
      :variant="mensaje.color" 
      @dismissed="dismissCountDown=0" 
      @dismiss-count-down="countDownChanged" > 
      {{mensaje.texto}}
      </b-alert>


        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Mesa</th>
              <th scope="col">Tamaño</th>
              <th scope="col">Chantilly</th>
              <th scope="col">Base</th>
              <th scope="col">Cobertura</th>
              <th scope="col">Topping</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in pedidos" :key="index">
              <th scope="row">{{item._id}}</th>
              <td>{{item.nombre}}</td>
              <td>{{item.mesa}}</td>
              <td>{{item.tamano}}</td>
              <td>{{item.chantilly}}</td>
              <td>{{item.base}}</td>
              <td>{{item.cobertura}}</td>
              <td>{{item.topping}}</td>
              <td>{{item.fecha}}</td>
              <td>{{item.estado}}</td>
              <td>{{item.acciones}}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
</template>

<script>
export default {
  data() {
    return {

      pedidos: [],
      
      mensaje: {color: 'success', texto: ''}, 
      dismissSecs: 5, 
      dismissCountDown: 0

    };
  },

  created() {
    this.listarPedidos();
  },

  methods: {
    
    listarPedidos(){

      this.axios.get('/pedido')
      .then(res=>{

        console.log(res.data);
        this.pedidos=res.data; 

      })
      .catch((e)=>{
        console.log(e.response);

      })

    },

    countDownChanged(dismissCountDown) { 
      this.dismissCountDown = dismissCountDown 
      }, 
      
    showAlert() { 
      this.dismissCountDown = this.dismissSecs 
      }

  }
  
}
</script>