import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value, /* [name] это не от имени который стоит в useState(), а который стоит и input  */
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name: &nbsp;
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Input your name"
          />
        </label>
        &nbsp;
        <label>
          Age: &nbsp;
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            placeholder="Input your age"
          />
        </label>
      </div>

      <h3>Profile Information: </h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age} </p>
    </div>
  );
};

export default Profile;
