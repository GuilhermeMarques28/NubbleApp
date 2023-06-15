import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaView, View } from 'react-native';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import Text from './src/components/Text/Text';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView />
      <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Button title="Primary" marginBottom="s12" />
          <Button disabled title="Primary" marginBottom="s12" />
          <Button preset="outline" title="Outline" marginBottom="s12" />

          <Button loading preset="outline" title="Loading" />
        </View>
    </ThemeProvider>
  );
}


export default App;
