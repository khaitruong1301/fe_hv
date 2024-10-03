import React from 'react'
import { NavLink } from 'react-router-dom'

const LeftSidebar = ({ onSidebarToggle }) => {
  return (
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <NavLink to="/manager" className="text-nowrap logo-img">
            <img src="/assets/images/logos/logo-light.svg" alt="" />
          </NavLink>
          <div
            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
            id="sidebarCollapse"
            onClick={onSidebarToggle}
          >
            <i className="ti ti-x fs-8" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-6" />
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="/manager"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:home-smile-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-6" />
              <span className="hide-menu">Management</span>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:layers-minimalistic-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Users</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:danger-circle-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Intructors</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:bookmark-square-minimalistic-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Card</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:file-text-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Forms</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:text-field-focus-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Typography</span>
              </NavLink>
            </li>
            <li className="nav-small-cap">
              <span className="hide-menu">Consult</span>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="/manager/consult"
              >
                <span>
                  <iconify-icon
                    icon="solar:login-3-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Approcal</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:user-plus-rounded-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Status</span>
              </NavLink>
            </li>
            <li className="nav-small-cap">
              <iconify-icon
                icon="solar:menu-dots-linear"
                className="nav-small-cap-icon fs-4"
              />
              <span className="hide-menu">EXTRA</span>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:sticker-smile-circle-2-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Icons</span>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:planet-3-bold-duotone"
                    className="fs-6"
                  />
                </span>
                <span className="hide-menu">Sample Page</span>
              </NavLink>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-primary-subtle position-relative mb-7 mt-7 rounded-3">
            <div className="d-flex">
              <div className="unlimited-access-title me-3">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-75">
                  Upgrade to pro
                </h6>
                <a
                  target="_blank"
                  className="btn btn-primary fs-2 fw-semibold lh-sm"
                >
                  Buy Pro
                </a>
              </div>
              <div className="unlimited-access-img">
                <img
                  src="/assets/images/backgrounds/rocket.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  )
}

export default LeftSidebar