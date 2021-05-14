import { useSelector } from "react-redux";
import { getSuggestionsList } from "../../store/reducers/suggestions";
import { frequencyToColorMap } from "../../constants";

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
    padding-top: 16px;
    overflow-y: auto;
    height: 80vh;
`;

const Suggestion = styled.div`
    padding: 4px 12px;
    background: #EEEEEE;
    font-weight: bold;
    color: ${props => props.frequencyColor};
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 6px;
`;

const Suggestions = () => {

    const { nodeLevel, deepLevel } = useSelector(getSuggestionsList);

    return (
        <SuggestionsContainer>
            <SuggestionsColumn>
                <SuggestionsTitle>Current Words</SuggestionsTitle>
                
                <SuggestionsResult>
                    { nodeLevel.map(({frequency, word}, index) => 
                        <Suggestion 
                            frequencyColor={frequencyToColorMap(frequency)} 
                            key={index}
                        >
                            <span>{word}</span>
                        </Suggestion>
                    ) }
                </SuggestionsResult>
                
            </SuggestionsColumn>
            <SuggestionsColumn>
                <SuggestionsTitle>Other Suggestions</SuggestionsTitle>
                
                <SuggestionsResult>
                    { deepLevel.map(({frequency, word}, index) =>
                        <Suggestion
                            frequencyColor={frequencyToColorMap(frequency)} 
                            key={index}
                        >
                            <span>{word}</span>
                        </Suggestion>
                    ) }
                </SuggestionsResult>
                
            </SuggestionsColumn>
            
        </SuggestionsContainer>
    )
}

export default Suggestions;