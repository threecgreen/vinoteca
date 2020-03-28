import { Link } from "@reach/router";
import { Dropdown, Sidenav } from "materialize-css";
import React from "react";
import { MaterialIcon } from "../components/MaterialIcon";
import { EmailInput, PasswordInput, TextInput } from "../components/TextInput";
import { Modal } from "../components/Modal";
import { CancelOrConfirmBtns, Btn } from "../components/Buttons";
import { login, createUser, getUser } from "../lib/RestApi";
import { IUser } from "../lib/Rest";

export const Top: React.FC<{}> = (_) => {
    return (
        <>
            <Navbar />
            <MobileNavbar />
        </>
    );
}

const Navbar: React.FC<{}> = (_) => {
    return (
        <>
            <nav>
                <div className="nav-wrapper pink darken-4">
                    <div className="container">
                        <Link to="/" className="brand-logo">
                            <img src="/static/img/wine-icon.png"
                                id="logo-img"
                                alt="vinoteca logo"
                            />
                            vinoteca
                        </Link>
                        <a href="#" data-target="mobile"
                            className="sidenav-trigger left hide-on-large-and-up"
                        >
                            <MaterialIcon iconName="menu" />
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <MenuItems id="top-dropdown" />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
Navbar.displayName = "Navbar";

const MobileNavbar: React.FC<{}> = (_) => {
    const sideNavRef = React.useRef() as React.MutableRefObject<HTMLUListElement>;
    React.useEffect(() => {
        // tslint:disable-next-line no-unused-expression
        new Sidenav(sideNavRef.current);
    }, [sideNavRef]);

    return (
        <ul className="sidenav" id="mobile" ref={ sideNavRef }>
            <MenuItems id="sidebar-dropdown" />
        </ul>
    );
}
MobileNavbar.displayName = "MobileNavbar";

const MenuItems: React.FC<{id: string}> = ({id}) => {
    const dropdownTriggerRef = React.useRef() as React.MutableRefObject<HTMLAnchorElement>;
    React.useEffect(() => {
        // tslint:disable-next-line no-unused-expression
        new Dropdown(dropdownTriggerRef.current);
    }, [dropdownTriggerRef]);

    const [user, setUser] = React.useState<IUser>();
    const [showLoginModal, setShowLoginModal] = React.useState(false);
    const [showNewUserModal, setShowNewUserModal] = React.useState(false);

    // Set user if already logged in.
    React.useEffect(() => {
        async function checkIfLoggedIn() {
            try {
                const user = await getUser();
                setUser(user);
            } catch {
                // Nothing
            }
        }
        checkIfLoggedIn();
    }, []);

    return (
        <>
            <li id="new-wine-nav">
                <ul id={ id } className="dropdown-content">
                    <li>
                        <Link to="/wines/new">
                            New Wine
                        </Link>
                    </li>
                    <li>
                        <Link to="/wines/search">
                            Purchased Again
                        </Link>
                    </li>
                </ul>
                <a href="#!" className="dropdown-trigger" data-target={ id }
                    ref={ dropdownTriggerRef }
                >
                    <MaterialIcon className="left" iconName="add_circle" />
                    Add
                    <MaterialIcon className="right" iconName="arrow_drop_down" />
                </a>
            </li>
            <li id="wines-nav">
                <Link to="/wines">
                    <MaterialIcon className="left" iconName="reorder" />
                    Wines
                </Link>
            </li>
            <li id="dashboards-nav">
                <Link to="/dashboards">
                    <MaterialIcon className="left" iconName="dashboard" />
                    Dashboards
                </Link>
            </li>
            <li id="inventory-nav">
                <Link to="/wines/inventory">
                    <MaterialIcon className="left" iconName="view_comfy" />
                    Inventory
                </Link>
            </li>
            {/* Only show login/new user headers when no one is logged in */}
            <li id="login-nav" >
                <a onClick={ () => setShowLoginModal(true) }>
                    {/* TODO: Display user name if already logged in */}
                    <MaterialIcon className="left" iconName="account_box" />
                    Login
                </a>
            </li>
            { showLoginModal && <LoginForm onCancel={ () => setShowLoginModal(false) } onFinish={setUser} /> }
            <li id="new-user-nav">
                <a onClick={ () => setShowNewUserModal(true) }>
                    {/* TODO: Display user name if already logged in */}
                    <MaterialIcon className="left" iconName="account_box" />
                    Create Account
                </a>
            </li>
            { showNewUserModal && <NewUserForm onCancel={ () => setShowNewUserModal(false) } onFinish={setUser} /> }
        </>
    );
}
MenuItems.displayName = "MenuItems";

interface IUserProps {
    onFinish: (user: IUser) => void,
    onCancel: () => void,
}

const LoginForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmit = async () => {
        const user = await login({email, password});
        onFinish(user);
    }

    return (
        <Modal>
            <form>
                <EmailInput name="E-mail"
                    className=""
                    value={ email }
                    onChange={ setEmail }
                />
                <PasswordInput name="Password"
                    className=""
                    value={ password }
                    onChange={ setPassword }
                />
                <CancelOrConfirmBtns
                    onConfirmClick={ onSubmit }
                    onCancelClick={ onCancel }
                />
            </form>
        </Modal>
    );
}
LoginForm.displayName = "LoginForm";

const NewUserForm: React.FC<IUserProps> = ({onFinish, onCancel}) => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    // TODO: image

    const onSubmit = async () => {
        const user = await createUser({email, name, password});
        onFinish(user);
    }

    return (
        <form>
            <EmailInput name="E-mail"
                className=""
                value={ email }
                onChange={ setEmail }
            />
            <TextInput name="Name"
                className=""
                value={ name }
                onChange={ setName }
            />
            <PasswordInput name="Password"
                className=""
                value={ password }
                onChange={ setPassword }
            />
            <CancelOrConfirmBtns
                onConfirmClick={ onSubmit }
                onCancelClick={ onCancel }
            />
        </form>
    );
}
NewUserForm.displayName = "NewUserForm";
