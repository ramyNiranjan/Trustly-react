import React from "react";
import ReactDom from "react-dom";
import Button from "./Button";

type Props = {
  content: string;
  buttonTextPrimary: string;
  buttonTextSecondary?: string;
  notificationType?: string;
  subContent?: string;
  onClick: () => void;
};

const Notification = ({
  buttonTextPrimary,
  content,
  onClick,
  notificationType,
  buttonTextSecondary,
  subContent,
}: Props) => {
  return ReactDom.createPortal(
    <div className="fixed flex justify-center items-center inset-0 w-full min-h-full bg-black bg-opacity-50">
      <div className="bg-white m-4 p-4 max-w-2xl flex flex-col justify-between">
        <div role="contentinfo" className="text-base break-words mb-4">
          {content}
        </div>
        <span className="text-center font-bold">{subContent}</span>
        <div
          className="flex flex-col  trustly-screen:flex-row trustly-screen:justify-center trustly-screen:items-center
         space-y-2 trustly-screen:space-y-0 trustly-screen:space-x-4"
        >
          <Button title={buttonTextPrimary} onClick={onClick} />
          {notificationType === "cookie" && (
            <Button title={buttonTextSecondary} onClick={onClick} />
          )}
        </div>
      </div>
    </div>,
    document.getElementById("popup")!
  );
};

export default Notification;
