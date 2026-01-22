import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    Menu, MenuButton, MenuItem, MenuItems, Transition,
    Dialog, DialogPanel, TransitionChild,
} from "@headlessui/react";
import { useSetUser, useUser } from "components/context/UserContext";
import { MaterialIcon } from "components/MaterialIcon";
import { IUser } from "generated/rest";
import { logout } from "lib/api/auth";
import React, { Fragment } from "react";

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <>
            <DesktopNavbar onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
            <MobileSidenav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
};

interface IDesktopNavbarProps {
    onMobileMenuOpen: () => void;
}

const DesktopNavbar: React.FC<IDesktopNavbarProps> = ({onMobileMenuOpen}) => {
    return (
        <nav className="bg-wine-red text-white shadow-md w-full">
            <div className="container">
                <div className="flex items-center justify-between h-14">
                    <Link to="/" className="brand-logo flex items-center gap-2">
                        <img src="/static/img/wine-icon.png"
                            className="h-6"
                            alt="vinoteca logo"
                        />
                        vinoteca
                    </Link>
                    <button
                        onClick={onMobileMenuOpen}
                        className="lg:hidden p-2"
                    >
                        <MaterialIcon iconName="menu" />
                    </button>
                    <ul className="hidden lg:flex items-center gap-4">
                        <MenuItemsComponent />
                    </ul>
                </div>
            </div>
        </nav>
    );
};
DesktopNavbar.displayName = "DesktopNavbar";

interface IMobileSidenavProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileSidenav: React.FC<IMobileSidenavProps> = ({isOpen, onClose}) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" />
                </TransitionChild>

                <div className="fixed inset-0 flex">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="ease-in duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <DialogPanel className="sidenav-panel">
                            <div className="p-4">
                                <ul className="space-y-2">
                                    <MobileMenuItems onClose={onClose} />
                                </ul>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
};
MobileSidenav.displayName = "MobileSidenav";

interface INavLinkProps {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const NavLink: React.FC<INavLinkProps> = ({to, onClick, ...props}) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <li className={isActive ? "active" : ""}>
            <Link
                to={to}
                onClick={onClick}
                className={`block px-3 py-2 rounded-sm transition-colors ${
                    isActive ? "bg-white/10" : "hover:bg-white/10"
                }`}
                aria-current={isActive ? "page" : undefined}
            >
                {props.children}
            </Link>
        </li>
    );
};

const MenuItemsComponent: React.FC = () => {
    const user = useUser();

    return user ? <UserMenuItemsComponent user={user} /> : <NoUserMenuItemsComponent />;
};
MenuItemsComponent.displayName = "MenuItems";

interface IUserMenuItemsProps {
    user: IUser;
}

const UserMenuItemsComponent: React.FC<IUserMenuItemsProps> = ({user}) => {
    const setUser = useSetUser();
    const navigate = useNavigate();

    const onLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        await logout();
        setUser(null);
        navigate("/");
    };

    return (
        <>
            {/* Add dropdown */}
            <Menu as="li" className="relative">
                <MenuButton className="nav-menu-button">
                    <MaterialIcon iconName="add_circle" />
                    Add
                    <MaterialIcon iconName="arrow_drop_down" />
                </MenuButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="nav-dropdown-menu">
                        <MenuItem>
                            <Link to="/wines/new" className="nav-dropdown-link">
                                New wine
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/wines/search" className="nav-dropdown-link">
                                Purchased again
                            </Link>
                        </MenuItem>
                    </MenuItems>
                </Transition>
            </Menu>

            {/* Wines dropdown */}
            <Menu as="li" className="relative">
                <MenuButton className="nav-menu-button">
                    <MaterialIcon iconName="reorder" />
                    Wines
                    <MaterialIcon iconName="arrow_drop_down" />
                </MenuButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="nav-dropdown-menu">
                        <MenuItem>
                            <Link to="/wines" className="nav-dropdown-link">
                                All wines
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/wines/inventory" className="nav-dropdown-link">
                                Inventory
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/wines/shopping-list" className="nav-dropdown-link">
                                Shopping list
                            </Link>
                        </MenuItem>
                    </MenuItems>
                </Transition>
            </Menu>

            {/* Dashboards link */}
            <NavLink to="/dashboards">
                <span className="flex items-center gap-1">
                    <MaterialIcon iconName="dashboard" />
                    Dashboards
                </span>
            </NavLink>

            {/* User dropdown */}
            <Menu as="li" className="relative">
                <MenuButton className="nav-menu-button">
                    <MaterialIcon iconName="account_circle" />
                    {user.name}
                    <MaterialIcon iconName="arrow_drop_down" />
                </MenuButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="nav-dropdown-menu">
                        <MenuItem>
                            <Link to="/profile" className="nav-dropdown-link">
                                Profile
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <a onClick={onLogout} className="nav-dropdown-link cursor-pointer">
                                Log out
                            </a>
                        </MenuItem>
                    </MenuItems>
                </Transition>
            </Menu>
        </>
    );
};
UserMenuItemsComponent.displayName = "UserMenuItems";

