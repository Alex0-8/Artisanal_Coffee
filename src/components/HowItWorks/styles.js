import styled from 'styled-components'

const HowItWorksContainer = styled.section`
    width: 80%;
    margin: 35px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
`

const Steps = styled.article`
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 35px;
    justify-content: space-between;

    h3 {
        font-size: clamp(1.125rem, 0.679rem + 1.19vw, 1.75rem);
    }

    @media screen and (max-width: 685px) {
        width: 85%;
        flex-direction: column;
    }
`

const Step = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const HowItWorksImg = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.73);
`

export {
    HowItWorksContainer,
    HowItWorksImg,
    Steps,
    Step,
}