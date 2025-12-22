import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

const NoteCard = ({ note, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault(); // Prevent navigation when clicking delete
    e.stopPropagation(); // Stop event from bubbling up
    if (window.confirm("Are you sure you want to delete this note?")) {
      onDelete(note._id);
    }
  };

  return (
    <Link
      to={`/notes/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#db934b]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {note.createdAt && new Date(note.createdAt).toLocaleDateString()}
          </span>
          <div className="flex items-center gap-1">
            <button className="btn btn-ghost btn-xs text-primary">
              <PenSquareIcon className="size-4" />
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-ghost btn-xs text-error"
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;