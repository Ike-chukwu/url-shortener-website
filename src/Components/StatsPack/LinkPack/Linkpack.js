import React, { useContext, useState, useEffect } from "react";
import Entry from "./Entry/Entry";
import "./LinkPack.css";
import AuthContext from "../context/auth-context";


const copiedLinks = JSON.parse(localStorage.getItem("copiedLinks") || [])

const Linkpack = () => {
  const authContext = useContext(AuthContext);
  const fetchedData = authContext.answer;
  const [clickedStatus, setClickedStatus] = useState(copiedLinks);

  console.log(fetchedData);

  useEffect(() => {
    localStorage.setItem("copiedLinks", JSON.stringify(clickedStatus))
  }, [clickedStatus])

  return (
    <div className="input-pack">
      {fetchedData.map((item, index) => (
        <Entry
          currentNumber={[...clickedStatus]}
          position={index}
          clicked={(event) => {
            event.preventDefault();
            navigator.clipboard.writeText(item.shortenedLinkAnswer);
            setClickedStatus([...clickedStatus,index]);
          }}
          key={index}
          shortened={item.shortenedLinkAnswer}
          enteredLink={item.enteredLink}
        />
      ))}
    </div>
  );
};

export default Linkpack;
