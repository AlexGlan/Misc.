import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize, faDownLeftAndUpRightToCenter as faMinimize } from '@fortawesome/free-solid-svg-icons';
import '../styles/Editor.scss';

class Editor extends React.Component {
    render() {
        const visibility = this.props.visibility;
        const className = visibility.hideEditor ? 'editor hidden' : 'editor';
        const expand = visibility.hidePreviewer ? {minHeight: '45rem'} : {};
        const icon = visibility.hidePreviewer ? faMinimize : faMaximize; 

        return (
            <div className={className}>
                <div className='top-bar'>
                    <FontAwesomeIcon icon={faFreeCodeCamp} className='fcc-icon' />
                    <h3 className='header'>Editor</h3>
                    <button id='editor-expand' className='btn' onClick={this.props.handleExpand}>
                        <FontAwesomeIcon icon={icon} />
                    </button>
                </div>
                <textarea 
                    id='editor'
                    className='editor__text'
                    style={expand}
                    onChange={this.props.handleChange}
                >
                    {this.props.text}
                </textarea>
            </div>
        )
    }
}

export default Editor;