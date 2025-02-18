import { Camera, X } from "lucide-react";
import "./editProfilePage.scss";
import { useState } from "react";

export default function EditProfilePage() {
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [location, setLocation] = useState();
  const [website, setWebsite] = useState();

  const handleSubmit = (e) => {
    e.prevent.default();
  };
  return (
    <div className="edit-profile">
      <header className="edit-profile-header">
        <button className="edit-profile-close-button">
          <X className="edit-profile-icon" />
        </button>
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
          <label htmlFor="bio">Bio</label>
          <textarea
            className="edit-profile-text-area"
            id="bio"
            value={bio}
            name="bio"
            maxLength="160"
          ></textarea>
          <span className="edit-profile-character-count">/160</span>
        </div>

        <div className="edit-profile-form-group">
          <label htmlFor="location">Location</label>
          <input
            className="edit-profile-input"
            type="text"
            value={location}
            name="location"
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
