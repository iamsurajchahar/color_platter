import React from "react";
import { TFunction } from "next-i18next";

import { withTranslation, i18n } from "@i18n";

const I18NExampleComponent: React.FC<{ t: TFunction }> = ({ t }) => {
  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
  };
  return (
    <div>
      <header>
        <h2>{t`home:title`}</h2>
        <div>
          <button onClick={changeLanguage}>{t(`common:language.en`)}</button>
          <button onClick={changeLanguage}>{t(`common:language.tr`)}</button>
        </div>
      </header>
      <main>
        <p>{t("common:greet", { name: t`common:world` })}</p>
        <p>{t`home:someText`}</p>
      </main>
    </div>
  );
};

export const I18NExample = withTranslation(["common", "home"])(
  I18NExampleComponent
);
