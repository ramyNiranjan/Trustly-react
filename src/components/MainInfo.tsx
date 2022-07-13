import React, { useCallback, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useCurrentWidth } from "../hooks/useWindowSize";
import Button from "./Button";
import Notification from "./Notification";

type Props = {};

const MainInfo = (props: Props) => {
  const [visited, setVisited] = useLocalStorage("trustly", false);
  const currentWindowSize = useCurrentWidth();
  const [getStarted, setGetStarted] = useState(false);
  const onCookieHandler = useCallback(() => {
    setVisited(true);
  }, [setVisited]);
  const onGetStartHandler = useCallback(() => {
    setGetStarted((preValue) => !preValue);
  }, [setGetStarted]);
  return (
    <section>
      <article className="text-white antialiased  whitespace-normal md:w-2/3 break-normal p-4 flex flex-col justify-between items-start ml-4 mb-7">
        <h1 className="text-4xl md:text-6xl mb-4 leading-10">
          Smidiga betalningar direkt från bankkontot
        </h1>
        <p className="text-sm md:text-xl mb-4 md:leading-8">
          Med Trustly går dina betalningar direkt från konto till konto – utan
          kort, appnedladdning eller krav på registrering.
        </p>
        <Button title="Kom igång" onClick={onGetStartHandler} />
      </article>

      {getStarted && (
        <Notification
          buttonTextPrimary="See you soon😃."
          content={`we are currently working on this feature and will be launching soon. In the meantime, you can try resizing the browser window to find out the width of the browser window.`}
          subContent={`your current browser width ${currentWindowSize}`}
          onClick={onGetStartHandler}
        />
      )}
      {!visited && (
        <Notification
          buttonTextPrimary="Reject All"
          buttonTextSecondary="Accept All Cookies"
          content="By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. "
          notificationType="cookie"
          onClick={onCookieHandler}
        />
      )}
    </section>
  );
};

export default MainInfo;
