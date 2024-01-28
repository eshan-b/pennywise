// Hooks
import { useEffect, useState } from "react";

// Components
import { SimpleGauge } from "react-gauges";
import RiskCard from "./risk-card";

const RiskScoreGauge = (financialData: any) => {
  const currData = financialData.financialData;
  const [riskScore, setRiskScore] = useState(0);

  // Calculate risk score based on the formula
  const debtToEquityRatio = currData.debtToEquity || 0;
  const currentRatio = currData.currentRatio || 0;
  const interestCoverage = currData.interestCoverage || 0;
  const earningsYield = currData.earningsYield || 0;

  useEffect(() => {
    const calculatedRiskScore =
      0.4 * debtToEquityRatio +
      0.3 * currentRatio +
      0.2 * interestCoverage +
      0.1 * earningsYield;

    // Ensure the calculated risk score is between 0 and 100
    const normalizedRiskScore = Math.min(Math.max(calculatedRiskScore, 0), 100);
    setRiskScore(normalizedRiskScore);
  }, [financialData]);

  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="w-1/2">
          <SimpleGauge
            value={Number(riskScore.toFixed(2))}
            barColor="#DA365F"
            indicatorColor="#E36C89"
          />
        </div>
      </div>

      <div className="flex justify-center">
        {riskScore <= 33 ? (
          <p>Low risk</p>
        ) : riskScore <= 66 ? (
          <p>Medium risk</p>
        ) : (
          <p>High risk</p>
        )}
      </div>

      <div className="flex flex-col gap-8 my-8">
        <RiskCard
          title="Debt to Equity Ratio"
          definition="The debt-to-equity ratio is a measure of a company's financial leverage and indicates the proportion of equity and debt used to finance a company's assets."
          value={Number(debtToEquityRatio.toFixed(2))}
        />

        <RiskCard
          title="Current Ratio"
          definition="The current ratio is a liquidity ratio that measures a company's ability to cover its short-term obligations with its short-term assets."
          value={Number(currentRatio.toFixed(2))}
        />

        <RiskCard
          title="Interest Coverage"
          definition="Interest coverage ratio measures a company's ability to meet its interest payments on outstanding debt."
          value={Number(interestCoverage.toFixed(2))}
        />

        <RiskCard
          title="Earnings Yield"
          definition="Earnings yield is the earnings per share for the most recent 12-month period divided by the current market price per share."
          value={Number(earningsYield.toFixed(2))}
        />
      </div>
    </>
  );
};

export default RiskScoreGauge;
