import React from 'react';
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faMaximize, faDownLeftAndUpRightToCenter as faMinimize } from '@fortawesome/free-solid-svg-icons';
import '../styles/Previewer.scss';

marked.use({
    breaks: true,
    gfm: true,
});

class Previewer extends React.Component {
    render() {
        const visibility = this.props.visibility;
        const className = visibility.hidePreviewer ? 'previewer hidden' : 'previewer';
        const expand = visibility.hideEditor ? {minHeight: '45rem'} : {};
        const icon = visibility.hideEditor ? faMinimize : faMaximize;
        const output = marked.parse(
            this.props.text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,'')
        );

        return (
            <div className={className} style={expand}>
                <div className='top-bar'>
                    <FontAwesomeIcon icon={faFreeCodeCamp} className='fcc-icon'/>
                    <h3 className='header'>Previewer</h3>
                    <button id='previewer-expand' className='btn' onClick={this.props.handleExpand}>
                        <FontAwesomeIcon icon={icon} />
                    </button>
                </div>
                <div id='preview' className='preview__text' dangerouslySetInnerHTML={{__html: output}}></div>
            </div>
        )
    }
}

export default Previewer;