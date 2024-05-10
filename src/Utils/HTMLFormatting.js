import React from 'react';

export const renderDescription = (description) => {
    return description.split('\n').map((paragraph, index) => (
        <p key={index}>
            {renderBoldTags(paragraph)}
        </p>
    ));
};

export const renderBoldTags = (text) => {
    return text.split(/(<b>.*?<\/b>)/g).map((part, partIndex) => (
        part.startsWith('<b>') ? <b key={partIndex}>{part.slice(3, -4)}</b> : part
    ));
};