<template>
  <div class="container">
	<div class="wrapper">
		<router-view></router-view>
	</div>
	</div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.container
{
	display:flex;
	justify-content:center;
	align-items: center;
	min-height: calc(100vh - 108px);
	width: 100vw;
	background-color: #222;
	padding-top: 108px;
	
	.wrapper
	{
		max-width: 400px;
		width: 90%;
		padding: 2rem;
		background-color: var(--purple);
		border-radius: 6px;
		border-top: 8px solid var(--orange);
		margin: 0 auto;

		@media (max-width: 767px)
		{
			width: 60%;
		}
	}
}
</style>