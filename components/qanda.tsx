import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const Qanda = () => {
    return <div>
      <hr />
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Discover Frequently Asked Questions?</h1>
     
    </div>
    <div className="lg:full w-full mx-auto overflow-auto text-xl">
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>01:How much does a website Cost?</AccordionTrigger>
        <AccordionContent className="font-semibold">
        Get a website for your business at a budget that suits you. We are committed to expanding your digital presence affordably.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>02:What product do techy software offer?</AccordionTrigger>
        <AccordionContent className="font-semibold">
        We offers a diverse range of digital solutions, including websites, E-Commerce platforms, educational websites, career-enriching internships, business consulting, and expert design services. Elevate your online presence with our tailored and versatile approach, unlocking growth and success for your business.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>03:How does it help Businessess grow?</AccordionTrigger>
        <AccordionContent className="font-semibold">
        Websites are powerful tools to generate digital leads and build trust with customers. Nexus is here to guide you in creating a strong online presence that fuels business growth.
        </AccordionContent>
      </AccordionItem>
      
    </Accordion>

      
    </div>
   
  </div>
</section>
    </div>;
}


export default Qanda;