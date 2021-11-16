<template>
    <h1>Team view</h1>
</template>
<style lang="scss" scoped>
.box
{
    padding: 2rem;

    .teamForms{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .fa-trash-alt
        {
            cursor: pointer;
            color: var(--red);
            font-size: 2rem;
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