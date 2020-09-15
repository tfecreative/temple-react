import { RouterState } from "connected-react-router";
import { NotificationsState } from "store/notifications/types";
import { AuthState } from "store/auth/types";
import { UserState } from "store/user/types";

export interface IAppState {
  auth: AuthState;
  user: UserState;
  notifications: NotificationsState;
  router: RouterState;
}
