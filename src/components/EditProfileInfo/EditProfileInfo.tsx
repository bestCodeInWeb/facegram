import React, { useState } from 'react';
import { getProfile, saveProfile } from '../../api/profile';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setProfileAC } from '../../redux/profileReducer';
import './EditProfileInfo.scss';

type Props = {
  onClose: () => void;
}

export const EditProfileInfo: React.FC<Props> = ({ onClose }) => {
  const profile = useAppSelector(state => state.profile.item);
  const [fullName, setFullName] = useState(profile?.fullName || '');
  const [facebook, setFacebook] = useState(profile?.contacts.facebook || '');
  const [website, setWebsite] = useState(profile?.contacts.website || '');
  const [vk, setVk] = useState(profile?.contacts.vk || '');
  const [twitter, setTwitter] = useState(profile?.contacts.twitter || '');
  const [instagram, setInstagram] = useState(profile?.contacts.instagram || '');
  const [youTube, setYouTube] = useState(profile?.contacts.youtube || '');
  const [gitHub, setGithub] = useState(profile?.contacts.github || '');
  const [mainLink, setMainLink] = useState(profile?.contacts.mainLink || '');
  const [aboutMe, setAboutMe] = useState(profile?.aboutMe || '');
  const [lookingForAJobDescription, setLookingForAJobDescription] = useState(profile?.lookingForAJobDescription || '');
  const dispatch = useAppDispatch();

  const saveHandler = () => {
    if (!fullName) {
      return;
    }

    const newProfile = {
      contacts: {
        facebook: facebook,
        github: gitHub,
        instagram: instagram,
        mainLink: mainLink,
        twitter: twitter,
        vk: vk,
        website: website,
        youtube: youTube
      },
      lookingForAJob: true,
      lookingForAJobDescription,
      fullName,
      aboutMe,
    }

    saveProfile(newProfile)
      .then(response => {
        if (response.data.resultCode === 0) {
          loadProfile();
        }
      })
      .finally(() => {
        onClose();
      })
  }

  const loadProfile = () => {
    if (profile) {
      getProfile(profile?.userId)
        .then((response) => {
          dispatch(setProfileAC(response.data));
        })
    }
  }

  return (
    <div className="edit-profile-info mb10">
      <button className="btn btn-primary btn-block mb10" onClick={saveHandler}>
        Save
      </button>

      <label htmlFor="1">Full name: </label>
      <input
        type="text"
        id="1"
        className="mb10"
        placeholder="Full name"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />

      <label htmlFor="2">Facebook: </label>
      <input
        type="text"
        id="2"
        className="mb10"
        placeholder="Facebook"
        value={facebook}
        onChange={e => setFacebook(e.target.value)}
      />

      <label htmlFor="3">Website: </label>
      <input
        type="text"
        id="3"
        className="mb10"
        placeholder="Website"
        value={website}
        onChange={e => setWebsite(e.target.value)}
      />

      <label htmlFor="4">VK: </label>
      <input
        type="text"
        id="4"
        className="mb10"
        placeholder="VK"
        value={vk}
        onChange={e => setVk(e.target.value)}
      />

      <label htmlFor="5">Twitter: </label>
      <input
        type="text"
        id="5"
        className="mb10"
        placeholder="Twitter"
        value={twitter}
        onChange={e => setTwitter(e.target.value)}
      />

      <label htmlFor="6">Instagram: </label>
      <input
        type="text"
        id="6"
        className="mb10"
        placeholder="Instagram"
        value={instagram}
        onChange={e => setInstagram(e.target.value)}
      />

      <label htmlFor="7">YouTube: </label>
      <input
        type="text"
        id="7"
        className="mb10"
        placeholder="YouTube"
        value={youTube}
        onChange={e => setYouTube(e.target.value)}
      />

      <label htmlFor="8">Github: </label>
      <input
        type="text"
        id="8"
        className="mb10"
        placeholder="Github"
        value={gitHub}
        onChange={e => setGithub(e.target.value)}
      />

      <label htmlFor="9">Mail: </label>
      <input
        type="text"
        id="9"
        className="mb10"
        placeholder="Your mail..."
        value={mainLink}
        onChange={e => setMainLink(e.target.value)}
      />

      <label htmlFor="11">About me: </label>
      <textarea
        id="11"
        className="mb10"
        placeholder="About me..."
        value={aboutMe}
        onChange={e => setAboutMe(e.target.value)}
      ></textarea>

      <label htmlFor="10">Skills: </label>
      <textarea
        id="10"
        className="mb10"
        placeholder="Professional skills..."
        value={lookingForAJobDescription}
        onChange={e => setLookingForAJobDescription(e.target.value)}
      ></textarea>

      <button className="btn btn-primary" onClick={saveHandler}>
        Save
      </button>
    </div>
  );
}
