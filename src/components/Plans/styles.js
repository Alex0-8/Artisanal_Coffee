import styled from "styled-components";


const PlansSection = styled.section`
    width: 85%;
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

const PlansContent = styled.article`
    width: 100%;
    display: flex;
    gap: 50px;
    justify-content: center;

    & > p:last-child{
        &.withoutPlan{
            display: none;
        }

        &.selectedPlan{
            display: block;
        }
    }
    
    @media screen and (max-width: 1080px) {
        flex-direction: column;
        width: 280px;
    }
`

const PlanIndividual = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    gap: 5px;
    align-items: center;
    border-radius: 8px;
    transition: all .3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.73);

    &:hover{
        transform: scale(1.05);
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }

    & button {
        outline: unset;
        padding: 10px;
        border: none;
        cursor: pointer;
        font-weight: 800;
        border-radius: 8px;
        margin-top: 25px;
        background-color: #C9B79C;
        transition: all .3s ease;

        &:hover{
            transform: scale(1.05);
            border: 2px solid ${props => props.theme.colors.darkBrown};
            box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
        }
    }

    & ul{
        margin: 20px 0;
    }

    &.highlight{
        border: 2px solid rgb(255, 27, 244);
    }

    @media screen and (max-width: 395px) {
        width: 95%;
        margin: 0 auto;
    }
`

export {
    PlansSection,
    PlansContent,
    PlanIndividual,
}