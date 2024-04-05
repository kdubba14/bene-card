import React, { ChangeEventHandler, useState } from "react";

import { Card, CardInfo } from "./components/Card";
import { Display } from "./components/Display";

const cardInfo: CardInfo = {
  cardNumber: 1232222344321732,
  expDate: "8/28",
  cvc: 345,
  zip: 66062,
};

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails: ChangeEventHandler<HTMLInputElement> = (e) => {
    setShowDetails(e.target.checked);
  };

  return (
    <div className="px-14 py-16">
      <div>
        <Display>Flex card</Display>
        <p className="text-xl mb-8">Used for pre-tax purchases</p>
        <Card cardInfo={cardInfo} showDetails={showDetails} />
        <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            onChange={handleShowDetails}
            className="peer form-checkbox rounded text-brand-pink focus:ring-0 cursor-pointer"
          />
          <label className="peer-checked:text-brand-pink peer-checked:font-medium">
            Show details
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
