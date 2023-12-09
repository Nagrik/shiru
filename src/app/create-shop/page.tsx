"use client";

import { useState } from "react";
import Step1 from "./step_1";
import Step2 from "./step_2";
import Step3 from "./step_3";
import Step4 from "./step_4";

function Index() {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
      {step === 4 && <Step4 />}
    </div>
  );
}

export default Index;
