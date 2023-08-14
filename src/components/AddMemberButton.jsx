import { useNavigate } from "react-router-dom";

const AddMemberButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="add__member__button"
      onClick={() => {
        return navigate("/addmember");
      }}
    >
      Add Member
    </button>
  );
};

export default AddMemberButton;
