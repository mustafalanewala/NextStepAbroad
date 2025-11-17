import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | NextStep Abroad",
  description: "Terms and conditions for using NextStep Abroad services.",
};

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using NextStep Abroad's services, you accept
                and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                2. Services Provided
              </h2>
              <p className="text-muted-foreground mb-4">
                NextStep Abroad provides educational consulting services
                including career mentoring, study abroad guidance, SAS
                certification training, and related educational services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                3. User Responsibilities
              </h2>
              <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-2">
                <li>
                  Provide accurate and complete information when using our
                  services
                </li>
                <li>Respect intellectual property rights</li>
                <li>Use our services for lawful purposes only</li>
                <li>
                  Maintain confidentiality of any sensitive information shared
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                4. Privacy and Data Protection
              </h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Please refer to our Privacy
                Policy for detailed information about how we collect, use, and
                protect your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-4">
                NextStep Abroad shall not be liable for any indirect,
                incidental, special, or consequential damages arising out of or
                in connection with the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                6. Governing Law
              </h2>
              <p className="text-muted-foreground mb-4">
                These terms and conditions are governed by and construed in
                accordance with the laws of India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                7. Contact Information
              </h2>
              <p className="text-muted-foreground mb-4">
                For any questions regarding these terms, please contact us at
                nextstepabroad53@gmail.com
              </p>
            </section>

            <div className="text-sm text-muted-foreground mt-8 p-4 bg-muted rounded-lg">
              <p>Last updated: November 2025</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
