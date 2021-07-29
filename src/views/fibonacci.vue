<template>
    <div id="test">
        <div class="container">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">#</span>
                </div>
                <input type="number" class="form-control" v-model="number" placeholder="Digite el numero limite para la secuencia"/>
                <button class="btn btn-primary" v-on:click="fibonacciSequence">Fibonacci</button>
            </div>

                <div>{{ fibonacci }}</div> 
        </div>
        
    </div>

</template>
<script>
    export default {
        el: "#test",
        data () {
            return {
            number: null,
            fibonacci: []
            }
        
  },
  methods: {
    fibonacciSequence: function() {
      var i;
      var fib = [0,1];

      for (i = 2; i < this.number; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    
      }
   
      this.fibonacci = fib;
    }
  }


    }
</script>




