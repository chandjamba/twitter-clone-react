import { Camera, X } from "lucide-react";
import "./editProfilePage.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function EditProfilePage() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [bio, setBio] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [website, setWebsite] = useState();

  const handleSubmit = (e) => {
    
  };
  return (
    <div className="edit-profile">
      <header className="edit-profile-header">
        <Link to={"/profile"} className="edit-profile-close-button">
          <X className="edit-profile-icon" />
        </Link>
        <h1 className="edit-profile-heading">Edit profile</h1>
        <button className="edit-profile-save-button" onClick={handleSubmit}>
          Save
        </button>
      </header>

      <div className="edit-profile-images">
        <div className="edit-profile-banner-image">
          <img
            className="edit-profile-image"
            src="https://wallpaperaccess.com/full/4307862.jpg"
            alt="Profile banner"
          />
          <button className="edit-profile-banner">
            <Camera className="edit-profile-banner-icon" />
          </button>
        </div>
        <div className="edit-profile-picture">
          <img
            className="edit-profile-image-round"
            src="https://wallpaperaccess.com/full/4307862.jpg"
          />
          <button className="edit-profile-edit-picture">
            <Camera className="edit-profile-profile-icon" />
          </button>
        </div>
      </div>

      <form className="edit-profile-form">
        <div className="edit-profile-form-group">
          <label htmlFor="name">Name</label>
          <input
            className="edit-profile-input"
            type="text"
            value={name}
            name="name"
            maxLength="50"
          />
          <span className="edit-profile-character-count">/50</span>
        </div>
        <div className="edit-profile-form-group">
          <label htmlFor="name">Username</label>
          <input
            className="edit-profile-input"
            type="text"
            value={username}
            name="name"
            maxLength="50"
          />
          <span className="edit-profile-character-count">/50</span>
        </div>
        <div className="edit-profile-form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            className="edit-profile-text-area"
            id="bio"
            value={bio}
            name="bio"
            maxLength="200"
          ></textarea>
          <span className="edit-profile-character-count">/200</span>
        </div>
        <div className="edit-profile-form-group">
          <label htmlFor="location">City</label>
          <input
            className="edit-profile-input"
            type="text"
            value={city}
            name="city"
            maxLength="30"
          />
          <span className="edit-profile-character-count">/30</span>
        </div>
        <div className="edit-profile-form-group">
          <label htmlFor="location">Country</label>
          <input
            className="edit-profile-input"
            type="text"
            value={country}
            name="country"
            maxLength="30"
          />
          <span className="edit-profile-character-count">/30</span>
        </div>
        <div className="edit-profile-form-group">
          <label htmlFor="website">Website</label>
          <input
            className="edit-profile-input"
            value={website}
            type="url"
            name="website"
          />
        </div>
      </form>
    </div>
  );
}
