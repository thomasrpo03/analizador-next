import React from "react";
import { ScrollArea } from "./ui/scroll-area";

interface Token {
  type: string;
  value: string;
}

interface TokenListProps {
  tokens: Token[];
}

function TokenList({ tokens }: TokenListProps) {
  return (
    <div className="w-full h-full">
      <ScrollArea>
        {tokens.length === 0 && (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-lg font-black">No hay tokens que mostrar</p>
          </div>
        )}
        <ul className="space-y-3 max-h-[650px] text-lg">
          {tokens.map((token, index) => (
            <li key={index}>
              <span className="font-bold mx-4">Tipo:</span>
              {token.type}
              <span className="font-bold mx-4">Valor:</span> {token.value}
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}

export default TokenList;
