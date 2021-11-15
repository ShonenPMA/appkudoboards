<template>
    <button 
        @click="$emit('on:click')"
        class="">
        <font-awesome-icon :icon="icon" />
    </button>
</template>
<script>

export default {
    props :{
        icon: {
            type: String,
            default: 'plus'
        }
    }
}
</script>
<style lang="scss" scoped>
button
{
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
    border: none;
    background-color: var(--blue);
    color: var(--white);
    cursor: pointer;
}
</style>