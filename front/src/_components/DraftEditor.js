import React, {useState} from 'react';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';
import BlockStyleToolbar from "./blockStyles/BlockStyleToolbar";

const DraftEditor = () =>{

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const logState = () => console.log(convertToRaw(editorState.getCurrentContent()));
    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    const onChange = (editorState) => {
        setEditorState(editorState);
    }
    const onUnderlineClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    }

    const onBoldClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }

    const onItalicClick = () => {
        onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    }

    const toggleBlockType = (blockType) => {
        onChange(RichUtils.toggleBlockType(editorState, blockType));
    };
    return (
        <div className="draft-editor">
            {/* <button onClick={onUnderlineClick}>U</button>
            <button onClick={onBoldClick}><b>B</b></button>
            <button onClick={onItalicClick}><em>I</em></button> */}
            <BlockStyleToolbar
                editorState={editorState}
                onToggle={toggleBlockType}
            />
            <Editor editorState={editorState} onChange={onChange} handleKeyCommand={handleKeyCommand}/>
            <input
                onClick={logState}
                type="button"
                value="Log State"
            />
        </div>
        
    );
}

export default DraftEditor;