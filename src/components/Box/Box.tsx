import {TouchableOpacity, TouchableOpacityProps as RNTouchabkeOpacityProps} from 'react-native';
import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  BackgroundColorProps,
  spacing,
  SpacingProps,
  layout,
  LayoutProps,
  border,
  BorderProps,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

export const Box = createBox<Theme>();

export type BoxProps = React.ComponentProps<typeof Box>

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> & SpacingProps<Theme> & LayoutProps<Theme> & BorderProps<Theme> & RNTouchabkeOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
  [backgroundColor, spacing, layout, border],
  TouchableOpacity,
);
