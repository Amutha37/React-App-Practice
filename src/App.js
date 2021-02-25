import "./Buttoncount.css";
import Buttoncount from "./Buttoncount";

export default function Card() {
  const popeye = {
    name: "Popeye the Sailor",
    location: "Las Vegas",
    foodType: "Spinach",
    age: 44,
    likes: "Sailing the seas of React!",
    twitterUsername: "https://twitter.com/popeyethesailor",
    avatar:
      "https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432",
  };

  return (
    <div className="container">
      <div className="profileCard">
        <div className="imagePopeye">
          <img src={popeye.avatar} alt="Popeye" />
        </div>

        <div className="profileData">
          <p className="fullName"> {popeye.name}</p>
          <p>Location : {popeye.location}</p>
          <p> Age : {popeye.age}</p>
          <p>Food type: {popeye.foodType}</p>
          <p>Likes: {popeye.likes}</p>
          <p>Twitter: {popeye.twitterUsername}</p>
        </div>
      </div>
      <Buttoncount />
    </div>
  );
}