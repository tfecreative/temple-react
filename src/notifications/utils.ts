import { Notification, NotificationOptions, defaultOptions } from "./types";
import { v4 as uuidv4 } from "uuid";

export const createNotification = (
  message: string,
  options?: NotificationOptions
) => {
  const notification: Notification = {
    id: uuidv4(),
    message,
    options: { ...defaultOptions, ...options },
  };
  return notification;
};
