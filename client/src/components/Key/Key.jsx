import styled from 'styled-components';

const ContainerKey = styled.div`
    flex: 0 32%;
    margin-bottom: 5%;
    text-align: center;
`;

const StyledKey = styled.button`
    height: 60px;
    width: 60px;
    border: 1px #DDDDDD solid;
    cursor: pointer;
`;

const Key = ({ numberValue, displayNumber, displayLetters, onKeyClick }) => {
    return (
        <ContainerKey>
            <StyledKey onClick={() => onKeyClick(numberValue)}>
                <div>{displayNumber}</div>
                <div>{displayLetters}</div>
            </StyledKey>
        </ContainerKey>
    )
}

export default Key;