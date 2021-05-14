import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addKeyToString, getSuggestions, getCurrentKeyString } from "../../store/reducers/suggestions";

import styled from 'styled-components';

import { Key } from '../';
import { keyDataMap } from '../../constants';

const StyledKeypad = styled.div`
    background: #CCCCCC;
    height: 30%;
    padding: 8px;
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

    useEffect(() => {
        dispatch(getSuggestions({ numericString }));
    }, [dispatch, numericString]);

    return (
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
    )
}

export default Keypad;