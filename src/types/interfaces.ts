export interface Photos {
  small: string | null
  large: string | null
}

export interface UserInterface {
  name: string
  id: number
  photos: Photos
  uniqueUrlName?: string | null
  status: string | null
  followed: boolean
}

export interface UsersResponse {
  items: UserInterface[]
  totalCount: number
  error: [] | null
}

export interface AuthServiceData {
  data: CurrentUser
  messages: string[]
  resultCode: number
  fieldsErrors?: []
}

export interface CurrentUser {
  id?: number
  email?: string
  login?: string
}

export interface UserLogin {
  email: string,
  password: string,
  rememberMe: boolean,
  capture?: string
}

export interface AuthServiceData {
  data: CurrentUser
  messages: string[]
  resultCode: number
  fieldsErrors?: []
}

export interface ServerProfile {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ServerProfileContacts
  photos: Photos
  aboutMe?: string
}

export interface ServerProfileContacts {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
