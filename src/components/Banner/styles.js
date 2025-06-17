import styled from "styled-components";
import bannerImg from '../../Img/bannerImg4.jpg'

const BannerContainer = styled.section`
    width: 100%;
    height: clamp(12.5rem, 5.804rem + 17.857vw, 21.875rem);
    background-image: url(${bannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 60%;
    display: grid;
    gap: 15px;
    justify-content: center;
    border-bottom: 3px solid #4B2E2E;
    position: relative;

    & article{
            width: 30%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            position: absolute;
            top: 25px;
            left: 48%;

        & h1 {
            font-size: clamp(1.063rem, 0.482rem + 1.548vw, 1.875rem);
        }

        & p {
            font-size: clamp(0.688rem, 0.375rem + 0.833vw, 1.125rem);
        }

        @media screen and (max-width: 420px) {
            gap: 5px;
        }
    }
`

const StartBtn = styled.button`
    border: 2px solid rgba(163, 163, 163, 0);
    outline: unset;
    padding: 7px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.secondary};
    transition: all .3s ease;
    font-size: clamp(0.688rem, 0.509rem + 0.476vw, 0.938rem);

    &:hover{
        transform: scale(1.05);
        border: 2px solid ${props => props.theme.colors.cream};
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
`

export {
    BannerContainer,
    StartBtn,
}