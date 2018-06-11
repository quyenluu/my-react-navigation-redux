import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigation/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('LoadingScreen');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

const nav = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
      default:
      {
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
      }
    }
    return nextState || state;
  }
  
export default nav;