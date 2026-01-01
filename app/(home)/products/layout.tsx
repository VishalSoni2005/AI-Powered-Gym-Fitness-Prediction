import React from "react";
import PageIllustration from "@/components/page-illustration";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PageIllustration multiple />

      {children}
    </div>
  );
};

export default layout;
