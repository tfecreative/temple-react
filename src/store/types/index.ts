import { RouterState } from "connected-react-router";
import { NotificationsState } from 'store/notifications/types'

export interface IAppState {
  notifications: NotificationsState,
  router: RouterState;
}
