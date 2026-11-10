export default function Page({ title, description, children }) {
  return (
    <section>
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="mt-2 text-slate-400">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}