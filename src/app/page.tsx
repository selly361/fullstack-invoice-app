import Button, { BUTTONTYPES } from "components/button";

export default function Home() {
  return (
    <main className="main">
      <header className="main__header">
        <aside className="main__info-container">
          <h1 className="main__title headingM">Invoices</h1>
          <p className="main__info">There are X total invoices</p>
        </aside>
        <section className="main__actions">
          <div>DROPdown</div>
          <Button buttonType={BUTTONTYPES.B1} htmlType="button">
            New Invoice
          </Button>
        </section>
      </header>
    </main>
  );
}
