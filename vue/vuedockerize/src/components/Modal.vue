<template>
    <div 
        class="modal-background fade-in"
        @click.self="$emit('on:close')">
        <div class="modal-container" :class="customClass">
            <h2>{{ title }} <font-awesome-icon v-if="show" icon="hand-holding-heart" /></h2>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type:String,
            default: 'Custom Modal'
        },
        show: {
          type: Boolean,
          default: true
        },
        customClass:
        {
          type:String,
          default: ''
        }
    },
    emits: ['on:close']
}
</script>
<style lang="scss" scoped>
.modal-background {
    position: fixed;
    top: 108px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 108px);

    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-container {
    width: 450px;
    max-width: 90%;
    height: 450px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 1rem;

    @media (max-width: 767px)
    {
      max-width: 70%;
    }
    
    h2
    {
       font-size: 24px;
       text-align: center;
       @media (max-width: 767px)
       {
         font-size: 18px;
       }
    }
    &--h-auto
    {
      height: auto;
    }
}



.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>