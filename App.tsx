import React, { forwardRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/components/redux/store';
import StackNavigation from './src/navigation/Stacknavigation';
import Toast from 'react-native-toast-message';
import CustomToast from './src/components/CustomToast';
const ForwardedToast = forwardRef((props, ref) => (
  <Toast
    ref={ref}
    config={{
      customToast: ({ text1, text2 }) => (
        <CustomToast text1={text1} text2={text2} />
      ),
    }}
    {...props}
  />
));
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
        <ForwardedToast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
