import { supabase } from '@/lib/supabase';

async function getNotes() {
  const { data, error } = await supabase.from('notes').select('*');

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <ul>
        <p>Notes page</p>
      {notes?.map(note => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}
