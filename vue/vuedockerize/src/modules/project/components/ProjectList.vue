<template>
    <div class="project-list-container">
        <div class="project-search">
            <input
                type="text"
                placeholder="Search project"
                v-model="term"
            />
        </div>
        <div class="project-scrollarea">
                <Item
                    v-for="project in projects"
                    :key="project.id"
                    :project="project"
                />
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent, ref, computed } from 'vue'
import useProject from '../composables/useProject';
export default {
    components: {
        Item: defineAsyncComponent( () => import('../components/Project.vue'))
    },
    setup() {
        const { projectsByTerm } = useProject()
        const term = ref('')
        
        return {
            term,

            projects: computed(() => projectsByTerm(term.value)) 
        }
    }   
}
</script>
<style lang="scss" scoped>
.project
{
    &-list-container
    {
        border-right: 1px solid #2c3e50;
        height: calc(100% - 4rem);
        padding: 2rem 1rem;
    }
    &-search{
        width: 100%;

        input{
            box-sizing: content-box;
            width: 100%;
            border: none;
            border-bottom: 2px solid var(--indigo);
            &:focus{
                outline: none;
            }
        }
    }
    &-scrollarea
    {
        height: calc(100% - 1rem);
        overflow-y: auto;
        overflow-x: hidden;
        padding-top: 1rem;
    }
}



</style>