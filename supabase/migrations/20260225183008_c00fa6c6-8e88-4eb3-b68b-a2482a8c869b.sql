ALTER TABLE public.applications ADD COLUMN referred_by TEXT DEFAULT NULL;
ALTER TABLE public.investor_enquiries ADD COLUMN referred_by TEXT DEFAULT NULL;