"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, User, MessageSquare, Shield } from "lucide-react";
import { PERSONAL } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowButton from "@/components/ui/GlowButton";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "sent" | "error";

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  multiline = false,
  icon: Icon,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  icon: React.ComponentType<{ size?: number; color?: string }>;
}) {
  const [focused, setFocused] = useState(false);

  const baseStyle = {
    background: focused
      ? "rgba(0,212,255,0.06)"
      : "rgba(0,212,255,0.03)",
    border: focused
      ? "1px solid rgba(0,212,255,0.4)"
      : "1px solid rgba(0,212,255,0.12)",
    color: "#e8f4f8",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    fontSize: "13px",
    width: "100%",
    resize: "none" as const,
    transition: "all 0.2s",
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] tracking-[0.4em] mb-2"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: focused ? "#00d4ff" : "rgba(0,212,255,0.5)",
          transition: "color 0.2s",
        }}
      >
        {label}
      </label>
      <div className="relative">
        <div
          className="absolute left-3 top-3.5 pointer-events-none"
          style={{ color: focused ? "rgba(0,212,255,0.7)" : "rgba(0,212,255,0.3)" }}
        >
          <Icon size={13} />
        </div>
        {multiline ? (
          <textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={5}
            style={{ ...baseStyle, paddingLeft: "36px", paddingTop: "14px", paddingRight: "16px", paddingBottom: "14px" }}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{ ...baseStyle, padding: "14px 16px 14px 36px" }}
          />
        )}
      </div>
    </div>
  );
}

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const LinkedinIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
  const GithubIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
  const ResumeIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  );
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mqpzgaqp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: "#050810" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(0,212,255,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <SectionHeader
          preLabel="SECTION 05"
          title="ESTABLISH // CONNECTION"
          subtitle="Open to collaborations, opportunities, and interesting conversations."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          {/* Left — Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Status */}
            <div
              className="flex items-center gap-3 p-4"
              style={{
                background: "rgba(0,212,255,0.04)",
                border: "1px solid rgba(0,212,255,0.12)",
              }}
            >
              <Shield size={14} color="#00d4ff" />
              <div>
                <p
                  className="text-[10px] tracking-[0.35em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#00d4ff",
                  }}
                >
                  SECURE CHANNEL // READY
                </p>
                <p
                  className="text-[11px] mt-0.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(232,244,248,0.45)",
                  }}
                >
                  Connection encrypted and ready to transmit
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "EMAIL", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 group"
                  style={{
                    background: "rgba(0,212,255,0.03)",
                    border: "1px solid rgba(0,212,255,0.1)",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.15)",
                    }}
                  >
                    <item.icon size={14} color="#00d4ff" />
                  </div>
                  <div>
                    <p
                      className="text-[9px] tracking-[0.35em] mb-0.5"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "rgba(0,212,255,0.4)",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgba(232,244,248,0.8)",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links & Resume */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: LinkedinIcon, label: "LINKEDIN", href: PERSONAL.linkedin, isDownload: false },
                { icon: GithubIcon, label: "GITHUB", href: PERSONAL.github, isDownload: false },
                { icon: ResumeIcon, label: "ATS RESUME", href: "/resume.pdf", isDownload: true },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={social.isDownload ? "Mohammed_Shawez_Khan_Resume.pdf" : undefined}
                  className="flex-1 flex items-center justify-center gap-2 py-3"
                  style={{
                    background: "rgba(0,212,255,0.04)",
                    border: "1px solid rgba(0,212,255,0.12)",
                    textDecoration: "none",
                    color: "rgba(232,244,248,0.6)",
                    fontSize: "10px",
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: "0.2em",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,212,255,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#00d4ff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,212,255,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(232,244,248,0.6)";
                  }}
                >
                  <social.icon />
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="relative p-8"
              style={{
                background: "rgba(0,212,255,0.03)",
                border: "1px solid rgba(0,212,255,0.12)",
              }}
            >
              {/* Panel corner decorations */}
              <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2" style={{ borderColor: "#00d4ff" }} />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2" style={{ borderColor: "#00d4ff" }} />

              {/* Panel label */}
              <p
                className="text-[9px] tracking-[0.4em] mb-6"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "rgba(0,212,255,0.4)",
                }}
              >
                // TRANSMISSION INTERFACE
              </p>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-14 h-14 mx-auto flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(0,212,255,0.1)",
                      border: "1px solid rgba(0,212,255,0.3)",
                    }}
                  >
                    <Send size={20} color="#00d4ff" />
                  </div>
                  <p
                    className="text-sm tracking-[0.2em] mb-2"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: "#00d4ff",
                    }}
                  >
                    TRANSMISSION SENT
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(232,244,248,0.45)",
                    }}
                  >
                    Message received. I&apos;ll respond shortly.
                  </p>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-14 h-14 mx-auto flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(255,107,53,0.1)",
                      border: "1px solid rgba(255,107,53,0.3)",
                    }}
                  >
                    <span style={{ color: "#ff6b35", fontSize: "20px" }}>✕</span>
                  </div>
                  <p
                    className="text-sm tracking-[0.2em] mb-2"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: "#ff6b35",
                    }}
                  >
                    TRANSMISSION FAILED
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(232,244,248,0.45)",
                    }}
                  >
                    Could not send. Please try again or email directly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <InputField
                    label="DESIGNATION // NAME"
                    id="contact-name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    icon={User}
                  />
                  <InputField
                    label="COMM CHANNEL // EMAIL"
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    icon={Mail}
                  />
                  <InputField
                    label="MESSAGE // DATA PAYLOAD"
                    id="contact-message"
                    placeholder="Your message..."
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                    multiline
                    icon={MessageSquare}
                  />

                  <div className="pt-2">
                    <GlowButton
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full justify-center"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            ◉
                          </motion.span>
                          TRANSMITTING...
                        </>
                      ) : (
                        <>
                          <Send size={13} className="opacity-80" />
                          TRANSMIT MESSAGE
                        </>
                      )}
                    </GlowButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
