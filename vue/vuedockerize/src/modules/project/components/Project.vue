<template>
<!-- @click="$router.push({ name: 'project-item', params: { id: project.id}})" -->
    <div 
        
        class="project">
        <h2><font-awesome-icon icon="folder" /> {{ project.name }}</h2>
    </div>
</template>
<script>
 import {computed} from 'vue';
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.project{
    cursor: pointer;
    max-width: 200px;
    padding: 0;
    border-radius: 0px;
    font-size: 0.7rem;
    text-align: left;
    letter-spacing: 0.3rem;
    padding-left: 1rem;
    color: var(--black);
    

    &:not(:last-child){
        margin-bottom: 1rem;
    }
    h2{
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>