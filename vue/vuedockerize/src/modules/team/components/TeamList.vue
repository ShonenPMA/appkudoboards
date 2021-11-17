<template>
    <div class="team-list-container">
        <div class="team-search">
            <input
                type="text"
                placeholder="Search team"
                v-model="term"
            />
        </div>
        <div class="team-scrollarea">
                <Item
                    v-for="team in teams"
                    :key="team.id"
                    :team="team"
                />
        </div>
    </div>
</template>
<script>
import { defineAsyncComponent, ref, computed } from 'vue'
import useTeam from '../composables/useTeam';
export default {
    components: {
        Item: defineAsyncComponent( () => import('./Team.vue'))
    },
    setup() {
        const { teamsByTerm } = useTeam()
        const term = ref('')
        
        return {
            term,

            teams: computed(() => teamsByTerm(term.value)) 
        }
    }   
}
</script>
<style lang="scss" scoped>
.team
{
    &-list-container
    {
        border-right: 1px solid #2c3e50;
        height: calc(100% - 4rem);
        padding: 2rem 1rem;

        @media(max-width: 767px)
        {
            padding: 1rem 0.5rem;
        }
    }
    &-search{
        width: 100%;

        input{
            box-sizing: content-box;
            width: 100%;
            border: none;
            border-bottom: 2px solid var(--green);
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