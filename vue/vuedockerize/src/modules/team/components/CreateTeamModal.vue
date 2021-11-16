<template>
    <Modal 
        v-if="isOpen"
        @on:close="closeModal"
        title="New Team"
        :show="false"
        :customClass="'modal-container--h-auto'"
     >
     <div class="form">
        <form @submit.prevent="onSubmit">
            <input 
                type="text"
                v-model="teamForm.name"
                placeholder="Name Team here..."
            >
            <button type="submit" :disabled="teamForm.name== ''">Create Team</button>
        </form>
    </div>
    </Modal>
    <button class="fixed" @click="openModal">
        <div>
            <font-awesome-icon icon="plus" />
        </div>
    </button>
</template>
<script>
import { defineAsyncComponent, ref } from 'vue'
import useTeam from '../composables/useTeam'
export default {
    components:
    {
        Modal: defineAsyncComponent( () => import('@/components/Modal.vue'))
    },
    emits: ['reload'],
    setup(props, context) {
        const { 
            createTeam } = useTeam()

        const teamForm = ref({
            name: ''
        })
        
        const isOpen = ref(false)

        const closeModal = () => {
            return   isOpen.value = false
        }
        const openModal = () =>
        {
            return isOpen.value = true
        }

        return {
            isOpen,

            openModal,
            closeModal,

            teamForm,         

            onSubmit: async()=> {
                const { ok } = await createTeam(teamForm.value)

                if( ok )
                {
                    teamForm.value.name = ''
                    closeModal()
                    context.emit('reload')
                }
            } 
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../css/modal.scss';
</style>