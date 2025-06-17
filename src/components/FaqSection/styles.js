import styled from "styled-components";


const FaqContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    background-color:rgba(191, 169, 128, 0.09);
    padding: 25px 15px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

const QuestionContainer = styled.article`
    width: 75%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 15px;
    align-items: center;

    & div{
        max-height: 0;
        overflow: hidden;
        transition: all .3s ease;
    }

    &.open div{
        max-height: 250px;
        border-top: 2px solid black;
    }

    & button{
        border: none;
        font-size: clamp(1.25rem, 0.982rem + 0.714vw, 1.625rem);
        cursor: pointer;
        text-align: left;
        display: flex;
        justify-content: space-between;
        border-radius: 8px;
        width: 100%;
        background-color: #ffffff00;
        padding: 15px 0;
        
        span {
            transition: all .3s ease;
        }
    }

    &.open button span {
        transform: rotate(45deg);
    }
`



export {
    FaqContainer,
    QuestionContainer,
}