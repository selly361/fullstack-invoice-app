import Button, { BUTTONTYPES } from "components/button";

export default function Home() {
  return (
    <main className="main">
      <head er className="main__header--home">
        <aside className="main__info-container">
          <h1 className="main__title headingM">Invoices</h1>
          <p className="main__info bodyL">There are X total invoices</p>
        </aside>
        <section className="main__actions">
          <div className={bodyL}>Filter by status</div>
          <Button buttonType={BUTTONTYPES.B1}>New Invoice</Button>
        </section>
      </head>
      {/* INVOICE LIST */}
    </main>
  );
}
