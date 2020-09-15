/**
 * Settings for individual notifications.
 *  @property timeout - The duration (ms) the notification will be displayed
 */
export type NotificationOptions = {
  timeout?: number;
};

export const defaultOptions: NotificationOptions = {
  timeout: 2000,
};

/**
 * Options for individual notifications.
 *  @property id - Unique ID for arrays and actions
 *  @property message - Message body text
 *  @property options - Optional notification settings
 */
export type Notification = {
  id: string;
  message: string;
  options: NotificationOptions;
};
