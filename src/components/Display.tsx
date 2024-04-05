import React, { PropsWithChildren } from "react";

export const Display = ({ children }: PropsWithChildren) => {
  return <p className="text-xl sm:text-display font-medium">{children}</p>;
};
