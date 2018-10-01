# **React Native UI Kit**
React Native components based on React UI Kit

Offical documentation of `React UI Kit Native` made for `React Native` applications and you can easily use the components in your project. A lot of predefined styles & properties so it's perfectly fit for prototyping of your app UI.

- [React UI Kit Native - Website](https://native.react-ui-kit.com)

Support: [contact@react-ui-kit.com](mailto:contact@react-ui-kit.com)

### **Setup**
#### Install & usage
1. Install local module with react-ui-kit-native (it will also download all required dependencies)
```cmd
npm install react-ui-kit-native --save
```
2. Use any component you want, all available props are available separately for each component below in this documentation. For example: 

```javascript
import React from 'react';
import { Button } from 'react-ui-kit-native';

export default class MyButton extends React.Component {
  render() {
    return (
      <Button full primary rounded label="My button" />
    );
  }
}
```

### **Components**
List of available components:

**Status** | **Type** | **Component**  | **Description**
:--- | :--- | :--- | :--- |
:heavy_check_mark: | button | [`Button`](?id=Button) | react-native `TouchableOpacity` component with predefined styles & props
:heavy_check_mark: | button | [`Link`](?id=Link) | react-native `Text` & `Linking` component with predefined properties
:heavy_check_mark: | input | [`Input`](?id=Input) | react-native `TextInput` component with predefined styles & props
:heavy_check_mark: | input | [`Select`](?id=Select) | [`react-native-modal-dropdown`](https://github.com/sohobloo/react-native-modal-dropdown) module with predefined styles
:soon: | input | `Checkbox` | react-native `Switch` component with predefined styles & props
:soon: | input | `Datepiker` | react-native `DatePickerIOS` & `DatePickerAndroid` component with predefined styles & props
:soon: | input | `Progress` | react-native `ProgressViewIOS` & `ProgressBarAndroid` component with predefined styles & props
:heavy_check_mark: | view | [`Block`](?id=Block) | react-native `View` component with predefined styles & props
:heavy_check_mark: | view | [`Container`](?id=Container) | react-native `View` component with predefined styles & props
:heavy_check_mark: | view | [`Text`](?id=Text) | react-native `Text` component with predefined styles & props
:soon: | view | `Tabs` | react-native `TabBarIOS` component with predefined styles & props
:soon: | view | `Badge` | react-native `View` component with predefined styles & props
:soon: | view | `Label` | react-native `View` component with predefined styles & props
:soon: | view | `Icon` | [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons) module with predefined styles & props
:soon: | view | `List` | react-native `ScrollView` component with predefined styles & props
:soon: | view | `Menu` | react-native `ScrollView` component with predefined styles & props

#### Button
**PROP** | **TYPE** | **DEFAULT** | **DESCRIPTION**
:--- | :--- | :--- | :---
color | string | `COLOR_TEXT` | Specifies a text color
size | number | `BASE_SIZE` | Specifies a `fontSize` size
label | string | null | Specifies a string for the button text 
icon | bool | null | Specifies an icon name - check [Icon](?id=icon) component
family | bool | null | Specifies an icon family - check [Icon](?id=icon) component
loading | bool | `false` | Disable touch/press events and render `ActivityIndicator`
full | bool | `false` | Set the width of the component to 80% from the total width of the screen
opacity | number | `0.8` | Determines what the `activeOpacity` of the Button should be when touch is active
basic | bool | `false` | Determines whether the `styles.basic` should be included
bold | bool | `false` | Determines whether the `styles.bold` should be included
border | bool | `false` | Determines whether the `styles.border` should be included 
rounded | bool | `false` | Determines whether the `styles.basic` should be included
primary | bool | `false` | Determines whether the `styles.primary` should be included
secondary | bool | `false` | Determines whether the `styles.secondary` should be included
tertiary | bool | `false` | Determines whether the `styles.tertiary` should be included
style | View style | `{}` | Add `style` properties for better customization

For more properties visit [TouchableOpacity props](https://facebook.github.io/react-native/docs/touchableopacity#props)

#### Link
**PROP** | **TYPE** | **DEFAULT** | **DESCRIPTION**
:--- | :--- | :--- | :---
color | string | `theme.LINK_COLOR` | Specifies a text color
href | string | null | A link (web URL, email, contact etc.)
onPress | func | `() => {}` | Called when the touch is released 
style | View style | `{}` | Add `style` properties for better customization

#### Input
**PROP** | **TYPE** | **DEFAULT** | **DESCRIPTION**
:--- | :--- | :--- | :---
color | string | `COLOR_DEFAULT` | Specifies a text color
placeHolderColor | string | `COLOR_PLACEHOLDER` | Specifies a `placeholderTextColor`
bgColor | string | `COLOR_BACKGROUND` | Specifies a `backgroundColor` color
rounded | bool | `false` | Determines whether the `styles.rounded` should be included
type |  | `default` | One of `'default', 'email-address', 'numeric', 'phone-pad', 'number-pad', 'decimal-pad'` for `keyboardType`
help | string | null | Specifies a `string` or `node` for the text positioned between `label` and `input`
left | bool | `true` | Positioning the icon on the `left`
right | bool | `false` | Positioning the icon on the `right`
transparent | bool | `false` | Determines whether the `styles.transparent` should be included
borderless | bool | `false` | Determines whether the `styles.borderless` should be included
border | bool | `false` | Determines whether the `styles.border` should be included

For more properties visit [TextInput props](https://facebook.github.io/react-native/docs/textinput#props)

#### Text
**PROP** | **TYPE** | **DEFAULT** | **DESCRIPTION**
:--- | :--- | :--- | :---
h1 | bool | false | Determines whether the `styles.h1` should be included
h2 | bool | false | Determines whether the `styles.h2` should be included
h3 | bool | false | Determines whether the `styles.h3` should be included
h4 | bool | false | Determines whether the `styles.h4` should be included
h5 | bool | false | Determines whether the `styles.h5` should be included
title | bool | false | Determines whether the `styles.title` should be included
subtitle | bool | false | Determines whether the `styles.subtitle` should be included
caption | bool | false | Determines whether the `styles.caption` should be included
size | bool | null | Specifies a `fontSize` size
color | string | `COLOR_DEFAULT` | Specifies a text color
thin | bool | false | Set the fontWeight to `100`
bold | bool | false | Set the fontWeight to `300`
light | bool | false | Set the fontWeight to `bold`
italic | bool | false | Set the fontStyle to `italic`
align | bool | null | Specifies a `textAlign`

For more properties visit [Text props](https://facebook.github.io/react-native/docs/text.html#props)

### **Examples**
A list of example screens based on the above components:
#### Login

![Login Screen](/images/native_login.jpg "Login Screen")

```javascript
import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Block flex middle>
        <Text title light color="#000">
          LOGIN SCREEN
        </Text>
        <Text caption thin color="#000">
          Please login to your account
        </Text>
        <Input placeholder="Email" />
        <Input password placeholder="Password" />
        <Button full primary rounded label="SIGN IN" />
      </Block>
    );
  }
}
```

#### Forgot
![Forgot Screen](/images/native_forgot.jpg "Forgot Screen")

```javascript
import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Block flex middle>
        <Text title light color="#000">
          FORGOT PASSWORD
        </Text>
        <Input placeholder="Email" />
        <Button full rounded label="RESET PASSWORD" />
      </Block>
    );
  }
}
```

#### Register
![Register Screen](/images/native_register.jpg "Register Screen")

```javascript
import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class RegisterScreen extends React.Component {
  render() {
    return (
      <Block fluid flex middle>
        <Text title light color="#000">
          REGISTER SCREEN
        </Text>
        <Input label="First name" placeholder="React" right icon="text" family="Entypo" />
        <Input label="Last name" placeholder="UI Kit" right icon="text" family="Entypo" />
        <Input
          right
          icon="location-pin"
          family="Entypo"
          label="Address"
          placeholder="Street name, number, house"
        />
        <Input
          right
          icon="phone"
          family="Entypo"
          type="phone-pad"
          label="Phone number"
          placeholder="0712345678"
        />
        <Button full rounded tertiary label="SIGN UP" />
      </Block>
    );
  }
}
```

#### Profile
![Profile Screen](/images/native_profile.jpg "Profile Screen")

```javascript
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text } from 'react-ui-kit-native';

class ProfileScreen extends React.Component {
  render() {
    const { profile } = this.props;

    return (
      <Block fluid flex middle style={styles.profile}>
        <Text h5 light color="#000">{profile.fullname}</Text>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text subtitle light>{`${profile.city}, ${profile.country}`}</Text>
        <Text bold>{profile.email}</Text>
      </Block>
    );
  }
}

ProfileScreen.defaultProps = {
  profile: {
    fullname: `React UI Kit`,
    city: `London`,
    country: `United Kingdom`,
    email: `contact@react-ui-kit.com`,
    avatar: `https://react-ui-kit.com/assets/img/react-ui-kit-logo.png`,
  },
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profile: {
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

```

### **Work in Progress**
- [ ] export component styles as `componentStyle` for easy import

### **Contribution**
Have an idea for a new component or Screen? Just contact us at contact@react-ui-kit.com and will add it to our list.