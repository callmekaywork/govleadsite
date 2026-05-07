"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Lock,
  Mail,
  ChevronRight,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setError(null);

    // Simulate auth protocol
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For demo purposes, we accept any "legit" looking email
    if (data.email.includes("error")) {
      setError("Access Denied: Protocol signature mismatch.");
      setIsSubmitting(false);
    } else {
      router.push("/strategy");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 text-[15rem] font-black text-slate-100 leading-none select-none pointer-events-none -translate-y-1/2 translate-x-1/4 italic uppercase tracking-tighter">
        SECURE
      </div>
      <div className="absolute bottom-0 left-0 text-[15rem] font-black text-slate-100 leading-none select-none pointer-events-none translate-y-1/2 -translate-x-1/4 italic uppercase tracking-tighter">
        ACCESS
      </div>

      <div className="max-w-xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Logo / Home Link */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">
                GovLead.
              </span>
            </Link>
          </div>

          <div className="bg-white border-4 border-slate-900 rounded-[48px] shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] overflow-hidden">
            <div className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
                  IDENTITY / PROTOCOL
                </h1>
                <p className="text-slate-500 font-bold italic text-sm">
                  Authorized personnel only. Initiate authentication.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-50 border-2 border-red-100 p-4 rounded-2xl flex items-center gap-3 text-red-600 mb-4"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-xs font-black uppercase italic tracking-tight">
                        {error}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">
                      Protocol Identifier (Email)
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                      <input
                        {...register("email", {
                          required: "Identifier required",
                        })}
                        className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-2 rounded-2xl outline-none focus:border-indigo-600 font-bold transition-all ${errors.email ? "border-red-500" : "border-slate-100"}`}
                        placeholder="analyst@govlead.id"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center ml-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                        Access Sequence (Password)
                      </label>
                      <Link
                        href="#"
                        className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline italic"
                      >
                        Lost Code?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                      <input
                        {...register("password", {
                          required: "Sequence required",
                        })}
                        className={`w-full pl-12 pr-4 py-4 bg-slate-50 border-2 rounded-2xl outline-none focus:border-indigo-600 font-bold transition-all ${errors.password ? "border-red-500" : "border-slate-100"}`}
                        placeholder="••••••••••••"
                        type="password"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    {...register("rememberMe")}
                    className="w-4 h-4 border-2 border-slate-900 rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xs font-black text-slate-500 uppercase italic tracking-widest cursor-pointer select-none"
                  >
                    Maintain Session
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-slate-900 text-white rounded-[24px] font-black uppercase italic text-xl shadow-[8px_8px_0px_0px_rgba(79,70,229,1)] hover:translate-y-1 hover:shadow-none active:translate-y-2 active:bg-indigo-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Decrypting...
                    </>
                  ) : (
                    <>
                      Initiate Login <ChevronRight className="w-6 h-6" />
                    </>
                  )}
                </button>
              </form>

              <div className="pt-8 text-center text-slate-400 font-bold uppercase italic text-[10px] tracking-widest">
                Protected by GovLead Security Protocol v1.4.2
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-500 font-bold italic text-sm">
              Applying for an ID?{" "}
              <Link
                href="/consultation"
                className="text-indigo-600 hover:underline"
              >
                Request Consult
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
