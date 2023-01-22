import { json, LoaderFunction } from "remix";


export let loader: LoaderFunction = () => {
  return json({});
};

export default function Index() {
  return (
    <>
    {/* <img src="https://auth.haripatel.dev/logo.png"></img> */}
      <h1 className="text-center mt-24">
        Hello World! I am  <a target={"_blank"} className="bg-black hover:bg-white  focus:outline-none focus:ring focus:ring-black-300 text-white hover:text-black" href="https://github.com/hardikhari96">
          Harikrushna Patel.
        </a>
      </h1>
      <h1 className="text-center mt-12">
        Visit My   <a target={"_blank"} className="bg-black hover:bg-white  focus:outline-none focus:ring focus:ring-black-300 text-white hover:text-black" href="https://library.haripatel.dev">
        Library.
        </a>
      </h1>
    </>)
}
