import { useParams } from "react-router-dom";

const data = {
  huen: {
    name: "Huen",
    description: "senior sw developer",
  },
  gildong: {
    name: "Gildong",
    description: "junior sw developer",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {profile.name} 
      </h3>
      <small>{profile.description}</small>
    </div>
  );
};

export default Profile;