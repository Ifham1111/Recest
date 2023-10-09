import React, { useState, useEffect } from "react";
import "./GrowingPlant.scss";

//Using Props
function GrowingPlant(props) {
  // console.log("props working fine");

  //objects
  const defaultData = {
    name: "Default Name",
    size: 1,
    backgroundColor: "red",
    icon: "🌱",
  };

  //object destructering
  let { plantData = defaultData } = props;
  // console.log("plant data", plantData);

  //object destructuring for available props
  let { name, size, icon, backgroundColor, aboutMe } = plantData;
  // console.log("name", name);

  //state use saving real time changes in temp storage
  const [dynamicSize, setdynamicSize] = useState(size);
  // console.log("dynamic Size", dynamicSize);

  //useEffect
  //in first parameter we have to give parametere and in second parametre dependancies array when the dependancy array empty it'll run only the first time when the the page load if we are giving the dipendancies then the componetns monitor that dipendancies according to aour condition
  useEffect(() => {
    console.log("My code..");
  }, []);

  useEffect(() => {
    console.log("dynamicSize", dynamicSize);
    if (dynamicSize > 100) {
      alert("Plant grown sucessfully");
    }
  }, [dynamicSize]);

  useEffect(() => {
    //set timeout, set interval, clear inteerval
    const interval = setInterval(() => {
      if(dynamicSize < 100) {
        setdynamicSize(dynamicSize + 2);
      }
    }, 1000);
    
    return () => clearInterval(interval);

  }, [dynamicSize, name]);

  //>>plus point of this using no need to hard code like props.plantData.name like wise
  const handleClick = () => {
    // console.log("clicked");
    setdynamicSize(dynamicSize + 2);
  };

  //life cycle of react >> (when that all start) mount , unmount, update

  // when the component is happen defaultly the rturn of the components happen then when we using hoooks specially useEfeect without dependencies thats mean when first time components mount that it is want to happen 

  //when the components unmount that time we have to specify the return what should be happening next

  //when the using dependancies that all wnt to be a update
  return (
    <div>
      <h1>
        I'm {name}
        {name === "Rose" ? (
          <h6>This is a Rose</h6>
        ) : (
          <h6>This is a Sun flower</h6>
        )}
        <span
          style={{
            fontSize: `${dynamicSize}px`,
            backgroundColor: `${backgroundColor}`,
          }}
        >
          {icon}
        </span>
      </h1>

      <button onClick={handleClick}>Givewater</button>
    </div>
  );
}

export default GrowingPlant;
