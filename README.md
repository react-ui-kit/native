# React Native UI Kit
React Native components based on React UI Kit

### **Setup**
#### Use in your project
1. Install local module with react-ui-kit-native (it will also download all required dependencies)
```cmd
npm install react-ui-kit-native --save
```
2. Use any component you want, all available props are available separately for each component below in this documentation. For example:
```javascript
import { Button } from 'react-ui-kit-native';
<Button full primary rounded label="My button" />
```

### Components
List of available components:
#### Buttons
  - [x] [Button](?id=Button)
  - [ ] [Upload](?id=Upload)
#### Inputs
  - [x] [Input](?id=Input)
  - [x] [Select](?id=Select)
  - [ ] [Checkbox](?id=Checkbox)
  - [ ] [Datepiker](?id=Datepiker)
  - [ ] [Progress](?id=Progress)
#### Views
  - [x] [Block](?=id=Block)
  - [x] [Container](?=id=Container)
  - [x] [Text](?=id=Text)
  - [ ] [List](?=id=List)
  - [ ] [Menu](?=id=Menu)
  - [ ] [Tabs](?=id=Tabs)
  - [ ] [Badge](?=id=Badge)
  - [ ] [Label](?=id=Label)

### Examples
A list of example screens based on the above components:
#### Login
```javascript
import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class Login extends React.Component {
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
```javascript
import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class Login extends React.Component {
  render() {
    return (
      <Block flex middle style={styles.forgot}>
        <Text title light color="#000">
          FORGOT PASSWORD
        </Text>
        <Input placeholder="Email" />
        <Button full label="RESET PASSWORD" />
      </Block>
    );
  }
}
```

#### Register
```javascript
import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class Login extends React.Component {
  render() {
    return (
      <Block fluid flex middle style={styles.register}>
        <Text title light color="#000">REGISTER SCREEN</Text>
        <Input label="First name" placeholder="React" right icon="text" family="Entypo" />
        <Input label="Last name" placeholder="UI Kit" right icon="text" family="Entypo"  />
        <Input label="Address" placeholder="Street name, number, house" right icon="location-pin" family="Entypo" />
        <Input type="phone-pad" label="Phone number" placeholder="0712345678" right icon="phone" family="Entypo" />
        <Button full label="SIGN UP" />
      </Block>
    );
  }
}
```

#### Profile
```javascript
import React from 'react';
import { Block, Button, Input, Text } from 'react-ui-kit-native';

export default class Login extends React.Component {
  render() {
    return (
      <Block fluid flex middle style={styles.register}>
        <Text title light color="#000">REGISTER SCREEN</Text>
        <Input label="First name" placeholder="React" right icon="text" family="Entypo" />
        <Input label="Last name" placeholder="UI Kit" right icon="text" family="Entypo"  />
        <Input label="Address" placeholder="Street name, number, house" right icon="location-pin" family="Entypo" />
        <Input type="phone-pad" label="Phone number" placeholder="0712345678" right icon="phone" family="Entypo" />
        <Button full label="SIGN UP" />
      </Block>
    );
  }
}
```

### Work in Progress
- [ ] export component styles as `componentStyle` for easy import

### Contribution
Have an idea for a new component or Screen? Just contact us at contact@react-ui-kit.com and will add it to our list.