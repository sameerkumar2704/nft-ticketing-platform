/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import {
    Link,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import music from "../assets/music.png";
import comedy from "../assets/comedy.png";
function EventItemsView({ img, title, date, timing, location, artist }) {
  return (
    <div className="  w-72 h-fit  shadow-lg bg-white">
      <img className=" w-full h-64 object-fill object-top" src={img} />
      <div className=" p-3">
        <h1>
          <span>{date}</span> <span>{timing}</span>
        </h1>
        <h1>{title}</h1>
        <h1>
          Artist <span>{artist}</span>
        </h1>

        <h1>
          <span>location</span> <span>{location}</span>
        </h1>
      </div>
    </div>
  );
}
function EventList() {
  const params = useParams();
  const userList = useRef([
    {
      title: "Comedy Night",
      img: "https://th.bing.com/th/id/OIP.UszK1aLVpMOEn2QO166uwAHaLc?rs=1&pid=ImgDetMain",
      date: "19-09-2024",
      place: "Mumbai",
      timing: "8:00pm - 9:00pm",
      soldout: false,
    },
    {
      title: "Comedy Night",
      img: "https://th.bing.com/th/id/OIP.UszK1aLVpMOEn2QO166uwAHaLc?rs=1&pid=ImgDetMain",
      date: "19-09-2024",
      place: "Mumbai",
      timing: "8:00pm - 9:00pm",
      soldout: false,
    },
    {
      title: "Comedy Night",
      img: "https://th.bing.com/th/id/OIP.UszK1aLVpMOEn2QO166uwAHaLc?rs=1&pid=ImgDetMain",
      date: "19-09-2024",
      place: "Mumbai",
      timing: "8:00pm - 9:00pm",
      soldout: false,
    },
    {
      title: "Comedy Night",
      img: "https://th.bing.com/th/id/OIP.UszK1aLVpMOEn2QO166uwAHaLc?rs=1&pid=ImgDetMain",
      date: "19-09-2024",
      place: "Mumbai",
      timing: "8:00pm - 9:00pm",
      soldout: false,
    },
    {
        title: "Comedy Night",
        img: "https://th.bing.com/th/id/OIP.UszK1aLVpMOEn2QO166uwAHaLc?rs=1&pid=ImgDetMain",
        date: "19-09-2024",
        place: "Mumbai",
        timing: "8:00pm - 9:00pm",
        soldout: false,
      },
  ]);
  return (
    <Link to= "/checkout/1" className=" select-none flex flex-wrap gap-4 mt-5 justify-between  py-4 px-32 box-border">
      {userList.current.map((child) => (
        <EventItemsView key={child.title} {...child} />
      ))}
    </Link>
  );
}
function ShowsList() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" p-3 flex gap-5">
        <Button className="bg-orange-600 " onClick={() => navigate("/music")}>
          <span> Music </span>
          <img className="  w-14 object-contain p-2" src={music} />
        </Button>
        <Button className="bg-orange-600" onClick={() => navigate("/comedy")}>
          <span>Stand Up Comedy </span>
          <img className="  w-14 object-contain p-2" src={comedy} />
        </Button>
      </div>
      <Outlet />
    </>
  );
}
export default ShowsList;
export { EventList };
