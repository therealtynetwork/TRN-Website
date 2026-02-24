CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  agency TEXT DEFAULT '',
  niche TEXT DEFAULT '',
  social TEXT DEFAULT '',
  why_join TEXT NOT NULL,
  biggest_goal TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);