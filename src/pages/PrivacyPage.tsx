import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#17151E] py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Privacy Policy</h1>
          <p className="text-sm sm:text-base text-[#8b8995] mb-6 sm:mb-8">Updated: 24th April 2025</p>

          <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-[#b5bac1]">
            <p>
              This privacy notice explains how the Okibi web application collects and processes your personal information. It provides details regarding your rights, and how, why, and when we collect and process your data.
            </p>
            <p>
              If you have questions or want to exercise your rights as outlined in this notice, please contact us at{' '}
              <a href="mailto:hello@okibi.ai" className="text-[#5865f2] hover:underline">
                hello@okibi.ai
              </a>
              .
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">About Us</h2>
              <p>
                We are Computer Agents Lab Inc., a Delaware C corporation. Our registered office is at 131 Continental Dr, Suite 305, Newark, DE 19713. Our mailing address is 2261 Market Street STE 86588, San Francisco, CA 94114.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">What This Notice Covers</h2>
              <p>
                This policy covers only the Okibi application and how we collect, process, and store data as part of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Data Collection</h2>
              <p>
                We collect your name, email address, and interactions within the Okibi platform. This includes activities like creating agents, configuring settings, and your engagement with specific features.
              </p>
              <p className="mt-4">
                We do not track any identifying information linked to your external web activity without explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Data Syncing</h2>
              <p className="mb-4">
                By default, cloud data syncing is disabled. If enabled by you, data including your agent configurations and usage preferences will be securely stored and encrypted on servers provided by AWS (Amazon Web Services), exclusively for the purpose of syncing and restoring your sessions across devices.
              </p>
              <p>
                You may request deletion of your synced data at any time by contacting{' '}
                <a href="mailto:hello@okibi.ai" className="text-[#5865f2] hover:underline">
                  hello@okibi.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Global Data Transfer and Processing</h2>
              <p>
                Your data may be stored and processed in any country where we operate or where our service providers operate. By submitting your personal information, you consent to such international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Third-party Software</h2>
              <p className="mb-2">We use trusted third-party services for processing and analyzing data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>AWS for secure storage of user data</li>
                <li>Segment for event data collection</li>
                <li>Mixpanel and June for analytics</li>
              </ul>
              <p>These third parties have their own privacy policies and data processing addenda.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Data Retention</h2>
              <p>
                We retain your data to provide ongoing product updates unless you request deletion by contacting{' '}
                <a href="mailto:hello@okibi.ai" className="text-[#5865f2] hover:underline">
                  hello@okibi.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Marketing Preferences</h2>
              <p>
                Signing up for Okibi opts you into product update communications. You can opt out at any time by clicking "unsubscribe" in emails or by contacting{' '}
                <a href="mailto:hello@okibi.ai" className="text-[#5865f2] hover:underline">
                  hello@okibi.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Your Rights</h2>
              <p className="mb-2">Under applicable data protection regulations, you have:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The right to access your personal data</li>
                <li>The right to rectify inaccuracies in your data</li>
                <li>The right to delete your personal data</li>
                <li>The right to restrict or suppress data processing</li>
                <li>The right to data portability</li>
                <li>The right to object to data processing under specific conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Making a Rights Request</h2>
              <p>
                To exercise your rights, please contact{' '}
                <a href="mailto:hello@okibi.ai" className="text-[#5865f2] hover:underline">
                  hello@okibi.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Complaints</h2>
              <p>
                If you wish to make a complaint regarding your personal data, contact us at{' '}
                <a href="mailto:hello@okibi.ai" className="text-[#5865f2] hover:underline">
                  hello@okibi.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Links to Other Sites</h2>
              <p>
                Okibi may include hyperlinks to third-party websites. Please review the privacy policies of these sites independently.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Policy Changes</h2>
              <p>
                We may periodically update this privacy policy. Updates will be posted on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Contact</h2>
              <p>
                For further details about this Privacy Policy, please contact us at{' '}
                <a href="mailto:hello@okibi.ai" className="text-[#5865f2] hover:underline">
                  hello@okibi.ai
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
