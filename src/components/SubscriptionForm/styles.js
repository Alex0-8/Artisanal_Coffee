import styled from "styled-components";

const FormModal = styled.section`
    display: ${props => props.visible ? "flex" : "none"};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(34, 34, 34, 0.89);
    z-index: 1000;
`

const FormSection = styled.article`
    height: fit-content;
    background-color: ${props => props.theme.colors.secondary};
    margin: auto;
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    padding: 35px;

    & div:first-child button{
        position: absolute;
        outline: unset;
        cursor: pointer;
        border: none;
        right: 0px;
        top: 0px;
        background-color:rgba(0, 255, 136, 0);
        transition: all .3s ease;

        &:hover{
            transform: scale(.9);
        }
    }

    @media screen and (max-width: 338px) {
        width: 97%;
    }
`

const FormSub = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;

    & label {
        font-weight: 600;
    }

    & input{
        font-size: 1rem;
        border: 2px solid rgba(0, 0, 0, 0.23);
        border-radius: 8px;
        transition: all .3s ease;

        &:focus{
            border: 2px solid #6E5849;
            outline: none;
            box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
        }
    }

    & div {
        display: flex;
        gap: 7px;
    }

    & button{
        width: 150px;
        border: none;
        border-radius: 8px;
        padding: 10px;
        align-self: center;
        cursor: pointer;
        transition: all .3s ease;

        &:hover{
            transform: scale(1.05);
        }
    }
`

const SuccesMsg = styled.p`
    padding: 10px;
    border-radius: 8px;
    border: 2px solid #00ff88;
`

const ErrorMsg = styled.p`
    padding: 10px;
    border-radius: 8px;
    border: 2px solid #ff0000;
`

// const InputContainer = styled.div`
//     display: flex;
// `

export {
    FormSection,
    FormSub,
    FormModal,
    SuccesMsg,
    ErrorMsg,
}