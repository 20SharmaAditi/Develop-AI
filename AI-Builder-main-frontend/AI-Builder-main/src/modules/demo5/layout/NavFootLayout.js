import Navbar from "../components/Navbar";



export default function NavFootLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      {/* <Footer/> */}
    </div>
  );
}
