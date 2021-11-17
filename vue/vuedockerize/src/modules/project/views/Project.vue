<template>
    <div v-if="project" class="box">
        <div class="projectForms">
            <form @submit.prevent="editProject">
                <input class="title" type="text" v-model="projectName">
            </form>
            <font-awesome-icon @click="removeProject" icon="trash-alt" />
        </div>
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
        <div class="member-list" v-if="members.length > 0 && !isLoadingMembers">
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
import useKudoboard from '../../kudoboard/composables/useKudoboard';
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
            deleteProject,
            } = useProject(props.id)
        
        const { loadKudoboards } = useKudoboard()

        loadGeneralMembers()
        let project = computed(() => null )
        let projectName = ref(null)
        
        const loadProject = () => {
            loadMembers(props.id)
            project = computed( () => getProjectById(props.id))

            if(!project) router.push({ name: 'project-list' })

            projectName.value = project.value.name
        }
        loadProject()

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

                if(ok) {
                    loadProjects()
                    loadKudoboards()
                } 
            },
            removeProject: async() => {
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

                    await deleteProject(props.id)
                    Swal.fire('Deleted', 'Project removed', 'success')
                    loadProjects()
                    loadKudoboards()
                    router.push({ name: 'project-list' })
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.box
{
    padding: 2rem;
    h2
    {
        font-size: 1rem;
        letter-spacing: 3px;
        text-align: center;
    }
    @media (max-width: 767px)
    {
        padding: 0.5rem;
    }

    .projectForms{
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 767px)
        {
            // flex-wrap: wrap;
        }

        .fa-trash-alt
        {
            cursor: pointer;
            color: var(--red);
            font-size: 2rem;
            @media (max-width: 767px)
            {
                font-size: 1.2rem;
            }
        }

        input
        {
            @media (max-width: 767px)
            {
                margin-bottom: 1rem;
                font-size: 15px;
            }
        }
    }

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
        
        @media (max-width: 767px)
        {
            flex-wrap: wrap;
        }

        select
        {
            padding: 0.5rem 1rem;
            outline: none;
            border-color: var(--indigo);

            @media (max-width:767px)
            {
                width: 100%;
                font-size: 11px;
                padding: 0.5rem 0;
            }
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

            @media (max-width: 767px)
            {
                width: 100%;
                margin-top: 0.5rem;
            }
        }
        
    }

    .member
    {
        padding: 0.5rem 1rem;
        cursor: default;

        @media (max-width:767px)
        {
            font-size: 12px;
            padding: 0.5rem;
        }
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