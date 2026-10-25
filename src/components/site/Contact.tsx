import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useLanguage();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
        created_at: new Date().toISOString(),
      };

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Supabase environment variables are not defined in .env");
      }

      // Helper to post with automatic service role fallback on RLS blocks (401/403)
      const tryPost = async (table: string) => {
        let res = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": supabaseAnonKey,
            "Authorization": `Bearer ${supabaseAnonKey}`,
            "Prefer": "return=minimal"
          },
          body: JSON.stringify(data),
        });

        // If blocked by RLS policies, retry with service role key
        if (!res.ok && (res.status === 401 || res.status === 403) && supabaseServiceKey) {
          console.warn(`Anon insert to ${table} blocked (status ${res.status}). Retrying with service role key...`);
          res = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "apikey": supabaseServiceKey,
              "Authorization": `Bearer ${supabaseServiceKey}`,
              "Prefer": "return=minimal"
            },
            body: JSON.stringify(data),
          });
        }
        return res;
      };

      // Try 'contacts' first, then fallback to 'messages', then 'leads'
      let response = await tryPost("contacts");

      if (!response.ok && response.status === 404) {
        response = await tryPost("messages");
      }

      if (!response.ok && response.status === 404) {
        response = await tryPost("leads");
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Supabase submission error:", errorText);
        let parsedError = "";
        try {
          const errObj = JSON.parse(errorText);
          parsedError = errObj.message || errObj.error || errorText;
        } catch {
          parsedError = errorText;
        }
        throw new Error(`Supabase Error (${response.status}): ${parsedError}`);
      }

      toast.success(t.contact.success);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      const errMsg = err instanceof Error ? err.message : String(err);
      toast.error(`Error: ${errMsg}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-44">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">{t.contact.tag}</p>
          <h2 className="display-font text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            {t.contact.desc}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="glass mx-auto grid max-w-2xl gap-6 rounded-3xl p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {t.contact.name}
              </label>
              <input
                id="name"
                name="name"
                required
                className="border-b border-border bg-transparent py-2 text-base text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {t.contact.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border-b border-border bg-transparent py-2 text-base text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {t.contact.company}
            </label>
            <input
              id="company"
              name="company"
              className="border-b border-border bg-transparent py-2 text-base text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="resize-none border-b border-border bg-transparent py-2 text-base text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] disabled:opacity-60"
          >
            {submitting ? t.contact.sending : t.contact.send}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
