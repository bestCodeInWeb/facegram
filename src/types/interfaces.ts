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
