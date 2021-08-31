import { Sidebar } from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid-cols-12 gap-6 px-5 lg:px-48 my-14">
      <div className="col-span-12 p-4 text-center bg-white rounded-2xl lg:col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-12 p-4 bg-white rounded-2xl lg:col-span-9">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
