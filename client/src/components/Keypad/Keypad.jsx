import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
    addKeyToString, 
    getSuggestions, 
    clearSuggestions, 
    getCurrentKeyString, 
} from "../../store/reducers/suggestions";

import styled from 'styled-components';

import { Key, ResetButton } from '../';
import { keyDataMap } from '../../constants';

const StyledKeypad = styled.div`
    border-top: 1px #CCCCCC solid;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Keypad = () => {
    const dispatch = useDispatch();
    const numericString = useSelector(getCurrentKeyString);

    const handleKeyClick = (key) => {
        dispatch(addKeyToString(key));
    };

    const handleReset = () => {
        dispatch(clearSuggestions());
    };

    useEffect(() => {
        dispatch(getSuggestions({ numericString }));
    }, [dispatch, numericString]);

    return (
        <>
            <StyledKeypad>
                {keyDataMap.map((key, index) => 
                    <Key 
                        key={index}
                        numberValue={key.numberValue}
                        displayNumber={key.displayNumber}
                        displayLetters={key.displayLetters}
                        onKeyClick={handleKeyClick}
                    />
                )}
            </StyledKeypad>
            <ResetButton onReset={handleReset}/>
        </>
    )
}

export default Keypad;