import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import './ProfileInfo.scss';

export const ProfileInfo = () => {
  const profile = useAppSelector(state => state.profile.item);

  return (
    <div className="profile-info mb10">
      {profile?.aboutMe ? <p><b>About me: </b>{profile.aboutMe}</p> : ''}
      {profile?.contacts.facebook ? <p><b>Facebook: </b>{profile.contacts.facebook}</p> : ''}
      {profile?.contacts.website ? <p><b>Website: </b>{profile.contacts.website}</p> : ''}
      {profile?.contacts.vk ? <p><b>VK: </b>{profile.contacts.vk}</p> : ''}
      {profile?.contacts.twitter ? <p><b>Twitter: </b>{profile.contacts.twitter}</p> : ''}
      {profile?.contacts.instagram ? <p><b>Instagram: </b>{profile.contacts.instagram}</p> : ''}
      {profile?.contacts.youtube ? <p><b>YouTube: </b>{profile.contacts.youtube}</p> : ''}
      {profile?.contacts.github ? <p><b>Github: </b>{profile.contacts.github}</p> : ''}
      {profile?.contacts.mainLink ? <p><b>MainLink: </b>{profile.contacts.mainLink}</p> : ''}
      {profile?.lookingForAJobDescription ? <p><b>My professional skills: </b>{profile.lookingForAJobDescription}</p> : ''}
    </div>
  );
}
