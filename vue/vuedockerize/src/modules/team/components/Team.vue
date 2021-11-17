<template>
    <div 
        @click="$router.push({ name: 'team-item', params: { id: team.id}})"        
        class="team">
        <h2><font-awesome-icon icon="users" /> {{ team.name }}</h2>
    </div>
</template>
<script>
export default {
    props: {
        team: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.team{
    cursor: pointer;
    max-width: 200px;
    padding: 0;
    border-radius: 0px;
    font-size: 0.7rem;
    text-align: left;
    letter-spacing: 0.3rem;
    padding-left: 1rem;
    color: var(--black);

    @media(max-width: 767px)
    {
        padding-left: 0;
        font-size: 0.5rem;
    }
    

    &:not(:last-child){
        margin-bottom: 1rem;
    }
    h2{
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>