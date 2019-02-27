export default ({ users }) => {
  const notPublicUsers = users.filter(user => user.id === null);
  const notPublicUsersHtml = notPublicUsers.length
    ? notPublicUsers.map(user => (
        <div key={`${user.id}__${user.nick}`}>
          User, {user.nick}, isn't exist or isn't public steam user
        </div>
      ))
    : null;

  return <div>{notPublicUsersHtml}</div>;
};
