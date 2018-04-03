import React from 'react';
import {Text} from 'react-konva';

const UserText = props => {
    if (props.text) {
        return <Text text={props.text} draggable={true}/>;
    }

    return null;
};

export default UserText;
