<template>
    <div v-if="kudoboard" class="box">
        <h1 >{{ kudoboard.title}}</h1>
        <div v-if="isLoadingKudos" class="container">
            <div class="alert">
                <div>
                    Loading data...
                    <span>
                        <font-awesome-icon class="fa-spin" icon="sync" />
                    </span>
                </div>
            </div>
        </div>
        <div class="kudo-list" v-if="kudos.length > 1 && !isLoadingKudos">
            <div v-for="kudo in kudos" :key="kudo.id" class="kudo">
                <div class="kudo-wrapper">
                    <div class="kudo-head">
                        <h3 
                            v-if="kudoboard.type == 'user' || kudoboard.type == 'birthday'"
                        >
                            <span class="sender">{{ kudo.sender.name }}</span> wants to say to you that...
                        </h3>
                        <h3 v-else>
                            <span class="sender">{{ kudo.sender.name }}</span> wants to say to <span class="receiver">{{ kudo.receiver.name }}</span> that...
                        </h3>
                    </div>
                    <div class="kudo-body"><h2>{{ kudo.description }}</h2></div>
                    <div class="kudo-foot"></div>
                </div>
            </div>
        </div>
        <div v-else-if="!isLoadingKudos">
            <h2>There are not kudos yet. :c</h2>
        </div>
        <div class="buttons">
            <PersonalModal />
            <ProjectModal v-if="kudoboard.type == 'project'" />
            <TeamModal v-if="kudoboard.type == 'team'" />

        </div>
    </div>
</template>
<script>
import useKudoboard from '../composables/useKudoboard'
import { watch, computed, defineAsyncComponent } from 'vue';
import {  useRouter } from 'vue-router';
export default {
    components:
    {
        PersonalModal: defineAsyncComponent( () => import('../components/PersonalModal.vue')),
        ProjectModal: defineAsyncComponent( () => import('../components/ProjectModal.vue')),
        TeamModal: defineAsyncComponent( () => import('../components/TeamModal.vue'))

    },
    props: {
        id: {
            type: String,
            required:true
        }
    },
    setup(props) {
        const router = useRouter()
        const { 
            loadKudos,
            getKudoboardById,
            kudos,
            isLoadingKudos,
            } = useKudoboard(props.id)
        let kudoboard = computed(() => null )

        const loadKudoboard = () => {
            loadKudos(props.id)
            kudoboard = computed( () => getKudoboardById(props.id))

            if(!kudoboard) router.push({ name: 'kudoboard-list' })
        }
        loadKudoboard()
        
        watch( 
            () => props.id,
            ( /*value, prevValue*/) => loadKudoboard()
        )
        return {
            kudoboard,
            kudos,
            isLoadingKudos
        }
    }
}
</script>
<style lang="scss" scoped>
.box
{
    padding: 2rem;

    h1{
        text-align: center;
        letter-spacing: 0.5rem;
        margin-bottom: 2rem;
    }

    .kudo
    {
        border-radius: 6px;
        background-color: var(--orange);
        padding: 2rem;
        width: 24%;
        margin-bottom: 2rem;

        &:nth-child(5n+2)
        {
            background-color: var(--pink);
        }
        &:nth-child(5n+3)
        {
            background-color: var(--skyblue);
        }
        &:nth-child(5n+4)
        {
            background-color: var(--green);
        }
        &:nth-child(5n+1)
        {
            background-color: var(--indigo);
        }
        
        .sender
        {
            font-weight: bold;
            color: var(--red);
        }

        .receiver
        {
            font-weight: bold;
            color: var(--blue);
        }

        &-body{
            font-size: 12px;
        }
        
        &-list
        {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
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

    .buttons
    {
        display: flex;
        position: fixed;
        bottom: 0px;
        right: 0px;
        width: 100%;
        padding: 0px;
        justify-content: center;
        background-color: var(--black);
        border-top: 8px solid var(--orange);

    }
}
</style>