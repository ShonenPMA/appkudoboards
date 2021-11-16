<template>
    <Modal 
        v-if="isOpen"
        @on:close="closeModal"
        title="New Project"
        :show="false"
        :customClass="'modal-container--h-auto'"
     >
     <div class="form">
        <form @submit.prevent="onSubmit">
            <input 
                type="text"
                v-model="projectForm.name"
                placeholder="Name Project here..."
            >
            <button type="submit" :disabled="projectForm.name== ''">Create Project</button>
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
import useProject from '../composables/useProject'
import useKudoboard from '../../kudoboard/composables/useKudoboard';
export default {
    components:
    {
        Modal: defineAsyncComponent( () => import('@/components/Modal.vue'))
    },
    emits: ['reload'],
    setup(props, context) {
        const { 
            createProject } = useProject()
        
        const { loadKudoboards } = useKudoboard()

        const projectForm = ref({
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

            projectForm,         

            onSubmit: async()=> {
                const { ok } = await createProject(projectForm.value)

                if( ok )
                {
                    projectForm.value.name = ''
                    closeModal()
                    loadKudoboards()
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