const NoUserMenuItemsComponent: React.FC = () => (
    <>
        <NavLink to="/login">
            <span className="flex items-center gap-1">
                <MaterialIcon iconName="account_circle" />
                Login
            </span>
        </NavLink>
        <NavLink to="/register">
            <span className="flex items-center gap-1">
                <MaterialIcon iconName="add_circle" />
                Register
            </span>
        </NavLink>
    </>
);
NoUserMenuItemsComponent.displayName = "NoUserMenuItems";

interface IMobileMenuItemsProps {
    onClose: () => void;
}

const MobileMenuItems: React.FC<IMobileMenuItemsProps> = ({onClose}) => {
    const user = useUser();
    const setUser = useSetUser();
    const navigate = useNavigate();
    const location = useLocation();

    const onLogout = async () => {
        await logout();
        setUser(null);
        navigate("/");
        onClose();
    };

    const MobileLink: React.FC<{to: string, children: React.ReactNode}> = ({to, children}) => {
        const isActive = location.pathname === to;
        return (
            <li>
                <Link
                    to={to}
                    onClick={onClose}
                    className={`block px-3 py-2 text-gray-800 rounded-sm transition-colors ${
                        isActive ? "bg-wine-red/10 text-wine-red" : "hover:bg-gray-100"
                    }`}
                >
                    {children}
                </Link>
            </li>
        );
    };

    if (user) {
        return (
            <>
                <li className="font-medium text-wine-red px-3 py-2">Add</li>
                <MobileLink to="/wines/new">New wine</MobileLink>
                <MobileLink to="/wines/search">Purchased again</MobileLink>

                <li className="border-t border-gray-200 my-2" />

                <li className="font-medium text-wine-red px-3 py-2">Wines</li>
                <MobileLink to="/wines">All wines</MobileLink>
                <MobileLink to="/wines/inventory">Inventory</MobileLink>
                <MobileLink to="/wines/shopping-list">Shopping list</MobileLink>

                <li className="border-t border-gray-200 my-2" />

                <MobileLink to="/dashboards">
                    <span className="flex items-center gap-2">
                        <MaterialIcon iconName="dashboard" />
                        Dashboards
                    </span>
                </MobileLink>

                <li className="border-t border-gray-200 my-2" />

                <li className="font-medium text-wine-red px-3 py-2">{user.name}</li>
                <MobileLink to="/profile">Profile</MobileLink>
                <li>
                    <button onClick={onLogout} className="mobile-logout-btn">
                        Log out
                    </button>
                </li>
            </>
        );
    }

    return (
        <>
            <MobileLink to="/login">
                <span className="flex items-center gap-2">
                    <MaterialIcon iconName="account_circle" />
                    Login
                </span>
            </MobileLink>
            <MobileLink to="/register">
                <span className="flex items-center gap-2">
                    <MaterialIcon iconName="add_circle" />
                    Register
                </span>
            </MobileLink>
        </>
    );
};
MobileMenuItems.displayName = "MobileMenuItems";
