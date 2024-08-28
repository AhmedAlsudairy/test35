'use client'
import UserProfile from "@/components/users/user-profile";
import { ActivityDataPoint, NotificationSettings, User } from "@/types";

export default function ProfilePage() {
  const initialUser: User = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Frontend developer passionate about creating beautiful and functional user interfaces.',
    location: 'San Francisco, CA',
    website: 'https://janedoe.dev',
    avatarUrl: 'https://github.com/shadcn.png',
  };

  const initialNotifications: NotificationSettings = {
    email: true,
    push: false,
  };

  const activityData: ActivityDataPoint[] = [
    { name: 'Jan', posts: 4 },
    { name: 'Feb', posts: 3 },
    { name: 'Mar', posts: 2 },
    { name: 'Apr', posts: 7 },
    { name: 'May', posts: 5 },
    { name: 'Jun', posts: 6 },
  ];

  const handleSaveChanges = (updatedUser: User) => {
    console.log('Saving user changes:', updatedUser);
    // Implement API call to save user data
  };

  const handleNotificationChange = (updatedNotifications: NotificationSettings) => {
    console.log('Updating notifications:', updatedNotifications);
    // Implement API call to update notification settings
  };

  return (
    <UserProfile
      initialUser={initialUser}
      initialNotifications={initialNotifications}
      activityData={activityData}
      onSaveChanges={handleSaveChanges}
      onNotificationChange={handleNotificationChange}
    />
  );
}