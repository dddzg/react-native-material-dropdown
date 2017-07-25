import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ViewPropTypes } from 'react-native';
import { Button } from 'react-native-material-buttons';

import styles from './styles';

export default class DropdownItem extends PureComponent {
  static defaultProps = {
    color: 'transparent',
    rippleContainerBorderRadius: 0,
    shadeBorderRadius: 0,
    container: Button
  };

  static propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),

    onPress: PropTypes.func,

    index: PropTypes.number.isRequired,
    baseColor: PropTypes.string.isRequired,
    animationDuration: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    let { onPress, index } = this.props;

    if ('function' === typeof onPress) {
      onPress(index);
    }
  }

  render() {
    let {
      children,
      style,
      animationDuration,
      baseColor,
      container,
      ...props
    } = this.props;

    return (
      React.cloneElement(container, {
        ...props,
        style:[styles.container, style],
        onPress:this.onPress
      },children)
    );
  }
}
