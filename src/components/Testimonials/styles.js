import styled from 'styled-components'

const TestimonialsContainer = styled.section`
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    gap: 15px;
    flex-direction: column;

    & h2 {
        text-align: center;
    }

    @media screen and (max-width: 1080px) {
        width: 85%;
    }
`

const CommentContainer = styled.article`
    display: flex;
    gap: 15px;
    border: 2px solid ${props => props.theme.colors.secondary};
    border-radius: 8px;
    padding: 10px;

    & div h2 {
        margin-bottom: 5px;
    }

    & img{
        min-width: 55px;
        max-height: 55px;
        object-fit: cover;
        border-radius: 50%;
    }
`

export {
    TestimonialsContainer,
    CommentContainer
}