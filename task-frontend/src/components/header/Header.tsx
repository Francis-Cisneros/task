import SideMenu from "./../sidemenu/SideMenu";

const Header = () => {
  return (
    <>
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo">
                <a href="index.html" className="logo logo-dark">
                  <span className="logo-sm">
                    <img
                      src="/src/assets/images/logo-sm.png"
                      alt=""
                      height="22"
                    />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="" height="17" />
                  </span>
                </a>

                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img
                      src="/src/assets/images/logo-sm.png"
                      alt=""
                      height="22"
                    />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="assets/images/logo-light.png"
                      alt=""
                      height="17"
                    />
                  </span>
                </a>

                <button
                  type="button"
                  className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                  id="topnav-hamburger-icon"
                >
                  <span className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="ms-1 header-item d-none d-sm-flex">
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  data-toggle="fullscreen"
                >
                  <i className="bx bx-fullscreen fs-22"></i>
                </button>
              </div>
              <div className="dropdown ms-sm-3 header-item topbar-user">
                <button
                  type="button"
                  className="btn"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="rounded-circle header-profile-user"
                      src="https://media.licdn.com/dms/image/D4E03AQFs_Dti0AdLHQ/profile-displayphoto-shrink_100_100/0/1669323640776?e=1712188800&v=beta&t=As6TduUwhJ-WnCUxxMOKeioscnCIEYKQTyqbHZqpFsY"
                      alt="Header Avatar"
                    />

                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-semibold user-name-text">
                        Francis Cisneros
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">
                        Fullstack Dev
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SideMenu />
    </>
  );
};

export default Header;
