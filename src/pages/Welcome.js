import { Button } from "primereact/button";

export default function Welcome() {
  let user = "User";
  return (
    <div>
      <h1>Hello {user}!</h1>

      <h2>What would you like to do today?</h2>
      <Button rounded label="Create an offer" severity="primary" />
      <Button rounded label="Make a purchase" severity="secondary" />
    </div>
  );
}
