import { Button } from "primereact/button";

export default function Welcome() {
  let user = "Company X";
  return (
    <div>
      <h1>Hello {user}!</h1>

      <h3>What would you like to do today?</h3>
      <div className="space-y-4">
        <Button
          rounded
          label="Create an offer"
          severity="primary"
          className="m-4"
        />
        <Button
          rounded
          label="Make a purchase"
          severity="secondary"
          className="m-4"
        />
      </div>
    </div>
  );
}
