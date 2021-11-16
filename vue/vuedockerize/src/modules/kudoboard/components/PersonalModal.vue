<template>
    <Modal 
        v-if="isOpen"
        @on:close="closeModal"
        title="Send Personal Kudo"
     >
     <div class="form">
        <form @submit.prevent="onSubmit">
            <select v-model="kudoForm.memberSelected" @change="selectMember">
                <option value="">Select a member</option>
                <option v-for="member in members" :id="member.id" :value="member">
                    {{ member.name }} ({{ member.email }})
                </option>
            </select>
            <select v-if="kudoForm.memberSelected" v-model="kudoForm.kudoboardId" name="" id="">
                <option value="" >Select available type of personal kudos for {{ kudoForm.memberSelected.name }}</option>
                <option v-if="checkBirthday(kudoForm.memberSelected.birth_date)" :value="kudoForm.memberSelected.personal_kudoboards[1].id">Birthday Kudo</option>
                <option :value="kudoForm.memberSelected.personal_kudoboards[0].id">Personal Kudo</option>
            </select>
            <textarea v-model="kudoForm.description" :placeholder="placeholder"></textarea>
            <button type="submit" :disabled="!kudoForm.memberSelected">Send Kudo</button>
        </form>
    </div>
    </Modal>
    <button @click="openModal">
        <div>
            <span>Send Personal Kudo</span>
            <font-awesome-icon icon="user-plus" />
        </div>
    </button>
</template>
<script>
import checkBirthday from '../helpers/checkBirthday';
import { defineAsyncComponent, ref } from 'vue'
import useKudoboard from '../composables/useKudoboard'
import { useStore } from 'vuex';
export default {
    components:
    {
        Modal: defineAsyncComponent( () => import('@/components/Modal.vue'))
    },
    setup() {
        const store = useStore()
        
        const { 
            loadMembers, 
            sendKudo,
            members } = useKudoboard()
        

        const placeholder = ref('Write something special for someone today...')


        const kudoForm = ref({
            kudoboardId: '',
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
            loadMembers()
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
                kudoForm.value.kudoboardId = ''
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