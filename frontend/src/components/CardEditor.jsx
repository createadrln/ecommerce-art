import React, { useState } from "react";
import { Stage, Layer, Text, Image } from "react-konva";
import useImage from "use-image";

const CardEditor = () => {
  const [text, setText] = useState("Happy Birthday!");
  const [fontSize, setFontSize] = useState(30);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [image] = useImage("path/to/your/svg/image.svg");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <input type="number" value={fontSize} onChange={handleFontSizeChange} />
      <select value={fontFamily} onChange={handleFontFamilyChange}>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
      </select>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={text} fontSize={fontSize} fontFamily={fontFamily} />
          {image && (
            <Image image={image} x={50} y={50} width={100} height={100} />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default CardEditor;
