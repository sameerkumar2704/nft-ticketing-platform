import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import image from "../assets/react.svg";
function Header() {
  return (
    <div className=" sticky top-0 gap-40 items-center bg-gradient-to-r to-blue-600 via-violet-600 from-violet-900 px-5 py-2 flex justify-between">
      <h1 className=" font-bold text-lg text-white">Project Name</h1>
      <div className=" flex-1 flex gap-9 bg-white p-2 rounded-lg">
        <Input
          className="text-sm border-none outline-none"
          placeholder="search event by artist or place "
        />
        <Button className=" ">serach</Button>
      </div>
      <ul>
        <NavLink></NavLink>
      </ul>
      <div className=" flex gap-3 items-center">
        <Button >Tickets</Button>
        <Link>
          <img
            className=" bg-white p-1 rounded-full object-contain h-10 w-10"
            src={image}
          />
        </Link>
      </div>
    </div>
  );
}
export { Header };
