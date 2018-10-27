import React from 'react';

const isReactComponent = Component =>
  Boolean(Component.prototype && Component.prototype.isReactComponent);

export default ThemeContext =>
  function withTheme(Component) {
    class ThemedComponent extends React.Component {
      static displayName = Component && `withTheme(${Component.displayName || Component.name})`;

      render() {
        const { ...rest } = this.props;
        return (
          <ThemeContext.Consumer>
            {theme => {
              const themes = { ...theme, ...this.props.theme };
              return <Component {...rest} theme={themes} />;
            }}
          </ThemeContext.Consumer>
        );
      }
    }

    if (!isReactComponent(Component)) return Component(ThemeContext['_currentValue']);

    return ThemedComponent;
  };
