export interface User {
    name: string;
    email: string;
    bio: string;
    location: string;
    website: string;
    avatarUrl?: string;
  }
  
  export interface NotificationSettings {
    email: boolean;
    push: boolean;
  }
  
  export interface ActivityDataPoint {
    name: string;
    posts: number;
  }
  
  export interface UserProfileProps {
    initialUser: User;
    initialNotifications: NotificationSettings;
    activityData: ActivityDataPoint[];
    onSaveChanges: (updatedUser: User) => void;
    onNotificationChange: (updatedNotifications: NotificationSettings) => void;
  }