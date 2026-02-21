import pfp from "../images/pfp.png";

function MyProfile() {
  return (
    <div>
      <h1>My Profile</h1>
      <img src={pfp} alt="Profile Picture" className="pfp" />
      <p>Name: Emirlan</p>
      <p>Group: SCA-24C</p>
      <p>Advisor: Khadidzha Khazhazh</p>
      <p>Email: emirlan.omorbekov.alatoo.edu.kg</p>
      <p>Year: Second year student</p>
      <p>Phone number: +996 999 444 274</p>
    </div>
  );
}

export default MyProfile;