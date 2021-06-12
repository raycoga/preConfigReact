import React, { memo } from "react";
import "./SplashScreen-style.scss";
import translate from '../../i18n/translate'
const SplashScreen = memo(() => {
  return <div>{translate({id:'title'})}</div>;
});

export default SplashScreen;
