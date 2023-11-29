import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://usjvkkhbisngigjtmyre.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanZra2hiaXNuZ2lnanRteXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMjYwNTUsImV4cCI6MjAxNDYwMjA1NX0.5D5oyxRVX2Iu3WDz4ZMsD6iKj8n7F3RaWYKMHOB0L2o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
