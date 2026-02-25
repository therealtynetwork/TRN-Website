ALTER TABLE public.investor_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.investor_enquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Deny all reads" ON public.investor_enquiries
  FOR SELECT USING (false);