export default function ClientDetails({ clientName, clientAddress }) {
    return (
        <>
      <section className="flex flex-col items-start justify-start">
<h2 className="text-xl uppercase">{clientName}</h2>
<p>{clientAddress}</p>
      </section>
        </>
    )
}