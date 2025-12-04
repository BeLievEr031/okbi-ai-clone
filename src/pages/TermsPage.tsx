import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#17151E] py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Terms & Conditions</h1>
          <p className="text-sm sm:text-base text-[#8b8995] mb-6 sm:mb-8">Updated: 24th April 2025</p>

          <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-[#b5bac1]">
            <p>
              Thanks for signing up to use Okibi. These terms (Terms) apply to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>your access to Okibi;</li>
              <li>your use of the software that powers Okibi ("Software");</li>
              <li>and any documentation that we provide to you.</li>
            </ul>
            <p>
              In these Terms, we sometimes refer to Okibi and the Software together as the "Services."
            </p>
            <p>
              We are Computer Agents Lab Inc., a Delaware C corporation. Our registered office is at 131 Continental Dr, Suite 305, Newark, DE 19713. Our mailing address is 2261 Market Street STE 86588, San Francisco, CA 94114.
            </p>
            <p>
              You can contact us by email at{' '}
              <a href="mailto:hello@okibi.ai" className="text-[#5865f2] hover:underline">
                hello@okibi.ai
              </a>
              .
            </p>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Creating an Account</h2>
              <p>
                Before you can start using Okibi, you'll need to create an account. To create an account, we'll need your name and email address. If you've signed in to Okibi via a third-party login provider (like Google), we might obtain some of this information from them.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Fair Use of Our Services</h2>
              <p className="mb-4">
                When you accept these Terms, we'll grant you a license to use our Services. This license is non-exclusive (we can grant it to others) and personal to you only (non-transferable).
              </p>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Access our Services to create a competing product or service;</li>
                <li>Commercially exploit our Services without our permission, including licensing, selling, or renting parts of our Software;</li>
                <li>Copy or create derivative works based on our Software;</li>
                <li>Access or tamper with non-public areas of Okibi or circumvent protective measures;</li>
                <li>Use our Services to store or distribute malicious software;</li>
                <li>Store unlawful, harmful, or offensive content;</li>
                <li>Violate laws when using Okibi.</li>
              </ul>
              <p>You must be at least 13 years of age to use the Services.</p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Changes to Okibi</h2>
              <p>
                We may change, update, pause, or discontinue any product features at any time, without prior notice, though we aim to notify you reasonably in advance.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Ownership</h2>
              <p>
                All Intellectual Property Rights related to our Services belong to us and our licensors. These Terms do not grant you ownership of any such rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Transferring Rights and Obligations</h2>
              <p>
                We may transfer our rights and obligations under these Terms without affecting your rights. You cannot transfer your rights or obligations under these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Subscription and Fees</h2>
              <p className="mb-4">
                Some parts of Okibi are available via paid subscriptions ("Subscription(s)"). Subscription details and fees are provided at{' '}
                <a href="http://okibi.com" target="_blank" rel="noopener noreferrer" className="text-[#5865f2] hover:underline">
                  okibi.com
                </a>
                .
              </p>
              <p>
                Subscriptions automatically renew at the end of each billing cycle unless canceled. You must provide valid payment information, authorizing Okibi to charge applicable fees. Failed payments may result in cancellation or downgrading of your subscription.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Refund Policy</h2>
              <p>
                We offer a 14-day money-back guarantee for new users' initial subscriptions. Requests for refunds must be made within 14 days of the original purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Ending or Limiting Access</h2>
              <p>
                Failure to comply with these Terms may result in immediate termination of your access to Okibi. We also reserve the right to terminate or limit your access with 30 days' notice for any reason.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Our Responsibilities</h2>
              <p>
                While we aim for Okibi to be reliable and secure, we cannot guarantee uninterrupted service or error-free functionality. We are not responsible for any loss or corruption of your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Support and Monitoring</h2>
              <p>
                For support, contact us via{' '}
                <a href="mailto:support@okibi.com" className="text-[#5865f2] hover:underline">
                  support@okibi.com
                </a>
                . We may monitor your use of Okibi to ensure compliance with these Terms, following our privacy policy guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Privacy</h2>
              <p>
                For information about our privacy practices, please review our Privacy Policy at{' '}
                <a href="http://okibi.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#5865f2] hover:underline">
                  okibi.com/privacy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, USA. Any disputes shall be resolved in courts within Delaware, USA.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
