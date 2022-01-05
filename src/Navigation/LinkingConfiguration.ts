/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import {Linking} from 'react-native'

export default {
  prefixes: [Linking.openURL('/')],
  config: {
    screens: {
      Auth: {
        screens: {
          Login: {
            screens: {
              LoginScreen: 'Login'
            }
          },
          Register: {
            screens: {
              RegisterUserScreen: 'RegisterUser',
              RegisterPassScreen: 'RegisterPass',

            }
          },
          CompleteRegistration: {
            screens: {
              CompleteScreen: 'Complete',
              EmailScreen:'Email',
              PhoneScreen: 'Phone' 
              
            }
          },
        }
      },
      Root: {
        screens: {
          Search: {
            screens: {
              TabOneScreen: 'Search',
            },
          },
          Home: {
            screens: {
              TabTwoScreen: 'Home',
            },
          },
          Notification: {
            screens: {
              TabTwoScreen: 'Notification',
            },
          },
        },
      },
      Message: {
        screens: {
          Message: {
            screens: {
              MessageScreen: 'Message',
              TalkScreen: 'Talk',
              DetailScreen: 'Detail',
            },
          },
        },
      },
      Notifications: {
        screens: {
          Notification: {
            screens: {
              NotificationScreen: 'Notification',
              DetailsScreen: 'Detail',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
