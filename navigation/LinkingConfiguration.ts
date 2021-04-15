import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Settings: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Categrories: {
            screens: {
              TabTwoScreen: 'three',
            },
          },
          Favorites: {
            screens: {
              TabTwoScreen: 'four',
            },
          },
          About: {
            screens: {
              TabTwoScreen: 'five',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
