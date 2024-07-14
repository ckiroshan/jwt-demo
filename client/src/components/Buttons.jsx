const Buttons = ({ login, logout }) => {
  const styles = {
    container: { marginTop: "30px" },
    button: { margin: "10px" },
  };

  const classNames = {
    container: "col-md-12 text-center",
    loginButton: "btn btn-primary",
    logoutButton: "btn btn-dark",
  };

  return (
    <div className="row">
      <div className={classNames.container} style={styles.container}>
        <button className={classNames.loginButton} style={styles.button} onClick={login}>
          Login
        </button>
        <button className={classNames.logoutButton} style={styles.button} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Buttons;
