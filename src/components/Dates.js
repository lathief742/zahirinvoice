 export default function Dates({invoiceNumber, invoiceDate, dueDate}) {
    return (
      <>
 <article className="mt-5 flex items-end justify-end">
 <ul>
   <li><span className="font-bold">Invoicer number: </span>{invoiceNumber}</li>
   <li><span className="font-bold">Invoice date: </span>{invoiceDate}</li>
   <li><span className="font-bold">Due date: </span>{dueDate}</li>
 </ul>
</article>
      </>
  )
}