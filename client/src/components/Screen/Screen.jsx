import { useSelector } from "react-redux";
import { getCurrentKeyString } from "../../store/reducers/suggestions";

import styled from 'styled-components';

const StyledScreen = styled.div`
  background: #EEEEEE;
  border: 1px #CCCCCC solid;
  padding: 16px;
  font-size: 24px;
  min-height: 24px;
`;

const Screen = () => {

    const numericString = useSelector(getCurrentKeyString);

    return (
        <StyledScreen>
            { numericString }
        </StyledScreen>
    )
}

export default Screen;