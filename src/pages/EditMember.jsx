/* eslint-disable react/prop-types */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditMember = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(userId));
  const [name, setName] = useState(user.name);
  const [job, setJob] = useState(user.job);
  const [fileUrl, setFileUrl] = useState(user.profilePic);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleJobChange = (event) => {
    setJob(event.target.value);
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setFileUrl(dataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    console.log("Editing Member...");
    event.preventDefault();
    localStorage.setItem(
      userId,
      JSON.stringify({
        profilePic: fileUrl,
        name: name,
        job: job,
      })
    );
    console.log("Member Edited!");
    navigate("/");
  };

  return (
    <div className="add_member">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        onClick={() => navigate(-1)}
        className="add__member__back"
      >
        <path d="m254-469 242 241-16 16-268-268 268-268 16 16-242 241h494v22H254Z" />
      </svg>
      <br />
      <div className="add__member__content">
      <div className="add__member__content-img">
          <img src={fileUrl} />
        </div>
        <br />
        <input
          onChange={handleFileChange}
          type="file"
          id="files"
          className="hidden"
        />
        <label htmlFor="files">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
          </svg>
        </label>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Names"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <br />
          <input
            placeholder="Job Title"
            type="text"
            name="job"
            value={job}
            onChange={handleJobChange}
          />
          <br />
          <button type="submit">Add Member</button>
        </form>
      </div>
    </div>
  );
};

export default EditMember;
