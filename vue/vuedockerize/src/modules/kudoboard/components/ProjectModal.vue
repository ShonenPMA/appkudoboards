<template>
    <Modal 
        v-if="isOpen"
        @on:close="closeModal"
        title="Send Project Kudo"
     >
     <div class="form">
        <form @submit.prevent="onSubmit">
            <select v-model="kudoForm.memberSelected" @change="selectMember">
                <option value="">Select a member</option>
                <option v-for="member in members" :id="member.id" :value="member">
                    {{ member.name }} ({{ member.email }})
                </option>
            </select>
            <textarea v-model="kudoForm.description" :placeholder="placeholder"></textarea>
            <button type="submit" :disabled="!kudoForm.memberSelected">Send Kudo</button>
        </form>
    </div>
    </Modal>
    <button @click="openModal">
        <div>
            <span>Send Project Kudo</span>
            <font-awesome-icon icon="folder" />
        </div>
    </button>
</template>
<script>
import checkBirthday from '../helpers/checkBirthday';
import { defineAsyncComponent, ref } from 'vue'
import useKudoboard from '../composables/useKudoboard'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
    props:{
        projectId: {
            type: Number,
            required: true
        },
        kudoboardId: {
            type: Number,
            required: true
        }
    },
    emits: ['reload'],
    components:
    {
        Modal: defineAsyncComponent( () => import('@/components/Modal.vue'))
    },
    setup(props, context) {
        const route = useRoute()
        const store = useStore()
        const { 
            loadProjectMembers: loadMembers, 
            sendKudo,
            members } = useKudoboard()
        const placeholder = ref('Write something special for someone today...')

        const kudoForm = ref({
            kudoboardId: props.kudoboardId,
            memberSelected: '',
            description: ''
        })
        
        const isOpen = ref(false)

        const closeModal = () => {
            store.commit('kudoboard/cleanMembers')
            return   isOpen.value = false
        }
        const openModal = () =>
        {
            loadMembers(props.projectId)
            return isOpen.value = true
        }

        return {
            isOpen,

            openModal,
            closeModal,


            kudoForm,
            members,
            checkBirthday,            
            placeholder,
            selectMember: () => {
                if(kudoForm.value.memberSelected != '')
                {
                    placeholder.value = `Write something special for ${kudoForm.value.memberSelected.name} today...`
                }
            },
            onSubmit: async()=> {
                const { ok } = await sendKudo(kudoForm.value)

                if( ok )
                {
                    kudoForm.value.kudoboardId = ''
                    kudoForm.value.memberSelected = ''
                    kudoForm.value.description = ''
                    placeholder.value = 'Write something special for someone today...'
                    context.emit('reload')
                    closeModal()
                }
            } 
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../css/modal.scss';
</style>