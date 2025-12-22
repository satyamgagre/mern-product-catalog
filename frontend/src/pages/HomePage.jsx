import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUi";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await api.get("/notes");
      console.log(res.data);
      setNotes(res.data);
      setIsRateLimited(false);
    } catch (error) {
      console.log("Error fetching notes");
      console.log(error.response);
      if (error.response?.status === 429) {
        setIsRateLimited(true);
      } else {
        toast.error("Failed to load notes");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleRetry = () => {
    fetchNotes();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Loading State */}
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {/* Rate Limited State */}
        {!loading && isRateLimited && (
          <div>
            <RateLimitedUI />
            <div className="text-center mt-4">
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !isRateLimited && notes.length === 0 && <NotesNotFound />}

        {/* Notes Grid */}
        {!loading && !isRateLimited && notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;