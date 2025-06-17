import styled from "styled-components";


const FooterSection = styled.footer`
    width: 100%;
    padding: 20px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.backGround};
    border-top: 3px solid ${props => props.theme.colors.darkBrown};

    @media screen and (max-width: 565px) {
        flex-direction: column;
    }
`

const FooterNav = styled.article`
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;

    & nav p {
        cursor: pointer;
        transition: all .3s ease;

        &:hover{
            transform: scale(1.05);
        }
    }
`

export {
    FooterSection,
    FooterNav,
}