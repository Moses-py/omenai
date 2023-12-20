export default function EditorialReply() {
  return (
    <div className="my-8">
      <h2 className="text-dark text-sm md:text-lg font-light my-3">
        Leave a comment
      </h2>
      <blockquote className="my-3 text-base-theme">
        Don&apos;t worry, your email address will not be published
      </blockquote>
      {/* Inputs */}
      <form className="flex flex-col gap-y-8">
        <input
          required
          type="text"
          placeholder="Full name"
          className="border-base-theme/30 rounded-sm p-3 focus:ring-1 focus:ring-dark focus:border-none"
        />
        <input
          required
          type="email"
          placeholder="Email address"
          className="border-base-theme/30 rounded-sm p-3 focus:ring-1 focus:ring-dark focus:border-none"
        />
        <textarea
          required
          name="comment-box"
          placeholder="Leave a comment"
          className="border-base-theme/30 rounded-sm p-3 focus:ring-1 focus:ring-dark focus:border-none"
          id=""
          cols={30}
          rows={10}
        ></textarea>

        <button className="p-3 rounded-sm bg-primary text-dark" type="submit">
          Post comment
        </button>
      </form>
    </div>
  );
}
