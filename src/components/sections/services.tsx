"use client";

import {
  ClipboardCheck,
  FileSearch,
  LaptopMinimalCheck,
  MailCheck,
  Radar,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { BlurReveal } from "@/components/effects/blur-reveal";

const serviceIcons = [
  ClipboardCheck,
  FileSearch,
  LaptopMinimalCheck,
  ScanSearch,
  MailCheck,
  ShieldCheck,
  ClipboardCheck,
  FileSearch,
  LaptopMinimalCheck,
  MailCheck,
  ScanSearch,
  ShieldCheck,
  ClipboardCheck,
  FileSearch,
  LaptopMinimalCheck,
  MailCheck,
  Radar,
  ScanSearch,
  ShieldCheck,
];

const serviceIconOffsets = [0, 3, 7, 10, 13, 16];

export default function Services() {
  const { content, dict } = useLanguage();

  return (
    <section className="w-full bg-background text-foreground overflow-hidden relative py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-36">
      <div className="h-full flex flex-col px-container container mx-auto">
        <div className="flex flex-col gap-4 mb-16">
          <BlurReveal>
            <span className="title-counter">[002]</span>
          </BlurReveal>

          <BlurReveal>
            <h2 className="title">{dict.title.services}</h2>
          </BlurReveal>
        </div>

        <div className="flex flex-col gap-12">
          {content.services.map((group, groupIndex) => (
            <BlurReveal key={group.title}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-muted-foreground/40">
                    0{groupIndex + 1}
                  </span>
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((service, serviceIndex) => {
                    const Icon =
                      serviceIcons[serviceIconOffsets[groupIndex] + serviceIndex];

                    return (
                      <article
                        key={service.title}
                        className="group relative flex gap-4 p-5 md:p-6 border border-border/60 bg-background transition-colors duration-500 hover:border-foreground/40"
                      >
                        <Icon
                          aria-hidden="true"
                          className="mt-1 size-5 shrink-0 text-muted-foreground transition-colors duration-500 group-hover:text-foreground"
                          strokeWidth={1.5}
                        />
                        <div className="flex flex-col gap-3">
                          <h4 className="text-sm font-bold tracking-wide text-foreground">
                            {service.title}
                          </h4>
                          <p className="text-sm leading-6 text-muted-foreground">
                            {service.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
