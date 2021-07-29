<template>
   
    <div id="cuadratica">
         <div class="container">
            <div class="row">
                <div class="col-4">
                    <input class="form-control" type="number" v-model="a"/>
                </div>
                <div class="col-4">
                    <input class="form-control" type="number" v-model="b"/>
                </div>
                <div class="col-4">
                    <input class="form-control" type="number" v-model="c"/>
                </div>
            </div>

            <button class="btn btn-primary" v-on:click="cuadratica">Calcular</button>
            <div class="card" >
            <div class="card-body">
            <h5 class="card-title">Resultados</h5>
            <div>Solución positiva: <b>{{ result }}</b></div>
            <div>Solución negativa: <b>{{ resultN }}</b></div>
            </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        el: "#cuadratica",
        data () {
            return {
            a: 2,
            b: 7,
            c: 2,
            result: null,
            resultN: null,
            }
        
  },
  methods: {
    cuadratica: function() {
      /*
      var a=2;
      var b=7;
      var c=2;
      */
      var a=this.a;
      var b=this.b;
      var c=this.c;
      var result;
      var resultN;

      result = ((-b + Math.sqrt( Math.pow(b, 2) - (4*(a*c)))) / (2*a));
      resultN = ((-b - Math.sqrt( Math.pow(b, 2) - (4*(a*c)))) / (2*a));
   
      this.result = result;
      this.resultN = resultN;
    }
  }


    }
</script>




