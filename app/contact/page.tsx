"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, SendHorizonal, CheckCircle } from "lucide-react";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "@/components/translation-context";
import { motion } from "framer-motion";

// Componente de upload customizado
function FileUpload({ onFileSelect }: { onFileSelect: (file: File) => void }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    multiple: false,
    onDrop: (files) => {
      if (files.length > 0) {
        onFileSelect(files[0]);
      }
    },
  });

  const { t } = useTranslation(); // ✅ Adiciona isso aqui

  return (
    <div
      {...getRootProps()}
      className="bg-white text-black transition-colors duration-300 p-8 border border-dashed border-gray-300 dark:border-gray-300 rounded cursor-pointer text-center transition"
    >
      <input {...getInputProps()} />
      <p className="text-sm text-gray-600">
        {acceptedFiles.length > 0
          ? `${t("contact.form.label.acceptedFiles.true")} ${
              acceptedFiles[0].name
            }`
          : t("contact.form.label.acceptedFiles.false")}
      </p>
    </div>
  );
}

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showInsuccessAlert, setShowInsuccessAlert] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const technologies = [
    { description: t("contact.technology.web-sites") },
    { description: t("contact.technology.apps") },
    { description: t("contact.technology.outsourcing") },
    { description: t("contact.technology.uiux") },
    { description: t("contact.technology.crm") },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = new FormData();
    payload.append("from", "vianahub@vianahub.pt");
    payload.append("to", "vianahub@vianahub.pt");
    payload.append("subject", formData.get("subject") as string);
    payload.append("body", formData.get("message") as string);
    payload.append("templateCode", "VianahubPtContact");

    payload.append("metadata[0].Name", formData.get("name") as string);
    payload.append("metadata[0].Email", formData.get("email") as string);
    payload.append("metadata[0].Phone", formData.get("phone") as string);
    payload.append("metadata[0].Company", formData.get("company") as string);

    if (selectedFile) {
      payload.append("document[0].Name", selectedFile.name);
      payload.append(
        "document[0].Extension",
        `.${selectedFile.name.split(".").pop()}`
      );
      payload.append("document[0].Size", selectedFile.size.toString());
      payload.append("document[0].Content", selectedFile);
    }

    try {
      const response = await fetch(
        "https://www.mail.vianahub.pt/contacts/send-mail",
        {
          method: "POST",
          headers: {
            "x-user": "Dener Viana",
            "x-channel": "Portal Promo",
            "x-correlationid": crypto.randomUUID(),
          },
          body: payload,
        }
      );

      if (!response.ok) throw new Error("Erro ao enviar o formulário");

      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 10000); // fecha após 5 segundos
      form.reset();
      setSelectedFile(null);
    } catch (error) {
      console.error(error);
      setShowInsuccessAlert(true);
      setTimeout(() => setShowInsuccessAlert(false), 10000); // fecha após 5 segundos
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[650px] overflow-hidden"
        style={{
          backgroundImage: "url(/pages/hero-contact.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="bg-white/50 dark:bg-black/50 text-orange-400 rounded-lg p-6 max-w-full overflow-hidden">
            <h1 className="text-orange-400 text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-shadow break-words">
              <SendHorizonal className="inline h-10 w-10 sm:h-12 sm:w-12 stroke-white dark:stroke-gray-400 icon-shadow mr-2 align-middle" />
              {t("contact.hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-center text-white dark:text-orange-400 text-shadow">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Alert Section */}
      {showSuccessAlert && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative max-w-5xl bg-green-100 border border-green-400 text-green-800 mx-auto text-left bg-green/50 backdrop-blur-sm rounded-lg p-6 pr-10">
            <strong className="font-bold">
              {t("contact.form.alert.true.title")}
            </strong>
            <span className="block sm:inline ml-2">
              {t("contact.form.alert.true.message")}
            </span>
            git
          </div>
        </div>
      )}
      {showInsuccessAlert && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative max-w-5xl bg-green-100 border border-green-400 text-green-800 mx-auto text-left bg-green/50 backdrop-blur-sm rounded-lg p-6 pr-10">
            <strong className="font-bold">
              {t("contact.form.alert.false.title")}
            </strong>
            <span className="block sm:inline ml-2">
              {t("contact.form.alert.false.message")}
            </span>
            <button
              onClick={() => setShowSuccessAlert(false)}
              className="absolute top-2 right-2 text-green-900"
              aria-label="Show Insuccess Alert"
            >
              <span className="text-xl font-bold">&times;</span>
            </button>
          </div>
        </div>
      )}

      {/* Form Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-black dark:text-yellow-500">
                {t("contact.form.title.part1")}
              </span>{" "}
              <span className="text-orange-400">
                {t("contact.form.title.part2")}
              </span>
            </h2>

            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
              {t("contact.form.subtitle")}
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Form */}
            <Card className="w-[90%] bg-orange-100 border-lg border-none card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-orange-400">
                  {t("contact.form.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-black">
                        {t("contact.form.label.name")}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        onBlur={() => setIsBlurred(true)}
                        onFocus={() => setIsBlurred(false)}
                        className="bg-white dark:bg-white text-black transition-colors duration-300 px-4 py-2 border border-gray-300 dark:border-gray-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-black">
                        {t("contact.form.label.email")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-white dark:bg-white text-black transition-colors duration-300 px-4 py-2 border border-gray-300 dark:border-gray-300 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-black">
                        {t("contact.form.label.phone")}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="bg-white dark:bg-white text-black transition-colors duration-300 px-4 py-2 border border-gray-300 dark:border-gray-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-black">
                        {t("contact.form.label.company")}
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        className="bg-white dark:bg-white text-black transition-colors duration-300 px-4 py-2 border border-gray-300 dark:border-gray-300 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-black">
                      {t("contact.form.label.subject")}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="bg-white dark:bg-white text-black transition-colors duration-300 px-4 py-2 border border-gray-300 dark:border-gray-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-900">
                      {t("contact.form.label.message")}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="bg-white text-black transition-colors duration-300 px-4 py-2 border border-gray-300 dark:border-gray-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-900">
                      {t("contact.form.label.attachment") || "Anexar ficheiro"}
                    </Label>
                    <FileUpload
                      onFileSelect={(file) => setSelectedFile(file)}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-12 py-3 button-shadow"
                    disabled={isSubmitting}
                    arial-label="Submit Contact Form"
                  >
                    {isSubmitting
                      ? t("contact.form.label.sending") || "A enviar..."
                      : t("contact.form.label.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="relative h-[500px] overflow-hidden"
        style={{
          backgroundImage: "url('/pages/parallax-contact.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10" />
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gray-200 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-orange-500">
                  {t("contact.technology.title")}
                </span>
              </h2>

              <p className="text-lg text-black dark:text-white max-w-2xl mx-auto">
                {t("contact.technology.subtitle")}
              </p>
              <br />
              <div className="space-y-4">
                {technologies.map((feature, index) => (
                  <div
                    key={index}
                    className="text-orange-400 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 2, y: 0 }}
                transition={{ duration: 3.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="aspect-[16/9] w-full max-w-3xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-orange-400">
                        {t("contact.info.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-2">
                        <li className="flex items-center text-black dark:text-orange-400 text-lx p-2">
                          <Mail className="h-4 w-4 stroke-black dark:stroke-orange-400" />
                          <span className="ml-2">{t("footer.email.pt")}</span>
                        </li>
                        <li className="flex items-center text-black dark:text-orange-400 text-lx p-2">
                          <Phone className="h-4 w-4 stroke-black dark:stroke-orange-400" />
                          <span className="ml-2">{t("footer.phone.pt")}</span>
                        </li>
                        <li className="flex items-start text-black dark:text-orange-400 text-lx p-2">
                          <MapPin className="h-4 w-4 stroke-black dark:stroke-orange-400" />
                          <span className="ml-2">{t("footer.address.pt")}</span>
                        </li>
                        <div className="border-t border-orange-400 dark:border-white p-2"></div>
                        <li className="flex items-center text-black dark:text-orange-400 text-lx p-2">
                          <Mail className="h-4 w-4 stroke-black dark:stroke-orange-400" />
                          <span className="ml-2">{t("footer.email.br")}</span>
                        </li>
                        <li className="flex items-center text-black dark:text-orange-400 text-lx p-2">
                          <Phone className="h-4 w-4 stroke-black dark:stroke-orange-400" />
                          <span className="ml-2">{t("footer.phone.br")}</span>
                        </li>
                        <li className="flex items-start text-black dark:text-orange-400 text-lx p-2">
                          <MapPin className="h-4 w-4 stroke-black dark:stroke-orange-400" />
                          <span className="ml-2">{t("footer.address.br")}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
