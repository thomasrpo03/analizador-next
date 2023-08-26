"use client";

import React, { useState, ChangeEvent } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface EditorProps {
  onSubmit: (code: string) => void;
  onReset: () => void;
}

function Editor({ onSubmit, onReset }: EditorProps) {
  const [code, setCode] = useState("");

  const handleCodeChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(code);
  };

  const handleReset = () => {
    setCode("");
    onReset();
  };

  return (
    <div className="flex flex-col space-y-10 w-full h-full">
      <Textarea className="w-full resize-none h-[650px] text-lg" placeholder="Ingrese el código aquí..." value={code} onChange={handleCodeChange} />
      <div className="flex space-x-4 items-center justify-center">
        <Button className="font-black text-lg" onClick={handleSubmit}>
          Analizar
        </Button>
        <Button
          variant={"secondary"}
          className="font-black text-lg"
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Editor;
