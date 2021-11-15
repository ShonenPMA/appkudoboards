<template>
    <div class="kudoboard">
        <h2>{{ shortname }}</h2>
    </div>
</template>
<script>
 import {computed} from 'vue';
export default {
    props: {
        kudoboard: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        return {
            shortname: computed( () => props.kudoboard.title.replace('Kudo Board for', '') )
        }
    }
}
</script>
<style lang="scss" scoped>
.kudoboard{
    cursor: pointer;
    background-color: var(--green);
    max-width: 200px;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.7rem;
    text-align: center;
    letter-spacing: 0.3rem;

    &:not(:last-child){
        margin-bottom: 1rem;
    }
}
</style>