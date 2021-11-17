<template>
	<div v-if="isLoading" class="container">
        <div class="alert">
            <div>
				Loading data...
				<span>
					<font-awesome-icon class="fa-spin" icon="sync" />
				</span>
			</div>
        </div>
    </div>
  	<div v-else class="container">
		<div class="wrapper">
			<div class="team-list">
				<List />
			</div>
			<div class="team-template">
				<router-view></router-view>
			</div>
		</div>
	</div>
	<CreateTeamModal
		@reload="reloadTeams"
		 />
</template>

<script>
import { defineAsyncComponent } from 'vue';
import useTeam from '../composables/useTeam';

export default {
	components: {
		List : defineAsyncComponent( () => import('../components/TeamList.vue')),
		CreateTeamModal: defineAsyncComponent( () => import('../components/CreateTeamModal.vue'))
	},
	setup() {

		const { isLoading, loadTeams } = useTeam()
		loadTeams()
		return {
			isLoading,

			reloadTeams: () => loadTeams()
		}
	}
}
</script>

<style lang="scss" scoped>
.container
{
	display:flex;
	justify-content:center;
	align-items: center;
	width: 100vw;
	margin-top: 108px;
	height: calc(100vh - 108px);

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

	.wrapper
	{
		width: 100%;
		height: 100%;
		display: flex;
		overflow-x: hidden;

		.team {
			&-list{
				height: 100%;
				@media (max-width: 767px)
				{
					max-width: 150px;
				}
			}

			&-template{
				height: calc(100% - 100px);
				width: 100%;
				overflow-y: auto;
				padding-bottom: 100px;
			}
		}
	}
}
</style>