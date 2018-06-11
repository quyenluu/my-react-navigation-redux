import {
  createReactNavigationReduxMiddleware,
  createNavigationPropConstructor,
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);
const navigationPropConstructor = createNavigationPropConstructor('root');

const addListener = createReduxBoundAddListener('root');

export { middleware, navigationPropConstructor, addListener };
