import {
  formatThbShort,
  longStayDiscounts,
  monthlyRates,
  rateExclusions,
  rateInclusions,
  seasons,
  type BedroomKey,
} from "@/lib/rates";

const bedrooms: BedroomKey[] = ["1BR", "2BR", "3BR", "4BR"];

export default function RatesTable() {
  return (
    <div>
      <div className="rates-wrap">
        <table className="rates-table">
          <thead>
            <tr>
              <th>Villa type</th>
              {seasons.map((s) => (
                <th key={s.key}>{s.label}</th>
              ))}
              <th>12M package</th>
            </tr>
          </thead>
          <tbody>
            {bedrooms.map((br) => (
              <tr key={br}>
                <td>{br}</td>
                {seasons.map((s) => (
                  <td key={s.key}>{formatThbShort(monthlyRates[br][s.key])}</td>
                ))}
                <td>{formatThbShort(monthlyRates[br].yearlyTotal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="discount-row">
        {longStayDiscounts.map((item) => (
          <div className="discount-card" key={item.term}>
            <span>{item.term}</span>
            <strong>{item.discount}</strong>
          </div>
        ))}
      </div>

      <div className="note-box">
        <strong>Included:</strong> {rateInclusions.join(" · ")}
        <br />
        <strong>Note:</strong> {rateExclusions.join(" ")}. All rates are in Thai
        Baht. Long-stay discounts apply to eligible multi-month terms — please
        enquire for a tailored quotation.
      </div>
    </div>
  );
}
