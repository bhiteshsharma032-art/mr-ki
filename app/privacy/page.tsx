import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#030303] py-24 px-4 sm:px-6 lg:px-8 selection:bg-[#ff6b35]/30">
      <div className="max-w-4xl mx-auto">
        {/* Header & Back Link */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to homepage
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">Detailed information on how we handle your personal data.</p>
        </div>

        {/* Content Sections inside Dark Grey Cards */}
        <div className="space-y-8">
          
          {/* Section 1 */}
          <section className="bg-[#111111] border border-neutral-800 rounded-[2xl] p-8 lg:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">
              1. Data protection at a glance
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">General information</h3>
                <p className="text-gray-400 leading-relaxed">
                  The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. Detailed information on data protection can be found in our privacy policy, which is linked below.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Data collection on this website</h3>
                <h4 className="text-lg font-medium text-gray-300 mt-4 mb-2">Who is responsible for data collection on this website?</h4>
                <p className="text-gray-400 leading-relaxed">
                  Data processing on this website is carried out by the website operator. Their contact details can be found in the section "Information on the responsible body" in this privacy policy.
                </p>

                <h4 className="text-lg font-medium text-gray-300 mt-4 mb-2">How do we collect your data?</h4>
                <p className="text-gray-400 leading-relaxed">
                  Your data is collected, firstly, because you provide it to us. This could include, for example, data that you enter into a contact form.
                  <br /><br />
                  Other data is collected automatically or with your consent by our IT systems when you visit the website. This is primarily technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you access this website.
                </p>

                <h4 className="text-lg font-medium text-gray-300 mt-4 mb-2">What do we use your data for?</h4>
                <p className="text-gray-400 leading-relaxed">
                  Some data is collected to ensure the website functions correctly. Other data may be used to analyze your user behavior.
                </p>

                <h4 className="text-lg font-medium text-gray-300 mt-4 mb-2">What rights do you have regarding your data?</h4>
                <p className="text-gray-400 leading-relaxed">
                  You have the right to obtain information free of charge at any time regarding the origin, recipients, and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. Furthermore, you have the right, under certain circumstances, to request the restriction of the processing of your personal data. You also have the right to lodge a complaint with the competent supervisory authority.
                  <br /><br />
                  You can contact us at any time with regard to this and other questions concerning data protection.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-[#111111] border border-neutral-800 rounded-3xl p-8 lg:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">
              2. Hosting
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>We host the content of our website with the following provider:</p>
              
              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Externes Hosting</h3>
              <p>
                This website is hosted externally. The personal data collected on this website is stored on the host's servers. This may include, in particular, IP addresses, contact requests, metadata and communication data, contact information, names, website access data, and other data generated via a website.
              </p>
              <p>
                External hosting is used for the purpose of fulfilling our contractual obligations to our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast, and efficient provision of our online services by a professional provider (Art. 6 para. 1 lit. f GDPR). If corresponding consent has been requested, processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and Section 25 para. 1 of the German Telecommunications and Telemedia Data Protection Act (TTDSG), insofar as the consent includes the storage of cookies or access to information on the user's device (e.g., device fingerprinting) within the meaning of the TTDSG. Consent can be withdrawn at any time.
              </p>
              <p>
                Our hosting provider will only process your data to the extent necessary to fulfill its contractual obligations and will follow our instructions regarding this data.
              </p>
              <h4 className="text-lg font-medium text-gray-300 mt-4 mb-2">We use the following hosting provider:</h4>
              <p>Lovable (operator: Lovable Technologies AB), hosted via cloud infrastructure in the European Union.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-[#111111] border border-neutral-800 rounded-3xl p-8 lg:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">
              3. General information and mandatory disclosures
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Data protection</h3>
              <p>
                The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
              </p>
              <p>
                When you use this website, various personal data are collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.
              </p>
              <p>
                Please note that data transmission over the internet (e.g., when communicating via email) can have security vulnerabilities. Complete protection of data against access by third parties is not possible.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Note regarding the responsible body</h3>
              <p>The responsible body for data processing on this website is:</p>
              <address className="not-italic bg-[#1a1a1a] p-4 rounded-xl border border-neutral-800 text-gray-300">
                Sahar Sultany<br />
                Helden Performance GmbH<br />
                Alter Teichweg 11-13<br />
                D-22081 Hamburg<br /><br />
                Telephone: +49 40 524 75051<br />
                Email: hallo@teaching-bau.de
              </address>
              <p>
                The responsible entity is the natural or legal person who, alone or jointly with others, decides on the purposes and means of processing personal data (e.g. names, email addresses, etc.).
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Storage duration</h3>
              <p>
                Unless a more specific retention period is stated within this privacy policy, your personal data will remain with us until the purpose for processing the data no longer applies. If you submit a legitimate request for erasure or withdraw your consent to data processing, your data will be deleted, provided we have no other legally permissible grounds for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the data will be deleted once these grounds cease to apply.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">General information on the legal basis for data processing on this website</h3>
              <p>
                If you have consented to data processing, we process your personal data on the basis of Article 6(1)(a) GDPR or Article 9(2)(a) GDPR if special categories of data pursuant to Article 9(1) GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, data processing also takes place on the basis of Article 49(1)(a) GDPR. If you have consented to the storage of cookies or to access to information on your device (e.g., via device fingerprinting), data processing additionally takes place on the basis of Section 25(1) of the German Telecommunications and Telemedia Data Protection Act (TTDSG). You can withdraw your consent at any time. If your data is required for the performance of a contract or for taking steps prior to entering into a contract, we process your data on the basis of Article 6(1)(b) GDPR. Furthermore, we process your data if it is necessary for compliance with a legal obligation, on the basis of Article 6(1)(c) GDPR. Data processing may also be based on our legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR. Information on the applicable legal bases in each individual case is provided in the following paragraphs of this privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Notice regarding data transfer to the USA and other third countries</h3>
              <p>
                We use tools from companies based in the USA or other third countries that do not offer adequate data protection. When these tools are active, your personal data may be transferred to and processed in these third countries. Please note that a level of data protection comparable to that of the EU cannot be guaranteed in these countries. For example, US companies are obligated to disclose personal data to security authorities without you, as the data subject, having any legal recourse. Therefore, it cannot be ruled out that US authorities (e.g., intelligence agencies) may process, analyze, and permanently store your data located on US servers for surveillance purposes. We have no control over these processing activities.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Revocation of your consent to data processing</h3>
              <p>
                Many data processing operations are only possible with your explicit consent. You can revoke your consent at any time. The legality of data processing carried out before the revocation remains unaffected by the revocation.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Right to object to data processing in special cases and to direct marketing (Art. 21 GDPR)</h3>
              <p>
                If data processing is based on Article 6(1)(e) or (f) GDPR, you have the right to object, on grounds relating to your particular situation, at any time to processing of personal data concerning you, including profiling based on those provisions. The respective legal basis for processing is set out in this privacy policy. If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing serves the purpose of establishing, exercising or defending legal claims (objection pursuant to Article 21(1) GDPR).
              </p>
              <p>
                If your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of your personal data for such marketing, which includes profiling to the extent that it is related to such direct marketing. If you object, your personal data will no longer be processed for direct marketing purposes (objection pursuant to Article 21(2) GDPR).
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Right to lodge a complaint with the competent supervisory authority</h3>
              <p>
                In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work, or the place of the alleged infringement. This right to lodge a complaint is without prejudice to any other administrative or judicial remedy.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Right to data portability</h3>
              <p>
                You have the right to receive the data that we process automatically based on your consent or in fulfillment of a contract, either for yourself or for a third party, in a commonly used, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done if technically feasible.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Information, correction and deletion</h3>
              <p>
                Under applicable law, you have the right to request information, free of charge, about your stored personal data, its origin and recipients, and the purpose of the data processing, as well as the right to rectification or erasure of this data. You can contact us at any time with regard to this and any other questions concerning personal data.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Right to restriction of processing</h3>
              <p>
                You have the right to request the restriction of the processing of your personal data. You can contact us at any time to do so. The right to restrict processing exists in the following cases:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>If you dispute the accuracy of your personal data stored with us, we generally need time to verify this. For the duration of the verification process, you have the right to request the restriction of the processing of your personal data.</li>
                <li>If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.</li>
                <li>If we no longer need your personal data, but you require it for the establishment, exercise or defense of legal claims, you have the right to request restriction of processing of your personal data instead of erasure.</li>
                <li>If you have objected to processing pursuant to Article 21(1) GDPR, a balancing of interests between your interests and ours must be carried out. Until it is determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
              </ul>
              <p>
                If you have restricted the processing of your personal data, this data – apart from being stored – may only be processed with your consent or for the establishment, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or of a Member State.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">SSL or TLS encryption</h3>
              <p>
                This site uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content, such as requests you send to us as the site operator. You can recognize an encrypted connection by the fact that the browser's address bar changes from "http://" to "https://" and by the lock symbol in your browser's address bar.
              </p>
              <p>
                When SSL or TLS encryption is enabled, the data you send to us cannot be read by third parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Objection to advertising emails</h3>
              <p>
                The use of contact details published as part of the legal notice for sending unsolicited advertising and informational materials is hereby prohibited. The operators of these pages expressly reserve the right to take legal action in the event of unsolicited advertising, such as spam emails.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-[#111111] border border-neutral-800 rounded-3xl p-8 lg:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">
              4. Data collection on this website
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Cookies</h3>
              <p>
                Our website uses so-called "cookies." Cookies are small data packets and do not harm your device. They are stored on your device either temporarily for the duration of a session (session cookies) or permanently (persistent cookies). Session cookies are automatically deleted after you leave our website. Persistent cookies remain stored on your device until you delete them yourself or until they are automatically deleted by your web browser.
              </p>
              <p>
                Cookies have various functions. Many cookies are technically necessary, as certain website functions would not work without them. Other cookies can be used to analyze user behavior or for advertising purposes.
              </p>
              <p>
                Cookies that are necessary for carrying out electronic communication, providing certain functions you have requested, or optimizing the website (essential cookies) are stored on the basis of Article 6(1)(f) GDPR, unless another legal basis is specified. The website operator has a legitimate interest in storing essential cookies to ensure the technically flawless and optimized provision of its services. If consent to the storage of cookies and similar recognition technologies has been requested, processing is carried out exclusively on the basis of this consent (Article 6(1)(a) GDPR and Section 25(1) TTDSG); this consent can be revoked at any time.
              </p>
              <p>
                You can configure your browser to notify you when cookies are set and to allow cookies only in individual cases, to accept cookies in certain cases or to generally reject them, and to automatically delete cookies when you close your browser. Disabling cookies may limit the functionality of this website.
              </p>
              <p>
                You can find information about which cookies and services are used on this website in this privacy policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Consent management (cookie banner)</h3>
              <p>
                Our website uses its own, self-developed cookie banner to obtain your consent to the storage of certain cookies on your device or the use of certain technologies and to document this in compliance with data protection regulations.
              </p>
              <p>
                The consent you have given will be stored exclusively locally in your browser's "local storage". No data will be transmitted to third parties. The stored entry serves only to prevent the cookie banner from being displayed again on subsequent visits and to allow us to track your consent decision.
              </p>
              <p>
                You can withdraw your consent at any time by deleting the localStorage entry in your browser (e.g., via the browser's developer tools or by clearing website data). The cookie banner will be displayed again on your next visit.
              </p>
              <p>
                The cookie banner is used to obtain the legally required consent for the use of cookies. The legal basis for this is Article 6(1)(c) GDPR.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Server log files</h3>
              <p>
                The website provider automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. This information includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Browser type and browser version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Hostname of the accessing computer</li>
                <li>Time of server request</li>
                <li>IP Address</li>
              </ul>
              <p>This data will not be combined with other data sources.</p>
              <p>
                This data is collected on the basis of Article 6(1)(f) GDPR. The website operator has a legitimate interest in the technically flawless presentation and optimization of its website – for this purpose, the server log files must be recorded.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Contact form</h3>
              <p>
                If you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provided, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We will not share this data without your consent.
              </p>
              <p>
                The processing of this data is based on Article 6(1)(b) GDPR if your request is related to the performance of a contract or is necessary for taking steps prior to entering into a contract. In all other cases, processing is based on our legitimate interest in the effective handling of inquiries addressed to us (Article 6(1)(f) GDPR) or on your consent (Article 6(1)(a) GDPR), if such consent has been obtained; you may withdraw your consent at any time.
              </p>
              <p>
                The data you enter in the contact form will remain with us until you request its deletion, revoke your consent to its storage, or the purpose for data storage no longer applies (e.g., after your inquiry has been processed). Mandatory legal provisions – in particular, retention periods – remain unaffected.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Inquiries via email, telephone or fax</h3>
              <p>
                When you contact us by email, telephone, or fax, your inquiry, including all resulting personal data (name, inquiry), will be stored and processed by us for the purpose of handling your request. We will not share this data without your consent.
              </p>
              <p>
                The processing of this data is based on Article 6(1)(b) GDPR if your request is related to the performance of a contract or is necessary for taking steps prior to entering into a contract. In all other cases, processing is based on our legitimate interest in the effective handling of inquiries addressed to us (Article 6(1)(f) GDPR) or on your consent (Article 6(1)(a) GDPR), if such consent has been obtained; you may withdraw your consent at any time.
              </p>
              <p>
                The data you send us via contact requests will remain with us until you request its deletion, revoke your consent to its storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory legal provisions – in particular, statutory retention periods – remain unaffected.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-[#111111] border border-neutral-800 rounded-3xl p-8 lg:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">
              5. Audio and video conferences
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Data processing</h3>
              <p>
                We use online conferencing tools, among other methods, to communicate with our customers. The specific tools we use are listed below. When you communicate with us via video or audio conference over the internet, your personal data will be collected and processed by us and the provider of the respective conferencing tool.
              </p>
              <p>
                The conference tools collect all data that you provide/use to access the tools (email address and/or your phone number). Furthermore, the conference tools process the duration of the conference, the start and end times of your participation, the number of participants, and other "contextual information" related to the communication process (metadata).
              </p>
              <p>
                Furthermore, the tool provider processes all technical data necessary for handling online communication. This includes, in particular, IP addresses, MAC addresses, device IDs, device type, operating system type and version, client version, camera type, microphone or speaker, and the type of connection.
              </p>
              <p>
                If content is exchanged, uploaded, or otherwise made available within the tool, it will also be stored on the tool provider's servers. Such content includes, in particular, cloud recordings, chat/instant messages, voicemails, uploaded photos and videos, files, whiteboards, and other information shared during the use of the service.
              </p>
              <p>
                Please note that we do not have full control over the data processing operations of the tools used. Our options are largely determined by the respective provider's company policy. Further information on data processing by the conference tools can be found in the privacy policies of the respective tools, which we have listed below this text.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Purpose and legal basis</h3>
              <p>
                The conference tools are used to communicate with prospective or existing business partners or to offer certain services to our customers (Art. 6 para. 1 lit. b GDPR). Furthermore, the use of these tools serves to generally simplify and expedite communication with us or our company (legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR). Where consent has been requested, the use of the relevant tools is based on this consent; this consent can be revoked at any time with effect for the future.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Storage duration</h3>
              <p>
                The data we collect directly via video and conferencing tools will be deleted from our systems as soon as you request its deletion, withdraw your consent to its storage, or the purpose for data storage no longer applies. Stored cookies remain on your device until you delete them. Mandatory legal retention periods remain unaffected.
              </p>
              <p>
                We have no control over how long your data is stored by the operators of the conference tools for their own purposes. For details, please contact the operators of the conference tools directly.
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Conference tools used</h3>
              <p>We use the following conference tools:</p>

              <h4 className="text-lg font-medium text-gray-300 mt-4 mb-2">Google Meet</h4>
              <p>
                We use Google Meet. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Details regarding data processing can be found in Google's privacy policy: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#ff6b35] hover:underline">https://policies.google.com/privacy?hl=de</a>
              </p>

              <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">Order processing</h3>
              <p>
                We have concluded a data processing agreement (DPA) for the use of the aforementioned service. This is a legally required contract under data protection law, which ensures that the service provider processes the personal data of our website visitors only according to our instructions and in compliance with the GDPR.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
