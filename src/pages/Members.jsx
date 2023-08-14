import AddMemberButton from "../components/AddMemberButton";
import Member from "../components/Member";

const Members = () => {
  const localStorageKeys = Object.keys(localStorage);
  return (
    <div className="members">
      <AddMemberButton />
      {localStorage.length !== 0 ? (
        localStorageKeys.map((key) => {
          const user = JSON.parse(localStorage.getItem(key));
          return (
            <Member
              key={key}
              id={key}
              image={user.profilePic}
              name={user.name}
              job={user.job}
            />
          );
        })
      ) : (
        <div className="members__no-members">
          <h1>No Members is the database</h1>
        </div>
      )}
    </div>
  );
};

export default Members;
