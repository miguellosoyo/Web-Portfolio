import styled, {css} from "styled-components";


export const StyleButton = css`
    display: block;
    margin:0 10px;
    padding: .8rem 1.2rem;
    border-radius: .5rem;
    font-weight:500;
    font-size:1.2em;
    text-align: center;
    text-transform: uppercase;
    background-color: #4e66f8;
    color:#fff;
    cursor:pointer;
    :hover{
      background: #505ebb;
    }
    :focus{
      background: #67bd2f;
      border: 2px solid green;
    }
`

export const PrimaryButton = styled.button`
  ${StyleButton}
`

export const PrimaryLink = styled.a`
  ${StyleButton}
`


 
 