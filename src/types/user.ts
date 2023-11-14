export type User = {
  id: string;
  name: string;
  messages: Message[];
  ava: string;
}

export type Message = {
  id: number;
  userId: string;
  text: string;
}

export type PostType = {
  id: number;
  to: string;
  userId: string;
  text: string;
  isLike: boolean;
  likesCount: number;
}
