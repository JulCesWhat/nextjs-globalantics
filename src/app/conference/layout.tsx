import "./styles.css";

export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <h1>GM TAKING TECH TO THE GLOBE</h1>
      </header>
      <section>{children}</section>
    </>
  );
}
