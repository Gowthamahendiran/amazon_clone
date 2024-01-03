// import React, { useState } from "react";

// const ImageUploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", file);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("price", price);

//     try {
//       const response = await fetch("http://localhost:5000/api/uploadd", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         console.log("Image and data uploaded successfully");
//       } else {
//         console.error("Error uploading image and data");
//       }
//     } catch (error) {
//       console.error("Error uploading image and data:", error);
//     }
//   };

//   return (
//     <form>
//       <div>
//         <input type="file" onChange={handleFileChange} />
//       </div>
//       <div>
//         <input type="text" placeholder="Title" onChange={handleTitleChange} />
//       </div>
//       <div>
//         <input type="text" placeholder="Description" onChange={handleDescriptionChange} />
//       </div>
//       <div>
//         <input type="number" placeholder="Price" onChange={handlePriceChange} />
//       </div>
//       <div>
//         <button type="submit" onClick={handleUpload}>
//           Upload Image and Data
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ImageUploadForm;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ImageUploadForm = () => {
//   const navigate = useNavigate();
//   const [profileImage, setProfileImage] = useState(null);
//   const [profileImageUrl, setProfileImageUrl] = useState("");


//   const handleProfileImageChange = (event) => {
//     const file = event.target.files[0];
//     setProfileImage(file);

//     const imageUrl = URL.createObjectURL(file);
//     setProfileImageUrl(imageUrl);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Profile Image:", profileImage);
//   };

//   const Back = () => {
//     navigate("/");
//   };

//   return (
//     <div>
//       <h1>Welcome to Tronlogix</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Title" />
//         <br />
//         <input type="text" placeholder="Description" />
//         <br />
//         <input type="number" placeholder="Price" />
//         <br />
//         <br />
//         <br />
        
        
//         {profileImageUrl && (
//           <img
//             src={profileImageUrl}
//             alt="Profile"
//             style={{ maxWidth: "200px", maxHeight: "200px" }}
//           />
//         )}
//         <br />
//         <label>
//           Upload Profile Image:
//           <input
//             type="file"
//             accept=".jpg,.jpeg,.png"
//             onChange={handleProfileImageChange}
//           />
//         </label>
//         <br />
//         <br />
//         <button type="submit">Schedule a Meeting</button>
//       </form>
//       <button onClick={Back}>Back</button>
//     </div>
//   );
// };

// export default ImageUploadForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageUploadForm = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("")

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);

    const imageUrl = URL.createObjectURL(file);
    setProfileImageUrl(imageUrl);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category",category);
    formData.append("profileImage", profileImage);

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
      <h1>Create a Products</h1>
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
        <button type="submit">Create a Product</button>
      </form>
      <button onClick={Back}>Back</button>
    </div>
  );
};

export default ImageUploadForm;
