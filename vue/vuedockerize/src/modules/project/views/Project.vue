<template>
    <div v-if="project" class="box">
        <form @submit.prevent="editProject">
            <input class="title" type="text" v-model="projectName">
        </form>
        <hr>
        <form @submit.prevent="onSubmit">
            <select v-model="newMemberForm.memberSelected">
                <option value="">Select a new member to register</option>
                <option v-for="member in generalMembers" :id="member.id" :value="member">
                    {{ member.name }} ({{ member.email }})
                </option>
            </select>
            <button type="submit" :disabled="!newMemberForm.memberSelected">Register new member</button>
        </form>
        <hr>
        <div v-if="isLoadingMembers" class="container">
            <div class="alert">
                <div>
                    Loading data...
                    <span>
                        <font-awesome-icon class="fa-spin" icon="sync" />
                    </span>
                </div>
            </div>
        </div>
        <div class="member-list" v-if="members.length > 1 && !isLoadingMembers">
            <div v-for="member in members" :key="member.id" class="member">
                <div class="member-wrapper">
                      <div class="data">
                          <div>
                                <font-awesome-icon  icon="user-tie" />
                                <span>{{ member.user.name }}</span>
                          </div>
                          <font-awesome-icon @click="removeMember(member.id)" icon="trash-alt" />
                      </div>
                    
                </div>
            </div>
        </div>
        <div v-else-if="!isLoadingMembers">
            <h2>There are not members yet. :c</h2>
        </div>
    </div>
</template>
<script>
import useProject from '../composables/useProject'
import { watch, computed, ref } from 'vue';
import {  useRouter } from 'vue-router';
import Swal from 'sweetalert2';
export default {
    props: {
        id: {
            type: String,
            required:true
        }
    },
    setup(props) {
        const router = useRouter()

        const { 
            registerMember,
            deleteMember,
            loadMembers,
            loadGeneralMembers,
            getProjectById,
            members,
            generalMembers,
            isLoadingMembers,
            editCurrentProject,
            loadProjects,
            } = useProject(props.id)

        loadGeneralMembers()
        let project = computed(() => null )
        
        const loadProject = () => {
            loadMembers(props.id)
            project = computed( () => getProjectById(props.id))

            if(!project) router.push({ name: 'project-list' })
        }
        loadProject()

        const projectName =ref(project.value.name)

        const newMemberForm = ref({
            memberSelected: ''
        })

        
        
        watch( 
            () => props.id,
            ( /*value, prevValue*/) => loadProject()
        )
        return {
            project,
            members,
            generalMembers,
            isLoadingMembers,
            newMemberForm,
            projectName,
            

            onSubmit: async() => {
                const { ok } = await registerMember(newMemberForm.value, parseInt(props.id))

                if(ok)
                {
                    newMemberForm.value.memberSelected = ''
                }
            },
            removeMember: async(id) => {
                const { isConfirmed } = await Swal.fire({
                    title: '¿Are you sure?',
                    text: 'It cannot be recovered ',
                    showDenyButton: true,
                    confirmButtonText: "Yes, I'm sure"
                })
            
                if(isConfirmed)
                {
                    new Swal({
                        title: 'Wait please...',
                        allowOutsideClick: false
                    })
                    Swal.showLoading()

                    await deleteMember(id)
                    Swal.fire('Deleted', 'Member removed', 'success')
                }
            },
            editProject: async() => {
                const { ok} = await editCurrentProject(projectName.value, props.id)

                if(ok) loadProjects()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.box
{
    padding: 2rem;

    .title{
        text-align: left;
        letter-spacing: 0.5rem;
        margin-bottom: 2rem;
        border: none;
        font-size: 2rem;
        border-bottom: 2px solid var(--indigo);
        &:focus
        {
            outline: none;
        }
    }

    form
    {
        display: flex;
        justify-content: space-between;

        select
        {
            padding: 0.5rem 1rem;
            outline: none;
            border-color: var(--indigo);
        }
        button
        {
            background-color: var(--green);
            border: none;
            color: var(--white);
            &:disabled
            {
                color: gray;
                cursor: not-allowed;
            }
        }
        
    }

    .member
    {
        padding: 0.5rem 1rem;
        cursor: default;
        .data
        {
             display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            .fa-trash-alt
            {
                cursor: pointer;
                color: var(--red)
            }
        }
        span
        {
            margin-left: 1rem;
        }
        &:not(:last-child)
        {
            border-bottom: 2px solid var(--indigo);
        }
    }

    .alert
	{
		background-color: var(--orange);
		border-radius: 6px;
		padding: 1rem 2rem;
		text-align: center;

		span
		{
			display:block;
			margin-top: 1rem;
		}
	}
}
</style>