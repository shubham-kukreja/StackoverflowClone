import MainNavbar from "../components/Navbar";

export default function Layout(props) {
  return (
    <>
      <MainNavbar />
      <br/>
      <div className="container">{props.children}</div>
    </>
  );
}
