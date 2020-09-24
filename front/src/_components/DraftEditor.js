import React, {useState} from 'react';
import {Editor, EditorState, DefaultDraftBlockRenderMap, convertToRaw, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

import TodoBlock from './blockStyles/TodoBlock';

import Immutable from 'immutable';

// The example below deliberately only allows
// 'heading-two' as the only valid block type and
// updates the unstyled element to also become a h2.
const blockRenderMap = Immutable.Map({
    'todolist': {
        element: 'div'
    }
});

// Include 'paragraph' as a valid block and updated the unstyled element but
// keep support for other draft default block types
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

const myBlockStyleFn = (contentBlock) =>{
    const type = contentBlock.getType();
    if (type === 'todolist') {
      return 'codo-block codo-block-todolist';
    }
}

const DraftEditor = (props) =>{

    const data = props.data;

    let initialEditorState = null;
    const readOnly = props.readOnly;

    if (data) {
        const rawContentFromStore = convertFromRaw(JSON.parse(data));
        initialEditorState = EditorState.createWithContent(rawContentFromStore);
    } else {
        initialEditorState = EditorState.createEmpty();
    }

    const [editorState, setEditorState] = useState(initialEditorState);

    const getEditorState = () => editorState;
    const onChange = (editorState) => {
        setEditorState(editorState);
        props.updateItems(convertToRaw(editorState.getCurrentContent()));
    }

    const myBlockRenderer = (contentBlock) => {
        const type = contentBlock.getType();
        if (type === 'todolist') {
          return {
            component: TodoBlock,
            editable: !readOnly,
            props: {
                onChange,
                getEditorState,
                readOnly
            },
          };
        }
    
        if (type === 'unstyled') {
            return {
              component: TodoBlock,
              editable: !readOnly,
              props: {
                onChange,
                getEditorState,
                readOnly
              },
            };
        }
    }

    return (
        <div className="draft-editor">
            <div className="draft-editor-wrapper">
                <Editor 
                    editorState={editorState} 
                    onChange={onChange} 
                    blockRenderMap={extendedBlockRenderMap} 
                    blockRendererFn={myBlockRenderer} 
                    blockStyleFn={myBlockStyleFn}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
}

export default DraftEditor;