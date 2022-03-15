import type { NextPage } from "next";
import { Header } from "../components/Header";
import { SongPreferencesForm } from "../components/SongPreferencesForm";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen">
      {/* <p className="text-green-400 text-center text-xl font-sans font-extralight">
        Howdy!
      </p> */}
      <Header />

      <main>
        <div className="pt-8">
          <h3 className="text-center text-2xl text-cyan-600 tracking-widest ">
            ¡Vamos a la Playlist!
          </h3>
        </div>
        <SongPreferencesForm />
      </main>
    </div>
  );
};

export default Home;
