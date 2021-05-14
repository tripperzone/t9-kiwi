import styled from 'styled-components';

const ResetContainer = styled.div`
    padding: 16px;
`;

const StyledReset = styled.button`
    width: 100%;
    background: #EEEEEE;
    cursor: pointer;
    border: none;
    padding: 16px;
`;

const ResetButton = ({ onReset }) => {
    return (
        <ResetContainer>
            <StyledReset onClick={() => onReset()}>Reset Screen</StyledReset>
        </ResetContainer>
    )
}

export default ResetButton;