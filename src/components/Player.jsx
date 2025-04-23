import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //In react is agood practice, when needed to change the state based on the previous value , tu put a funcion inside, not !isEditing
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCamption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        className="player-name"
        type="text"
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    btnCamption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCamption}</button>
    </li>
  );
}
