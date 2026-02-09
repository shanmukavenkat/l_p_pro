import { BookOpen, Search, Filter, ChevronRight, Tag, User } from 'lucide-react';

const textbooks = [
  {
    id: 1,
    title: "Advanced Economic Theory",
    author: "Dr. Aristhostle",
    domain: "Economics",
    status: "Proof Reading",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    author: "Sarah Jenkins",
    domain: "CSE",
    status: "Main Editor Review",
    date: "2024-03-18",
  },
  {
    id: 3,
    title: "Macroeconomics 101",
    author: "Prof. Robert Fox",
    domain: "Economics",
    status: "Designing Team",
    date: "2024-03-20",
  },
];

export default function Upcoming() {
  return (
     <>
    <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Textbooks</h1>
      <p className="text-slate-600 mb-6">Manage and track the editorial progress of upcoming publications.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {textbooks.map((book) => (
          <div key={book.id} className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full ${
                book.status === 'Designing Team' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
              }`}>
                {book.status}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">{book.title}</h3>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <User className="h-4 w-4" />
                <span>{book.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Tag className="h-4 w-4" />
                <span>{book.domain}</span>
              </div>
            </div>

            <button className="mt-auto ml-auto flex items-center gap-x-[8px] text-blue hover:text-blue-hover transition-colors">
              View Details
              <ChevronRight className="h-[16px] w-[16px]" />
            </button>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
}