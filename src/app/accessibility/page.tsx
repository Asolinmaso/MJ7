import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative pt-32 pb-20 px-6 lg:px-24 max-w-[1244px] mx-auto">
        <h1 className="text-[40px] md:text-[60px] font-black text-[#FB270C] leading-tight uppercase tracking-tight font-[family-name:var(--font-poppins)] mb-12">
          Accessibility Statement
        </h1>
        
        <div className="space-y-12 text-[#DBDADA] text-lg lg:text-[20px] font-light leading-relaxed">
          <section>
            <p className="mb-6">
              MJ7 Cinema Production is working to make our site accessible to people with disabilities.
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">What web accessibility is</h2>
            <p>
              An accessible site allows visitors with disabilities to browse the site with the same or 
              a similar level of ease and enjoyment as other visitors. This can be achieved with the 
              capabilities of the system on which the site is operating, and through assistive 
              technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Accessibility adjustments on this site</h2>
            <p className="mb-6">
              We have adapted this site in accordance with WCAG guidelines. This site's contents 
              have been adapted to work with assistive technologies, such as screen readers and 
              keyboard use. As part of this effort, we have:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Set the language of the site</li>
              <li>Set the content order of the site’s pages</li>
              <li>Defined clear heading structures on all of the site’s pages</li>
              <li>Added alternative text to images</li>
              <li>Implemented color combinations that meet the required color contrast</li>
              <li>Reduced the use of motion on the site</li>
              <li>Ensured all videos, audio, and files on the site are accessible</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">Requests, issues, and suggestions</h2>
            <p>
              If you find an accessibility issue on the site, or if you require further assistance, 
              you are welcome to contact us through our general contact information provided in the 
              footer of this website. We are committed to processing all requests with care and 
              efficiency.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
