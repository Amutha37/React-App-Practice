import "./Card.css";

export default function Card() {
  const popeye = {
    name: "Popeye the Sailor",
    location: "Las Vegas",
    foodType: "Spinach",
    age: 44,
    likes: "Sailing the seas of React!",
    twitterUsername: "PopeyeTheSailor",
    avatar:
      "https://www.denofgeek.com/wp-content/uploads/2020/05/Popeye-Spinach-1.jpg?resize=768%2C432",
  };

  return (
    <div className="container">
      <p>
        Welcome to my react practice tasks. Kindly click the task on the
        navigation bar to view my work.
      </p>
      {/* <br></br> */}
      {/* <p>This is Popeye card details are from object.</p> */}
      <div className="profileCard">
        <div className="imagePopeye">
          <img src={popeye.avatar} alt="Popeye" />
        </div>

        <div className="profileData">
          <ul>
            <li className="fullName">{popeye.name}</li>
            <li>Location : {popeye.location}</li>
            <li>Age : {popeye.age}</li>
            <li>Food type: {popeye.foodType}</li>
            <li>Likes: {popeye.likes}</li>
            <li>Twitter: {popeye.twitterUsername}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
