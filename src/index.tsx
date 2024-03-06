import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'padiumkm-mobile-chat' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type PadiumkmMobileChatProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'PadiumkmMobileChatView';

export const PadiumkmMobileChatView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<PadiumkmMobileChatProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
