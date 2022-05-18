import React from "react";

const Selectthem = ({ setThem , them}) => {
  return (
    <div className=" absolute top-0 right-0 mt-5 mr-5">
      <div className="flex">
        <div className="form-control">
          <label className="label cursor-pointer">
            
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-red-500"
              onClick={()=>{setThem('theme-swiss')}}
              defaultChecked
              
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
           
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-blue-500"
              onClick={()=>{setThem('')}}
              
              
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            
            <input
              type="radio"
              name="radio-6"
              className="radio checked:bg-green-500"
              onClick={()=>{setThem('theme-neon')}}
             
             
              
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Selectthem;
