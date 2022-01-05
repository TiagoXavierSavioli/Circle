/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined,
  Init: undefined
};
export type LoginStackParamList = {
  Login: undefined
};
export type InitStackParamList = {
  Init: undefined
};
export type RegisterStackParamList = {
  Pass: undefined,
  User: undefined
};
export type CompleteStackParamList = {
  Complete: undefined,
  Email: undefined,
  Phone: undefined
};

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Messages: undefined,
  Moments: undefined,
  Account: undefined,
  Notification: undefined
  Loading: undefined,
  Config: undefined,
  Init: undefined,
  Login: undefined,
  Register: undefined,
  Complete:undefined,
};
export type MessageStackParamList = {
  Message: undefined;
};


export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Account: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  Search: undefined;
};

export type CameraParamList = {
  CameraScreen: undefined;

};

export type MomentParamList = {
  PhotoScreen: undefined;
  MomentScreen: undefined;
  ProfileScreen: undefined
};

export type ConfigParamList = {
  EditScreen: undefined
  PrivacityScreen: undefined;
  NotificationsScreen: undefined;
  SecurityScreen: undefined
  InfoScreen: undefined
  HelpScreen: undefined
  PhotoPickerScreen: undefined
};

export type AccountParamList = {
  AccountScreen: undefined;
};

export type MessageParamList = {
  MessagesScreen: undefined;
  TalkScreen: undefined,
  DetailsScreen: undefined;  
}

export type NotificationParamList = {
  NotificationScreen: undefined;
  DetailsScreen: undefined;  
}

export type UserType = {
  id: string,
  name: string,
  username: string, 
  image?: string,
  picture?: string,
  verify: number,
  stats: StatsType,
  phone: number
  data: ProfileDatas,
}

export type MomentsType = {
  id: string,
  createdAt: string,
  user: UserType,
  type: string,
  description?: String
  text?: string,
  image?: string,
  video?: string,
  tags?: TagsType
}

export type TagsType = {
  id: string,
  name: string
}
export type StatsType = {
  account: string,
  online: number,
  access: number,
  verify: number,
}

export type ProfileType = {
  user: ProfileUsers,
  data:ProfileDatas, 
  button: ProfileButtons,
}

export type ProfileUsers = {
  verify?: number
  image?: string,
  username?: string,
  name?: string,
  account?: string,
  imageSize?: number,
  phone?: number,
}
export type ProfileDatas = {
  fans: string,
  points: string,
  followings: string
  pointsLength: string
}
export type ProfileButtons = {
  id: string,
  social_icon?:boolean,
  user: UserType,
  insta_user?: string,
  snap_user?: string,
  whats_number?: string,
}

export type ChatRoom ={ 
  id: String;
  users: [UserType],
  lastMessage: Message,
  messageNumber: Message
}

export type Message = {
  id: string, 
  content: string,
  createdAt: string
}

export type markerContentProps = {
  verify?: number
  image?: string,
  username?: string,
  name?: string,
  account?: string
}