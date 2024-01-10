import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageUploadForm.css"; // Add a CSS file for styling


const ImageUploadForm = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("")
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState("");
  const [used, setUsed] = useState("");


  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);

    const imageUrl = URL.createObjectURL(file);
    setProfileImageUrl(imageUrl);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("rating", rating); // Include the rating in the form data
    formData.append("profileImage", profileImage);
    formData.append("rated", rated);
    formData.append("used", used);
    formData.append("originalPrice", originalPrice);


    try {
      const response = await fetch("http://localhost:5000/api/uploadd", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image and data uploaded successfully");
        // Add any additional logic or redirection here
      } else {
        console.error("Failed to upload image and data:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image and data:", error);
    }
    navigate("/");
  };

  const Back = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Create a Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Add onChange handlers for other input fields */}
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        <br />
        <input type="text" placeholder="Orginal Price" onChange={(e) => setOriginalPrice(e.target.value)} />
        <br />
        <input type="text" placeholder="Enter the Category" onChange={(e) => setCategory(e.target.value)} />
        <br />

        {profileImageUrl && (
          <img
            src={profileImageUrl}
            alt="Profile"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        )}
        <br />
        <label>
          Upload Profile Image:
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleProfileImageChange}
          />
        </label>
        <br />
        <br />
        <div className="rating-container">
          <label>Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star filled" : "star"}
              onClick={() => handleRatingChange(star)}
            >
              &#9733; {/* Unicode for a star */}
            </span>
          ))}
        </div>
        <input type="text" placeholder="Rated" onChange={(e) => setRated(e.target.value)} />
        <br />
        <input type="text" placeholder="Used" onChange={(e) => setUsed(e.target.value)} />
        <br />
        <button type="submit">Create a Product</button>
      </form>
      <button onClick={Back}>Back</button>
    </div>
  );
};

export default ImageUploadForm;
