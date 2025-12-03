"use client"

import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  id: number
  question: string
  answer: string
}

export function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    fetch("/data/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data.faqs))
  }, [])

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about Haamro Views Nepal</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="border border-border rounded-lg px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="hover:no-underline py-4 text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
