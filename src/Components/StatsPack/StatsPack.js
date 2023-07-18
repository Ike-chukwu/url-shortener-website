import React, { useState, useEffect } from "react";
import "./StatsPack.css";
import Linkpack from "./LinkPack/Linkpack";
import Below from "./Below/Below";
import AuthContext from "./context/auth-context";

const items = JSON.parse(localStorage.getItem("dataKey")) || "[]";

const StatsPack = () => {
  const [value, setInputValue] = useState("");
  const [pack, setPack] = useState(items);
  const [status, setStatus] = useState("");


  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(pack));
  }, [pack]);

  const fetcher = async (e) => {
    e.preventDefault();
    if(value === ""){
      setStatus(false)
      return
    }
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${value}`
    );
    const answer = await response.json();
    const shortenedLink = await answer.result.full_short_link2;
    setPack([
      ...pack,
      {
        enteredLink: value,
        shortenedLinkAnswer: shortenedLink,
      },
    ]);
    setStatus(true)
  };

  return (
    <AuthContext.Provider
      value={{
        answer: pack,
      }}
    >
      <section className="stats">
        <div className="shortener">
          <div className="purple-header">
            <div className="input-container">
              <div className="cover">
                <input
                  type="text"
                  className={status === false ?"purple-input active" : "purple-input" }
                  placeholder="Shorten a link..."
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  value={value}
                />
              </div>
              <p className={status === false ?"error active" : "error"}>Please add a link</p>
            </div>
            <a href="" className="btn" onClick={fetcher}>
              Shorten it!
            </a>
          </div>
          <Linkpack />
        </div>

        <Below />
      </section>
    </AuthContext.Provider>
  );
};

export default StatsPack;
