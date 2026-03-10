"use client";


const NewsLetterForm = () => {
  return (
    <form
      className="mx-auto flex max-w-md items-center gap-3"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter subscription"
    >
      <label htmlFor="footer-email" className="sr-only">
        Your Email
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="Your Email"
        required
        className="flex-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button type="submit" className="btn btn-primary btn-pill">
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetterForm;
