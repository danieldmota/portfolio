"use client";

import { useEffect, useReducer } from "react";

const roles = ["Daniel", "Estudante de Eng. de Software"] as const;

type TypingState = {
  roleIndex: number;
  letterIndex: number;
  text: string;
  stage: "fade" | "typing" | "hold";
};

function reducer(state: TypingState): TypingState {
  if (state.stage === "fade") {
    return { ...state, text: "", letterIndex: 0, stage: "typing" };
  }

  if (state.stage === "typing") {
    const role = roles[state.roleIndex];
    if (state.letterIndex < role.length) {
      const nextIndex = state.letterIndex + 1;
      return {
        ...state,
        letterIndex: nextIndex,
        text: role.slice(0, nextIndex),
        stage: nextIndex === role.length ? "hold" : "typing",
      };
    }
  }

  return {
    roleIndex: (state.roleIndex + 1) % roles.length,
    letterIndex: 0,
    text: state.text,
    stage: "fade",
  };
}

export function TypingRole() {
  const [state, advance] = useReducer(reducer, {
    roleIndex: 0,
    letterIndex: roles[0].length,
    text: roles[0],
    stage: "hold",
  });

  useEffect(() => {
    const delay = state.stage === "typing" ? 150 : state.stage === "fade" ? 500 : 1000;
    const timeout = window.setTimeout(advance, delay);
    return () => window.clearTimeout(timeout);
  }, [state]);

  return (
    <span id="role" className={state.stage === "fade" ? "is-fading" : undefined}>
      {state.text}
    </span>
  );
}
