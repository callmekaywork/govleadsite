"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  User,
  Building2,
  MessageSquare,
  Calendar,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  PhoneCall,
  Mail,
  MessageCircle,
  AlertCircle,
  Clock,
  ChevronRight,
} from "lucide-react";
import { useExploreData, Consultation } from "@/lib/explore-store";
import Logo_nav from "@/components/logo_nav";
import Navigation from "@/components/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { orpc } from "@/orpc/client";
import { toast } from "sonner";

export default function ConsultationPage() {
  const { addConsultation } = useExploreData();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState<Partial<Consultation>>({
    contactMethod: "Email",
    hasBusiness: true,
    implementationReady: "Possibly",
  });

  type ConsultFormType = {
    name: string;
    email: string;
    mobile: string;
    contactMethod: "Phone Call" | "Email" | "WhatsApp";
    hasBusiness: boolean;
    businessName?: string;
    industry?: string;
    businessStage?: string;
    teamSize?: string;
    website?: string;
    challenge: string;
    clarityGoal: string;
    implementationReady: string;
    preferredDateTime: string;
    status: "pending" | "confirmed" | "cancelled";
    date: string;
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   watch,
  //   setValue,
  //   reset,
  // } = useForm<ConsultFormType>();

  // const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  // const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // const handleSubmitData = (data: FormData) => {
  //   console.log(data);
  //   // const newCon: Consultation = {
  //   //   id: Math.random().toString(36).substr(2, 9),
  //   //   name: form.name || "",
  //   //   email: form.email || "",
  //   //   mobile: form.mobile || "",
  //   //   contactMethod: form.contactMethod || "Email",
  //   //   hasBusiness: form.hasBusiness ?? true,
  //   //   businessName: form.businessName,
  //   //   industry: form.industry,
  //   //   businessStage: form.businessStage,
  //   //   teamSize: form.teamSize,
  //   //   website: form.website,
  //   //   challenge: form.challenge || "",
  //   //   clarityGoal: form.clarityGoal || "",
  //   //   implementationReady: form.implementationReady || "Possibly",
  //   //   preferredDateTime: form.preferredDateTime || new Date().toISOString(),
  //   //   status: "pending",
  //   //   date: new Date().toISOString(),
  //   // };
  //   // addConsultation(newCon);
  //   // setIsSubmitted(true);
  // };

  // const onSubmit: SubmitHandler<ConsultFormType> = (data) => {
  //   console.log("Form submitted:", data);
  //   console.log("\n", form);
  // };
  // const progress = (step / 4) * 100;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<ConsultFormType>({
    defaultValues: {
      contactMethod: "Email",
      hasBusiness: true,
      implementationReady: "Possibly",
      status: "pending",
      date: new Date().toISOString(),
    },
    mode: "onChange",
  });

  const formData = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof ConsultFormType)[] = [];
    if (step === 1)
      fieldsToValidate = ["name", "email", "mobile", "contactMethod"];
    if (step === 2 && formData.hasBusiness)
      fieldsToValidate = ["businessName", "industry", "businessStage"];
    if (step === 3)
      fieldsToValidate = ["challenge", "clarityGoal", "implementationReady"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((s) => Math.min(s + 1, 4));
    }
  };
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const onSubmit: SubmitHandler<ConsultFormType> = async (data) => {
    // console.log("Form submitted:", data);
    // console.log("\n", form);

    const res = await orpc.consults.post({
      name: data.name || "",
      email: data.email || "",
      mobile: data.mobile || "",
      contactMethod: data.contactMethod || "Email",
      hasBusiness: data.hasBusiness ?? true,
      businessName: data.businessName,
      industry: data.industry,
      businessStage: data.businessStage,
      website: data.website,
      challenge: data.challenge || "",
      clarityGoal: data.clarityGoal || "",
      implementationReady: data.implementationReady || "Possibly",
      status: "pending",
      preferredDateTime: String(new Date(data.preferredDateTime).toISOString()),
      date: String(new Date().toISOString()),
    });

    if (res.message) {
      toast(res.message, {
        position: "top-center",
      });
    } else {
      toast("Something went wrong - please contact the developer", {
        position: "top-center",
      });
    }

    setIsSubmitted(true);
    reset();
  };
  const progress = (step / 4) * 100;

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 pb-24">
      <Logo_nav />
      <Navigation />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-white border-2 border-slate-900 px-4 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                30-Minute Protocol
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              BOOK A STRATEGIC <br />
              <span className="text-indigo-600">CONSULTATION.</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed italic">
              A focused conversation to understand your business, identify
              misalignment, and determine whether GovLead is the right partner
              for your next stage of growth.
            </p>
          </motion.div>
        </div>

        {/* Form Container */}
        <div className="bg-white border-4 border-slate-900 rounded-[48px] shadow-[16px_16px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-slate-100">
            <motion.div
              className="h-full bg-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${onprogress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-8 md:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-[-4deg]">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-black uppercase italic text-slate-900 leading-none">
                            About You
                          </h2>
                          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
                            Protocol Identification
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                            Full Name
                          </label>
                          <input
                            {...register("name", { required: true })}
                            className={`w-full p-4 bg-slate-50 border-2 rounded-2xl outline-none focus:border-indigo-600 font-bold ${errors.name ? "border-red-500" : "border-slate-100"}`}
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                            Email Address
                          </label>
                          <input
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                            className={`w-full p-4 bg-slate-50 border-2 rounded-2xl outline-none focus:border-indigo-600 font-bold ${errors.email ? "border-red-500" : "border-slate-100"}`}
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          Mobile Number
                        </label>
                        <input
                          {...register("mobile", { required: true })}
                          className={`w-full p-4 bg-slate-50 border-2 rounded-2xl outline-none focus:border-indigo-600 font-bold ${errors.mobile ? "border-red-500" : "border-slate-100"}`}
                          placeholder="+27 00 000 0000"
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          Preferred Contact Method
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            { id: "Phone Call", icon: PhoneCall },
                            { id: "Email", icon: Mail },
                            { id: "WhatsApp", icon: MessageCircle },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() =>
                                setValue("contactMethod", item.id as any, {
                                  shouldValidate: true,
                                })
                              }
                              className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all ${formData.contactMethod === item.id ? "border-indigo-600 bg-indigo-50 text-indigo-600 shadow-[4px_4px_0px_0px_rgba(79,70,229,1)]" : "border-slate-100 hover:border-slate-300 text-slate-400"}`}
                            >
                              <item.icon className="w-5 h-5" />
                              <span className="font-bold text-sm">
                                {item.id}
                              </span>
                            </button>
                          ))}
                        </div>
                        {formData.contactMethod === "WhatsApp" && (
                          <p className="text-[10px] font-bold text-slate-400 italic bg-slate-50 p-2 rounded-lg border border-slate-100">
                            * We will use the mobile number provided above for
                            WhatsApp communication.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-3">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-black uppercase italic text-slate-900 leading-none">
                            About Your Business
                          </h2>
                          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
                            Entity Context (Optional)
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 flex items-center justify-between">
                        <p className="text-sm font-bold text-slate-500">
                          Do you currently run a business?
                        </p>
                        <div className="flex gap-2">
                          {["Yes", "No"].map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() =>
                                setValue("hasBusiness", v === "Yes", {
                                  shouldValidate: true,
                                })
                              }
                              className={`px-6 py-2 rounded-xl border-2 font-bold text-xs transition-all ${formData.hasBusiness === (v === "Yes") ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-400 border-slate-100"}`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>

                      {formData.hasBusiness && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                Business Name
                              </label>
                              <input
                                {...register("businessName")}
                                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-600 font-bold"
                                placeholder="Acme Corp"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                Industry
                              </label>
                              <input
                                {...register("industry")}
                                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-600 font-bold"
                                placeholder="SaaS / Fintech / Gov"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                Business Stage
                              </label>
                              <select
                                {...register("businessStage")}
                                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-600 font-bold appearance-none"
                              >
                                <option value="">Select Stage...</option>
                                <option value="Idea">Idea / Pre-launch</option>
                                <option value="Early">Early Stage</option>
                                <option value="Growing">Growing</option>
                                <option value="Established">Established</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                                Website (Optional)
                              </label>
                              <input
                                {...register("website")}
                                className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-600 font-bold"
                                placeholder="https://..."
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {!formData.hasBusiness && (
                        <div className="p-12 text-center border-2 border-dashed border-slate-100 rounded-[40px]">
                          <p className="text-slate-400 font-bold uppercase tracking-widest italic text-sm">
                            Skipping business context. Professional consultation
                            focus retained.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] -rotate-2">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-black uppercase italic text-slate-900 leading-none">
                            Context & Intent
                          </h2>
                          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
                            Purpose Alignment
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          Current Primary Challenge
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            "Lack of clear strategy",
                            "Inconsistent sales or income",
                            "Market positioning confusion",
                            "Scaling challenges",
                            "Systems and operations",
                            "Not sure / exploring",
                          ].map((c) => (
                            <button
                              key={c}
                              type="button"
                              onClick={() =>
                                setValue("challenge", c, {
                                  shouldValidate: true,
                                })
                              }
                              className={`p-4 rounded-xl border-2 text-left transition-all ${formData.challenge === c ? "border-indigo-600 bg-indigo-50 text-indigo-600 shadow-[2px_2px_0px_0px_rgba(79,70,229,1)]" : "border-slate-100 hover:border-slate-300 text-slate-500"}`}
                            >
                              <span className="text-xs font-black uppercase italic">
                                {c}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                          What would you like clarity on?
                        </label>
                        <textarea
                          {...register("clarityGoal", { required: true })}
                          className={`w-full p-4 bg-slate-50 border-2 rounded-2xl outline-none focus:border-indigo-600 font-medium min-h-30 ${errors.clarityGoal ? "border-red-500" : "border-slate-100"}`}
                          placeholder="Please describe what you hope to achieve in 30 minutes..."
                        />
                      </div>

                      <div className="bg-indigo-50 p-6 rounded-3xl border-2 border-indigo-100 space-y-4">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-indigo-600" />
                          <p className="text-xs font-black text-indigo-900 uppercase">
                            Implementation Readiness
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["Yes", "Possibly", "Not at this stage"].map((v) => (
                            <button
                              key={v}
                              type="button"
                              onClick={() =>
                                setValue("implementationReady", v as any, {
                                  shouldValidate: true,
                                })
                              }
                              className={`px-4 py-2 rounded-xl border-2 font-bold text-[10px] uppercase transition-all ${formData.implementationReady === v ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-indigo-400 border-indigo-100"}`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rotate-6">
                          <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-black uppercase italic text-slate-900 leading-none">
                            Choose a Preferred Time
                          </h2>
                          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
                            Protocol Scheduling
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <p className="text-sm font-bold text-slate-500 italic">
                            Select a window for us to confirm. We review each
                            application before confirming availability.
                          </p>
                          <div className="space-y-4">
                            <input
                              type="datetime-local"
                              {...register("preferredDateTime", {
                                required: true,
                              })}
                              className={`w-full p-4 bg-white border-2 rounded-2xl font-black outline-none focus:ring-4 focus:ring-indigo-100 ${errors.preferredDateTime ? "border-red-500" : "border-slate-900"}`}
                            />
                            <div className="bg-slate-900 text-white p-6 rounded-[32px] space-y-2">
                              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                                Note
                              </p>
                              <p className="text-sm font-bold leading-relaxed">
                                This selection is a request. We will auto-detect
                                your timezone and confirm via your preferred
                                channel.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-slate-50 border-2 border-slate-100 rounded-[40px] p-8 flex flex-col justify-center gap-6">
                          <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                              Meeting Duration
                            </p>
                            <p className="text-3xl font-black text-slate-900 italic uppercase">
                              30 Minutes
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                              Format
                            </p>
                            <p className="text-2xl font-black text-slate-900 italic uppercase">
                              Virtual Lab
                            </p>
                          </div>
                          <div className="pt-4 flex items-center gap-3">
                            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-ping" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              Slots Available Next Week
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Controls */}
                <div className="mt-12 pt-8 border-t-2 border-slate-50 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="group flex items-center gap-2 text-sm font-black text-slate-400 hover:text-slate-900 transition-colors uppercase italic"
                    >
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase italic shadow-[4px_4px_0px_0px_rgba(79,70,229,1)] hover:translate-y-1 hover:shadow-none active:translate-y-2 transition-all flex items-center gap-3"
                    >
                      Next Step Here <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase italic shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-1 hover:shadow-none active:translate-y-2 transition-all flex items-center gap-3 cursor-pointer"
                    >
                      Submit Protocol <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-8"
              >
                <div className="w-32 h-32 bg-indigo-600 rounded-[48px] mx-auto flex items-center justify-center text-white rotate-12 shadow-2xl">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-none">
                    Consultation Logged.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
                    Thank you — your request has been received. Our analysts are
                    reviewing your context to confirm alignment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
                  {[
                    { label: "Next Step", val: "Review & Verify" },
                    { label: "Channel", val: formData.contactMethod },
                    { label: "Timeline", val: "24-48 Hours" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 bg-slate-50 rounded-2xl border border-slate-100"
                    >
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-black text-slate-900 uppercase italic">
                        {item.val}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-50 p-6 rounded-3xl border-2 border-indigo-100 max-w-lg mx-auto text-left">
                  <p className="text-xs font-bold text-indigo-900 leading-relaxed uppercase">
                    Expect a virtual meeting link and preparatory notes via your
                    preferred contact channel shortly.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
                >
                  Submit another request
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Philosophy Footnote */}
      <div className="mt-20 py-8 border-y-2 border-slate-100 border-dashed flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 italic">
        <p className="text-sm font-bold text-slate-400 max-w-xs text-center md:text-left">
          We value high-velocity clarity over low-value persuasion.
        </p>
        <div className="flex gap-12">
          <div className="text-center">
            <p className="text-[10px] font-black text-slate-900 uppercase">
              Focus
            </p>
            <p className="text-xs font-bold text-slate-400 uppercase">
              Intentional Scale
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-black text-slate-900 uppercase">
              Goal
            </p>
            <p className="text-xs font-bold text-slate-400 uppercase">
              Strategic Fit
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
