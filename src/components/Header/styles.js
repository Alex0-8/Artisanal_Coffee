import styled from 'styled-components'

const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: ${props => props.theme.colors.backGround};
    border-bottom: 3px solid ${props => props.theme.colors.darkBrown};

    & img {
        width: 40px;
    }

    & nav ul li {
        cursor: pointer;
        transition: all .3s ease;

        &:hover{
            transform: scale(1.05);
        }
    }

    @media screen and (max-width: 360px) {
        & nav{
            display: none;
        }
    }
`

export {
    HeaderContainer
}