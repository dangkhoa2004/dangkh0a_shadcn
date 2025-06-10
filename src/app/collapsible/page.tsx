"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CollapseGroup() {
  return (
    <div className="h-[450px] w-full justify-center p-10 items-start">
      <h1 className="text-2xl font-bold p-4">CollapseGroup</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="product">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent>
            Detailed description about the product will appear here.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shipping">
          <AccordionTrigger>Shipping Details</AccordionTrigger>
          <AccordionContent>
            Information about shipping, delivery time, and tracking.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="returns">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent>
            Return conditions, refund process, and customer support details.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
