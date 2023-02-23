import "./App.css";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#181818",
            color: "#fff",
            height: "60px",
            padding: "10px",
            paddingBottom: "4px",
          }}
        >
          My Gallery
        </h1>
        {/* <h1 style={{paddingTop: "10px"}}>Welcome !</h1> */}

        <h4 style={{ color: "black", padding: "25px" }}>
          <i>~Jenil</i>
        </h4>
      </div>
      <hr style={{ marginTop: "-9px" }} />
      <Gallery />
    </>
  );
}

export default App;
