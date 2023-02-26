import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const containerElement = document.getElementById("root")!;
const root = createRoot(containerElement);
root.render(<App />);

// 开启热替换
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module?.hot?.accept?.();
