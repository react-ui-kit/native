import React from 'react';
import { Icon } from 'expo';

export default class TabBarIcon extends React.Component {
  render() {
    const color = this.props.focused ? '#88B04B' : '#FFFFFF';
    return <Icon.FontAwesome name={this.props.name} size={26} color={color} />;
  }
}