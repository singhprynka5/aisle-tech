import React, { useEffect } from "react";
import { fetchProfile } from "../store/actions/profile";
import { useDispatch, useSelector } from "react-redux";
import { Card, Badge } from 'react-bootstrap';
import Tab from "../component/Tab";
import Loader from "../component/Loader";

function ProfilePage() {
  const dispatch = useDispatch();
  const profileList = useSelector(state => state.profileList);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  let profiles = profileList && profileList.invites && profileList.invites.profiles ? profileList.invites.profiles : [];
  let canSeeProfile = profileList && profileList.likes && profileList.likes.can_see_profile
  let likesProfile = profileList && profileList.likes && profileList.likes.profiles ? profileList.likes.profiles : []

  return (
    <div className="app alignCenter">
      {profileList && profileList.invites && profileList.invites ?
        <>
          <h3><strong>Notes</strong></h3>
          <h5>Personal messages to you</h5>
          {profiles && Array.isArray(profiles) && profiles.length > 0 ?
            profiles.map((data, index) => {
              return (
                <Card key={index} style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={data && data.photos && data.photos[0].photo} />
                </Card>
              )
            }) :
            null}
          <h4><strong>Interested in you</strong></h4>
          Premium members can see all their likes at once
          <div className="profileLikes">
            {
              likesProfile && Array.isArray(likesProfile) && likesProfile.length > 0 ?
                likesProfile.map((profileData, index) => {
                  return (
                    <Card key={index} style={{ width: '9rem' }}>
                      <Card.Img variant="top" src={profileData.avatar} style={canSeeProfile ? {} : { filter: 'blur(7px)' }} />
                      <>{profileData.first_name}</>
                    </Card>
                  )
                }) : null
            }
          </div>
          <Tab src="./images/discover 1.png" title="Discover" />
          <Tab src="./images/notes 1.png" title="Notes" />
          <Tab src="./images/matches 1.png" title="Matches" />
          <Tab src="./images/profile 1.png" title="Profile" />
        </> : <Loader />
      }

    </div>
  );
}

export default ProfilePage;