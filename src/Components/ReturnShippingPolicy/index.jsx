import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border-b pb-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold text-black">{title}</h2>
        {isOpen ? (
          <FaChevronUp className="w-5 h-5 text-primary" />
        ) : (
          <FaChevronDown className="w-5 h-5 text-primary" />
        )}
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen mt-2" : "max-h-0"
        }`}
      >
        <div className="pl-1 pt-2 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

const ReturnShippingPolicy = () => {
  return (
    <>
      {/* ✅ SEO tags for this page */}
      <Helmet>
        <title>Refund & Return Policy | Lacasido Gen-Z Clothing</title>
        <meta
          name="description"
          content="Read Lacasido's Refund & Return Policy. Hassle-free returns within 7 days, fast shipping across India, and Gen-Z friendly fashion guaranteed."
        />
        <meta
          name="keywords"
          content="refund policy, return policy, shipping policy, Lacasido clothing, Gen-Z fashion store, trendy clothes India, youth streetwear, online shopping returns"
        />
        <meta property="og:title" content="Refund & Return Policy | Lacasido" />
        <meta
          property="og:description"
          content="Hassle-free returns within 7 days, free shipping on orders above ₹999, and quick order tracking with Lacasido Gen-Z fashion store."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Lacasido.com/return-policy" />
        <meta property="og:site_name" content="Lacasido" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Refund & Return Policy
        </h1>

        {/* Eligibility */}
        <AccordionSection title="Eligibility for Returns">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Returns are accepted within{" "}
              <strong className="text-primary">7 days of delivery</strong>.
            </li>
            <li>
              Items must be in{" "}
              <strong className="text-primary">original condition</strong> with
              all tags attached.
            </li>
            <li className="text-red-600 font-medium">
              ⚠️ If tags are removed, no refund or return will be accepted.
            </li>
            <li>
              Customers are responsible for return shipping{" "}
              <strong className="text-primary">
                unless the item is defective
              </strong>{" "}
              or incorrect.
            </li>
          </ul>
        </AccordionSection>

        {/* Refund Process */}
        <AccordionSection title="Refund Process">
          <ul className="list-disc list-inside space-y-1">
            <li>
              After we receive and inspect your returned item, refunds will be
              initiated within{" "}
              <strong className="text-primary">7-10 business days</strong>.
            </li>
            <li>
              Refunds will be issued to the{" "}
              <strong className="text-primary">original payment method</strong>.
            </li>
            <li>
              You will receive a confirmation email once your refund is
              processed.
            </li>
          </ul>
        </AccordionSection>

        {/* Non-returnable */}
        <AccordionSection title="Non-Returnable Items">
          <ul className="list-disc list-inside space-y-1">
            <li>Sale and discounted items</li>
            <li>Gift cards</li>
            <li>Customized or personalized products</li>
            <li>
              Products without original tags or packaging{" "}
              <span className="text-red-600 font-medium">(No Refund/Return)</span>
            </li>
          </ul>
        </AccordionSection>

        {/* Important Notes */}
        <AccordionSection title="Important Notes">
          <ul className="list-disc list-inside space-y-1">
            <li>Returns must be shipped using a trackable method.</li>
            <li>
              We reserve the right to refuse a return if the item is damaged,
              used, or missing tags.
            </li>
            <li>
              Contact our support team before sending any returns for approval.
            </li>
          </ul>
        </AccordionSection>

        {/* Shipping Policy */}
        <h1 className="text-3xl font-bold text-primary mt-10 mb-6">
          Shipping Policy
        </h1>

        {/* Order Processing */}
        <AccordionSection title="Order Processing">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Orders are processed within{" "}
              <strong className="text-primary">1-2 business days</strong> after
              confirmation.
            </li>
            <li>
              Orders placed on weekends or holidays are processed the next
              business day.
            </li>
          </ul>
        </AccordionSection>

        {/* Shipping Time */}
        <AccordionSection title="Shipping Time">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Standard delivery:{" "}
              <strong className="text-primary">4-7 business days</strong>.
            </li>
            <li>
              Express delivery (if available):{" "}
              <strong className="text-primary">1-3 business days</strong>.
            </li>
          </ul>
        </AccordionSection>

        {/* Charges */}
        <AccordionSection title="Shipping Charges">
          <ul className="list-disc list-inside space-y-1">
            <li>Free shipping on all orders above ₹999.</li>
            <li>Shipping fee of ₹60 applies to orders below ₹999.</li>
          </ul>
        </AccordionSection>

        {/* Tracking */}
        <AccordionSection title="Order Tracking">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Once shipped, you will receive an email/text with tracking
              details.
            </li>
            <li>
              You can track your order anytime from your account dashboard or
              tracking page.
            </li>
          </ul>
        </AccordionSection>

        {/* Contact */}
        <AccordionSection title="Contact Us">
          <p>
            For any questions related to your return or shipping, feel free to
            contact us at{" "}
            <a className="text-primary font-bold underline" href="mailto:info@Lacasido.com">contactus@Lacasido.com</a>.
          </p>
        </AccordionSection>
      </div>
      <Footer />
    </>
  );
};

export default ReturnShippingPolicy;
