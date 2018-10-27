import React from 'react';

function createProvider(defaultTheme, ThemeContext) {
  return class ThemeProvider extends React.PureComponent {
    static defaultProps = {
      theme: defaultTheme,
    };

    render() {
      return (
        <ThemeContext.Provider value={this.props.theme}>
          {this.props.children}
        </ThemeContext.Provider>
      );
    }
  };
}

export default createProvider;
