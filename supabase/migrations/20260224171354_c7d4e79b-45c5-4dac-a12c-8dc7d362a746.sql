ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Deny all reads" ON public.applications
  FOR SELECT USING (false);