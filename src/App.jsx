import Navbar from "./components/navbar";
import Hero from "./components/hero"
import { useState } from "react";
import Form from "./components/form";
import Result from "./components/result"

export default function App() {
  const [model, setModel] = useState("");
  const [marque, setMarque] = useState("");
  const [couleur, setCouleur] = useState("black");
  const [energie, setEnergie] = useState("essence");
  const [annee, setAnnee] = useState(2000);

  const submitHandeler = () => {
    console.log("submitting")
  }
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <hr className="my-2" />
      <div className="h-16" />
      <div className="container mx-auto">
        <Hero />
        <div className="h-16" />
        <div className="container w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form
            model={model}
            marque={marque}
            couleur={couleur}
            energie={energie}
            annee={annee}
            setModel={setModel}
            setMarque={setMarque}
            setCouleur={setCouleur}
            setEnergie={setEnergie}
            setAnnee={setAnnee}
            submit={submitHandeler}
          />
          <Result isLoading={false} />
        </div>
      </div>
    </>
  );
}

