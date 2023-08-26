import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Token {
  type: string;
  value: string;
}
function tokenize(sourceCode: string): Token[] {
  const keywords = [
    "abstract",
    "await",
    "boolean",
    "break",
    "byte",
    "case",
    "catch",
    "char",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "double",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "final",
    "finally",
    "float",
    "for",
    "function",
    "goto",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "int",
    "interface",
    "let",
    "long",
    "native",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "short",
    "static",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "throws",
    "transient",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "volatile",
    "while",
    "with",
    "yield",
  ];
  // Palabras clave de JavaScript
  const operators = [
    "+",
    "-",
    "*",
    "/",
    "=",
    "==",
    "===",
    "!=",
    "!==",
    ">",
    "<",
    ">=",
    "<=",
  ]; // Operadores
  const symbols = ["(", ")", "{", "}", ";", ",", ".", "[", "]"]; // Símbolos

  const tokens: Token[] = [];
  let currentToken = "";

  for (let i = 0; i < sourceCode.length; i++) {
    const char = sourceCode[i];

    if (char === " " || char === "\n" || char === "\t") {
      if (currentToken !== "") {
        tokens.push({ type: "identifier", value: currentToken });
        currentToken = "";
      }
    } else if (symbols.includes(char)) {
      if (currentToken !== "") {
        tokens.push({ type: "identifier", value: currentToken });
        currentToken = "";
      }
      tokens.push({ type: "symbol", value: char });
    } else if (operators.includes(char)) {
      if (currentToken !== "") {
        tokens.push({ type: "identifier", value: currentToken });
        currentToken = "";
      }
      currentToken += char;
      if (i < sourceCode.length - 1) {
        const nextChar = sourceCode[i + 1];
        const combinedOperator = currentToken + nextChar;
        if (operators.includes(combinedOperator)) {
          tokens.push({ type: "operator", value: combinedOperator });
          currentToken = "";
          i++; // Skip the next character since it's part of the combined operator
        } else {
          tokens.push({ type: "operator", value: currentToken });
          currentToken = "";
        }
      } else {
        tokens.push({ type: "operator", value: currentToken });
        currentToken = "";
      }
    } else {
      currentToken += char;
    }
  }

  if (currentToken !== "") {
    tokens.push({ type: "identifier", value: currentToken });
  }

  const tokenObjects: Token[] = tokens.map((token) => {
    if (keywords.includes(token.value)) {
      return { type: "Palabra clave", value: token.value };
    } else if (operators.includes(token.value)) {
      return { type: "Operador", value: token.value };
    } else if (symbols.includes(token.value)) {
      return { type: "Símbolo", value: token.value };
    } else {
      return { type: "Identificador", value: token.value };
    }
  });

  return tokenObjects;
}

export default tokenize;
