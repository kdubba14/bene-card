import React, { PropsWithChildren } from "react";

import { Display } from "./Display";

export interface CardInfo {
  cardNumber: number;
  expDate: string;
  cvc: number;
  zip: number;
}

interface CardProps {
  showDetails: boolean;
  cardInfo: CardInfo;
}

export const Card = (props: CardProps) => {
  const { cardInfo, showDetails } = props;

  const numberString = String(cardInfo.cardNumber);
  const chunked = numberString.match(/.{1,4}/g);
  const shownNumber = showDetails ? chunked : [chunked[chunked.length - 1]];

  const renderCvc = () => {
    const length = String(cardInfo.cvc).length || 3;

    return showDetails ? (
      String(cardInfo.cvc)
    ) : (
      <Display>{"•".repeat(length)}</Display>
    );
  };

  return (
    <div className="w-84 h-56 sm:w-96 sm:h-64 min-w-80 p-6 rounded-3xl text-white flex flex-col justify-between bg-cover bg-[url('/public/benepass-card-background.png')] shadow-[0_4px_6px_0px_#0000000D,0_10px_15px_0px_#0000001A]">
      <div className="flex justify-between">
        <img alt="logo" src="/benepass-logo-white.svg" />
        <div className="py-1 px-3 text-brand-indigo-100 font-medium flex justify-center items-center rounded-2xl bg-white">
          <h3>Virtual</h3>
        </div>
      </div>
      <div className="flex gap-1 sm:gap-4">
        {!showDetails && <Display>••••</Display>}
        {shownNumber.map((num) => (
          <Display>{num}</Display>
        ))}
      </div>
      <div className="flex gap-10">
        <Detail header="VALID THRU" text={cardInfo.expDate} />
        <Detail header="CVC" text={renderCvc()} />
      </div>
      <div className="flex justify-between">
        <p className="text-lg">ZIP {cardInfo.zip}</p>
        <img alt="logo" src="/visa-logo-white.svg" />
      </div>
    </div>
  );
};

interface DetailProps extends PropsWithChildren {
  header: string;
  text: string | JSX.Element;
}

const Detail = (props: DetailProps) => {
  const { header, text } = props;

  return (
    <div className="flex flex-col items-start">
      <p className="text-xs text-brand-indigo-20">{header}</p>
      <p className="leading-6 *:leading-6">{text}</p>
    </div>
  );
};
