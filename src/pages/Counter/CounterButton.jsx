export default function CounterBtn({ symbole, onClick }) {

  return (
    <div className="mt-4">
      <button className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2" onClick={onClick}>
        {symbole}
      </button>
    </div>
  )
}
