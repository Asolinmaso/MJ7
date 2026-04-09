import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative pt-32 pb-20 px-6 lg:px-24 max-w-[1244px] mx-auto">
        <h1 className="text-[40px] md:text-[60px] font-black text-[#FB270C] font-[family-name:var(--font-poppins)] leading-tight uppercase tracking-tight mb-12">
          Refund Policy
        </h1>
        
        <div className="space-y-12 text-[#DBDADA] text-lg lg:text-[20px] font-light leading-relaxed">
          <section>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">A legal disclaimer</h2>
            <p>
              The explanations and information provided on this page are only general and high-level 
              explanations and information on how to write your own document of a Refund Policy. You 
              should not rely on this article as legal advice or as recommendations regarding what 
              you should actually do, because we cannot know in advance what are the specific refund 
              policies that you wish to establish between your business and your customers. We 
              recommend that you seek legal advice to help you understand and to assist you in the 
              creation of your own Refund Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Refund Policy - the basics</h2>
            <p>
              Having said that, a Refund Policy is a legally binding document that is meant to 
              establish the legal relations between you and your customers regarding how and if you 
              will provide them with a refund. Online businesses selling products are sometimes 
              required (depending on local laws and regulations) to present their product return 
              policy and refund policy. In some jurisdictions, this is needed in order to comply 
              with consumer protection laws. It may also help you avoid legal claims from customers 
              that are not satisfied with the products they purchased.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">What to include in the Refund Policy</h2>
            <p>
              Generally speaking, a Refund Policy often addresses these types of issues: the 
              timeframe for asking for a refund; will the refund be full or partial; under which 
              conditions will the customer receive a refund; and much, much more.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
