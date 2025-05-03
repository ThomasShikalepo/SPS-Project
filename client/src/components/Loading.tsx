import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      {/*loader to is a next js icon*/}
      <Loader2 className="loading__spinner" />
      <span className="loading__text">Loading...</span>
    </div>
  );
};

export default Loading;