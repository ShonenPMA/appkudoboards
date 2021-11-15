<template>
    <div class="kudoboard-list-container">
        <div class="kudoboard-search">
            <input
                type="text"
                placeholder="Search kudoboard"
                v-model="term"
            />
        </div>
        <div class="kudoboard-scrollarea">
                <Kudoboard
                    v-for="kudoboard in kudoboards"
                    :key="kudoboard.id"
                    :kudoboard="kudoboard"
                />
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent, ref, computed } from 'vue'
import useKudoboard from '../composables/useKudoboard';
export default {
    components: {
        Kudoboard: defineAsyncComponent( () => import('../components/Kudoboard.vue'))
    },
    setup() {
        const { kudoboardsByTerm } = useKudoboard()
        const term = ref('')
        
        return {
            term,

            kudoboards: computed(() => kudoboardsByTerm(term.value)) 
        }
    }   
}
</script>
<style lang="scss" scoped>
.kudoboard
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
            border-bottom: 2px solid var(--orange);
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