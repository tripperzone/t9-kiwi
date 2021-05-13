import styled from 'styled-components';

const StyledKey = styled.div`
    flex: 0 32%;
    height: 100px;
    margin-bottom: 2%;
`;

const Key = ({ numberValue, displayNumber, displayLetters, onKeyClick }) => {
    return (
        <StyledKey onClick={() => onKeyClick(numberValue)}>
            <div>{displayNumber}</div>
            <div>{displayLetters}</div>
        </StyledKey>
    )
}

export default Key;