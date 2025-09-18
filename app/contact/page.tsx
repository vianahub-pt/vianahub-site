"use client";

import { useEffect } from "react";
import { useTranslation } from "@/components/translation-context";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Link,
  MessageSquare,
  MessageSquareCode,
  MessagesSquare,
  Send,
  SendHorizonal,
} from "lucide-react";
import Image from "next/image";
import { ScrollIndicator } from "@/components/scroll-indicator";

export default function ContactPage() {
  const { t, language } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    // Here you would typically send the form data to an external API
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-contact.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <SendHorizonal
                className=" w-12 h-12 lg:w-16 lg:h-16"
                style={{ color: "#FFFFFF" }}
              />
              &nbsp;{t("contact.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-orange-400">
                  {t("contact.form.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">
                        {t("contact.form.label.name")}
                      </Label>
                      <Input id="name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">
                        {t("contact.form.label.email")}
                      </Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">
                        {t("contact.form.label.phone")}
                      </Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div>
                      <Label htmlFor="company">
                        {t("contact.form.label.company")}
                      </Label>
                      <Input id="company" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">
                      {t("contact.form.label.subject")}
                    </Label>
                    <Input id="subject" required />
                  </div>
                  <div>
                    <Label htmlFor="message">
                      {t("contact.form.label.message")}
                    </Label>
                    <Textarea id="message" rows={6} required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? t("contact.form.label.sending")
                      : t("contact.form.label.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-400">
                    {t("contact.info.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t("contact.info.address")}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t("contact.info.phone")}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t("contact.info.email")}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t("contact.info.hours")}
                      </h3>
                      <p className="text-orange-200">
                        {t("contact.info.hours.weekdays")}
                        <br />
                        {t("contact.info.hours.weekend")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
