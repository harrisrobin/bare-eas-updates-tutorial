import 'dotenv/config';
import {ExpoConfig, ConfigContext} from 'expo/config';

const bundleIdentifierForEnvironment = (environment: string) => {
  switch (environment) {
    case 'dev':
      return 'com.easupdatesexamplebare.dev';
    case 'qa':
      return 'com.easupdatesexamplebare.qa';
    case 'release':
      return 'com.easupdatesexamplebare';
    default:
      return 'com.easupdatesexamplebare.dev';
  }
};

const easProjectId = 'fc4d40b5-21ad-44d0-a62f-7c9f2851d363';

export default ({config}: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: 'EasUpdatesExampleBare',
    slug: 'eas-updates-example-bare',
    owner: 'harrisrobin',
    ios: {
      bundleIdentifier: bundleIdentifierForEnvironment(
        process.env.APP_ENV as string,
      ),
    },
    android: {
      package: bundleIdentifierForEnvironment(process.env.APP_ENV as string),
    },
    runtimeVersion: '1.0.0',
    updates: {
      url: `https://u.expo.dev/${easProjectId}`,
      requestHeaders: {
        'expo-channel-name': 'dev',
      },
    },
    extra: {
      eas: {
        projectId: easProjectId,
      },
    },
  };
};
