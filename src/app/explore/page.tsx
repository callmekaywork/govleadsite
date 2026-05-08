"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  Plus,
  ShoppingCart,
  Send,
  X,
  ArrowRight,
  Zap,
  Layers,
  BarChart,
  Globe,
  DollarSign,
} from "lucide-react";
import { SERVICES, Service, Lead, useExploreData } from "@/lib/explore-store";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";
import { orpc } from "@/orpc/client";
import { toast } from "sonner";

export default function Page() {
  const { addLead } = useExploreData();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const idxToNumber = (i: number) => (i + 1).toString().padStart(2, "0");

  const selectedServices = useMemo(
    () => SERVICES.filter((s) => selectedIds.includes(s.id)),
    [selectedIds],
  );

  const totalPrice = useMemo(
    () => selectedServices.reduce((acc, curr) => acc + curr.price, 0),
    [selectedServices],
  );

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // const formData = new FormData(e.target);

    //  onClick={async () => {
    //                         // check for form data
    if (form.name != "" || form.email != "") {
      // do something
      // console.log(
      //   form,
      //   selectedServices.map((s) => s.title),
      //   Number(totalPrice),
      // );

      const res = await orpc.systems.post({
        name: form.name,
        email: form.email,
        company: form.company,
        services: selectedServices.map((s) => s.title),
        status: "new",
        totalPrice: Number(totalPrice),
      });

      toast(res.message, { position: "top-center" });
    } else {
      // do another thing
      toast("Something went wrong - please contact the developer", {
        position: "top-center",
      });
    }
    //                       }}
    // const newLead: Lead = {
    //   id: Math.random().toString(36).substr(2, 9),
    //   ...form,
    //   services: selectedServices.map((s) => s.title),
    //   totalPrice,
    //   status: "new",
    //   date: new Date().toISOString(),
    // };
    // addLead(newLead);
    setIsSubmitted(true);

    // removes the data from form
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
      setSelectedIds([]);
      setForm({ name: "", email: "", company: "" });
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-background font-sans selection:bg-indigo-100 pb-24">
      <Logo_nav />
      <Navigation />

      {/* Floating Price Bar */}
      <AnimatePresence>
        {selectedIds.length > 0 && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 right-6 md:right-10 z-60"
          >
            <div className="bg-brand-card-acc-bg border-4 border-brand-card-acc-bg px-6 py-4 rounded-3xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-default-text uppercase tracking-widest">
                  Total Estimate
                </span>
                <span className="text-2xl font-black text-brand-text">
                  ZAR{totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div className="flex -space-x-2">
                {selectedServices.slice(0, 3).map((s, i) => (
                  <div
                    key={s.id}
                    className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white uppercase"
                  >
                    {s.title[0]}
                  </div>
                ))}
                {selectedServices.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                    +{selectedServices.length - 3}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Hero Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
              <span className="text-xs font-semibold text-indigo-700 uppercase tracking-widest">
                Strategic Intelligence
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-default-text tracking-tighter leading-[0.85]">
              CRAFT YOUR <br />
              <span className="text-brand-accent">GROWTH ENGINE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-text font-medium leading-relaxed max-w-2xl">
              GovLead isn't a funnel; it's a strategic conversation. We partner
              with individuals, corporations, and government entities to build
              infrastructure that converts strategy into sustainable impact.
            </p>
            <div className="p-6 bg-brand-card-acc-bg text-default-text rounded-[32px] border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] inline-block">
              <p className="text-sm font-black uppercase tracking-[0.2em] mb-2">
                Instructions
              </p>
              <p className="text-lg font-bold">
                Click on the service blocks below to create your custom
                deployment invoice. Build the system you actually need.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 py-12 border-y-4 border-brand-card-bg border-dashed">
          {[
            {
              title: "Educate First",
              desc: "We believe in clarity over persuasion. You should understand your growth engine before you buy it.",
            },
            {
              title: "Filtered Growth",
              desc: "We don't work with everyone. We filter for founders and entities ready for intentional, high-velocity scale.",
            },
            {
              title: "Systemic Trust",
              desc: "Trust isn't built through promises; it's built through robust, functioning digital infrastructure.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-2">
              <h4 className="text-xl font-black text-default-text uppercase italic">
                / {item.title}
              </h4>
              <p className="text-accent-text font-medium text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggleService(service.id)}
              className={`group cursor-pointer relative  bg-brand-card-comp-bg p-8 rounded-[48px] border-4 transition-all ${
                selectedIds.includes(service.id)
                  ? "border-white bg-brand-card-acc-bg shadow-[12px_12px_0px_0px_rgba(79,70,229,1)]"
                  : "border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]"
              }`}
            >
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-1">
                  {/* <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    {service.category}
                  </span> */}
                </div>
                <div
                  className={`w-12 h-12 flex justify-center items-center rounded-2xl text-default-text border-2 border-brand-card-acc-bg transition-colors ${selectedIds.includes(service.id) ? "bg-brand-card-acc-bg border-brand-card-acc-bg text-default-text" : "bg-brand-card-bg"}`}
                >
                  {selectedIds.includes(service.id) ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </div>
              </div>

              <h3 className="text-3xl font-black text-default-text tracking-tight mb-4 group-hover:text-indigo-600 transition-colors uppercase italic">
                {service.title}
              </h3>

              <p className="text-accent-text font-medium leading-relaxed mb-10">
                {service.description}
              </p>

              <div className="pt-6 border-t-2 border-dashed border-slate-200 flex items-center justify-between">
                <div className="h-10 flex flex-row justify-between items-center gap-5 text-brand-text font-black text-xl">
                  <h1 className="w-5 h-10 flex justify-center items-center">
                    ZAR
                  </h1>
                  <p>{service.price.toLocaleString()}</p>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Fixed Fee
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Section */}
        <div className="space-y-20 mb-32">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-default-text tracking-tighter uppercase italic">
              The Deep Dive
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Detailed breakdown of our core strategic mechanisms.
            </p>
          </div>

          <div className="space-y-12">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col md:flex-row gap-12 items-center"
              >
                <div
                  className={`w-full md:w-1/2 p-12 bg-brand-card-comp-bg border-4 border-slate-900 rounded-[56px] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] ${i % 2 === 1 ? "md:order-last" : ""}`}
                >
                  <span className="text-xs font-black text-brand-text uppercase tracking-[0.3em] mb-4 block">
                    MECHANISM {idxToNumber(i)}
                  </span>
                  <h3 className="text-2xl w-full font-black text-default-text mb-6 uppercase italic">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed">
                    {s.description} This isn't just a service; it's a structural
                    reset. For <strong>Corporations</strong>, it means
                    streamlining disjointed departments. For{" "}
                    <strong>Government Entities</strong>, it means modernizing
                    value delivery. For <strong>Individuals</strong>, it means
                    building a brand that produces sustainable income.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Primary Analysis",
                      "Drafting Infrastructure",
                      "Stress Testing",
                    ].map((step) => (
                      <li
                        key={step}
                        className="flex items-center gap-3 font-bold text-slate-400"
                      >
                        <div className="w-2 h-2 bg-indigo-600 rounded-full" />{" "}
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 border-4 border-slate-900 rounded-[48px] bg-brand-card-bg flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform relative">
                    <Layers className="w-24 h-24 text-default-text" />
                    <div className="absolute inset-0 flex items-center justify-center font-black text-6xl text-background opacity-50">
                      0{i + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reach Out CTA Footer */}
        {selectedIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-6"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-slate-900 text-white px-10 py-6 rounded-[32px] border-b-[8px] border-slate-700 shadow-2xl flex items-center gap-6 hover:translate-y-1 hover:border-b-[4px] active:translate-y-2 active:border-b-0 transition-all max-w-lg w-full"
            >
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <Send className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em]">
                  Ready to scale?
                </p>
                <p className="text-xl font-bold tracking-tight">
                  Deploy These Systems
                </p>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        )}

        {/* Lead Form Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative  bg-brand-card-acc-bg w-full max-w-2xl rounded-[56px] border-4 border-slate-900 shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] p-8 md:p-16 overflow-hidden"
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                    <div className="w-24 h-24 bg-indigo-100 rounded-[32px] flex items-center justify-center border-4 border-indigo-600 text-indigo-600">
                      <Zap className="w-12 h-12" />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                      Your request was logged! and Received.
                    </h2>
                    <p className="text-lg text-slate-500 font-medium">
                      We'll reach out within 48 hours to begin deployment.
                    </p>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-8 right-8 p-3 hover:bg-slate-50 rounded-2xl transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="mb-12">
                      <span className="text-xs font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full mb-4 inline-block">
                        Secure Deployment
                      </span>
                      <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
                        LETS GET <br />
                        <span className="text-indigo-600">TO KNOW YOU.</span>
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            Full Name
                          </label>
                          <input
                            required
                            className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-600 transition-colors font-bold"
                            placeholder="John Doe"
                            value={form.name}
                            name="name"
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            Company
                          </label>
                          <input
                            required
                            className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-600 transition-colors font-bold"
                            placeholder="Acme Corp"
                            value={form.company}
                            name="company"
                            onChange={(e) =>
                              setForm({ ...form, company: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-600 transition-colors font-bold"
                          placeholder="john@example.com"
                          value={form.email}
                          name="email"
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                        />
                      </div>

                      <div className="pt-8">
                        <button
                          type="submit"
                          className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl border-b-8 border-slate-700 hover:translate-y-1 hover:border-b-4 active:translate-y-2 active:border-b-0 transition-all shadow-xl"
                        >
                          CONFIRM & REQUEST
                        </button>
                        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
                          By submitting, you agree to our systems managing your
                          scaling journey.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
