import React from "react";
import PageIllustration from "@/components/page-illustration";

const subscriptionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative ">
      <PageIllustration multiple />
      {children}
    </main>
  );
};

export default subscriptionLayout;
