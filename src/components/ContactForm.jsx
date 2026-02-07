import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // success | error

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    // remove error while typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.email.trim()) newErrors.email = "Please enter your email";
    if (!form.message.trim()) newErrors.message = "Please enter your message";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const showToast = (type) => {
    setToast(type);
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Validation
    if (!form.name || !form.email || !form.message) {
      showToast("error");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_b8ifpyn",
        "template_vznstwd",
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        "Db-XrDjCq4uH1GPoE",
      );

      // Success
      showToast("success");

      // Clear form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      showToast("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= Toast ================= */}
      {toast && (
        <div
          className={`fixed top-6 right-6 px-6 py-3 rounded-xl shadow-lg text-white z-50
          ${toast === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {toast === "success"
            ? "Message sent successfully!"
            : "Something went wrong!"}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="relative p-8 rounded-3xl
            bg-white/50 backdrop-blur-md
            border-2 border-white  space-y-5"
      >
        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your name"
            className={`mt-1 w-full px-4 py-3 rounded-xl
            bg-white/70 border
            ${errors.name ? "border-red-400" : "border-pink-100"}
            focus:outline-none focus:ring-2 focus:ring-(--color1)/40`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="your@email.com"
            className={`mt-1 w-full px-4 py-3 rounded-xl
            bg-white/70 border
            ${errors.email ? "border-red-400" : "border-pink-100"}
            focus:outline-none focus:ring-2 focus:ring-(--color1)/40`}
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-gray-600">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Your message..."
            className={`mt-1 w-full px-4 py-3 rounded-xl
            bg-white/70 border
            ${errors.message ? "border-red-400" : "border-pink-100"}
            focus:outline-none focus:ring-2 focus:ring-(--color1)/40`}
          />

          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          disabled={loading}
          type="submit"
          className="w-full py-3 rounded-xl
          bg-(--color1) text-white font-medium
          shadow-lg hover:scale-[1.02] active:scale-[0.98]
          transition disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Send Message"}
        </button>
      </form>
      ;
    </>
  );
}
