const SideMenu = () => {
  return (
    <div className="app-menu navbar-menu">
      <div className="navbar-brand-box">
        <a className="logo logo-dark">
          <span className="logo-sm">
            <img src="https://es.vitejs.dev/logo.svg" alt="" height="42" />
          </span>
          <span className="logo-lg">
            <img src="https://es.vitejs.dev/logo.svg" alt="" height="42" />
          </span>
        </a>

        <a className="logo logo-light">
          <span className="logo-sm">
            <img src="https://es.vitejs.dev/logo.svg" alt="" height="42" />
          </span>
          <span className="logo-lg">
            <img src="https://es.vitejs.dev/logo.svg" alt="" height="42" />
          </span>
        </a>
        <button
          type="button"
          className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
          id="vertical-hover"
        >
          <i className="ri-record-circle-line"></i>
        </button>
      </div>
      <ul style={{ padding: "25px" }}>
        {/* <a className='nav-link' href="">Mis tareas</a> */}
      </ul>
    </div>
  );
};

export default SideMenu;
