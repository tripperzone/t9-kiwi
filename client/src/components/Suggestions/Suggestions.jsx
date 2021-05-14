import { useSelector } from "react-redux";
import { getSuggestionsList } from "../../store/reducers/suggestions";

import styled from 'styled-components';

const SuggestionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 16px;
`;

const SuggestionsColumn = styled.div`
    border: 1px #CCCCCC solid;
    padding: 16px;
    flex: 1;
`;

const SuggestionsTitle = styled.div`
    color: #AAAAAA;
    font-size: 24px;
    min-height: 24px;
`;

const SuggestionsResult = styled.div`
    padding: 16px;
`;

const Suggestions = () => {

    const { nodeLevel, deepLevel } = useSelector(getSuggestionsList);

    return (
        <SuggestionsContainer>
            <SuggestionsColumn>
                <SuggestionsTitle>Node Level Suggestions</SuggestionsTitle>
                
                <SuggestionsResult>
                    { JSON.stringify(nodeLevel) }
                </SuggestionsResult>
                
            </SuggestionsColumn>
            <SuggestionsColumn>
                <SuggestionsTitle>Deep Level Suggestions</SuggestionsTitle>
                
                <SuggestionsResult>
                    { JSON.stringify(deepLevel) }
                </SuggestionsResult>
                
            </SuggestionsColumn>
            
        </SuggestionsContainer>
    )
}

export default Suggestions;