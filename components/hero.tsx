"use client"

import tokenize, { Token } from "@/lib/utils";
import Editor from "./editor";
import TokenList from "./token-list";
import { useState } from "react";

const Hero = () => {
  const [tokens, setTokens] = useState<Token[]>([]);

  const handleCodeSubmit = (code: string) => {
    const newTokens = tokenize(code);
    setTokens(newTokens);
  };

  const handleReset = () => {
    setTokens([]);
  };
  return (
    <div className="flex space-x-10 min-h-full min-w-full px-9 py-6">
      <Editor onSubmit={handleCodeSubmit} onReset={handleReset} />
      <TokenList tokens={tokens} />
    </div>
  );
};
export default Hero;
