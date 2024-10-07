import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

import { useParams } from "react-router";

export default function CheckOut() {
  const params = useParams();
  const quantity = useRef(null);
  const max_ticket = useRef(20);
  const min_ticket = useRef(1)
  return (
    <div className=" w-[60vw] h-[28rem] box-border bg-white shadow-lg mx-auto mt-5 p-4 items-stretch flex gap-3">
      <div className=" h-full  flex flex-col  justify-between">
        <div>
          <h1 className=" font-bold text-2xl">Title</h1>
          <h1 className=" text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quae
            tempore doloribus alias esse a deserunt voluptates quos! Voluptatum
            dicta neque tempora iure? Sed unde inventore officia quas
            repudiandae pariatur!
          </h1>
          <h1>artist</h1>
          <h1>location</h1>
          <h1>date/time</h1>

          <div className=" flex gap-3  items-center text-sm p-1">
            
            <span>Qunatity</span>
            <Input min = {min_ticket.current} max = {max_ticket.current}  ref={quantity} onChange = {(e)=>{
                
                 quantity.current.value = Math.min(20 , e.target.value)
            } }  type = "number" className = " selection:p-2 w-fit decoration-red-500 selection:text-white selection:bg-orange-400" placeholder = "max 100"/>
          </div>
        </div>
        <Button>Buy</Button>
      </div>
      <img
        className=" h-96"
        src="https://th.bing.com/th/id/OIP.UszK1aLVpMOEn2QO166uwAHaLc?rs=1&pid=ImgDetMain"
      />
    </div>
  );
}
