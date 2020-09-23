import React from 'react';
import {BLOCK_TYPES} from './BlockTypes';
import BlockStyleButton from './BlockStyleButton';

const BlockStyleToolbar = (props) =>{
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
     
    return (
        <span className="RichEditor-controls">
            {BLOCK_TYPES.map(type => {
                return (
                    <BlockStyleButton
                        active={type.style === blockType}
                        label={type.label}
                        onToggle={props.onToggle}
                        style={type.style}
                        key={type.label}
                        type={type}
                    />
                );
            })}
        </span>
    );
}

export default BlockStyleToolbar;