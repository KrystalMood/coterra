export const FaQ = () => {
  return (
    <section className="mx-auto w-4/5 mt-24 flex flex-1 flex-col gap-4 text-4xl font-bold text-white">
      <h3 className="mb-4">Frequently Asked Question</h3>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">
          How do I start creating content?
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          To get started, simply sign up for an account, choose your plan, and
          begin uploading your content. You'll have access to tools that help
          you manage, edit, and share your creations with your audience.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">
          What types of content can I create?
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Our platform supports a variety of content formats including videos,
          blogs, podcasts, and more. You can easily diversify your content to
          reach different audience segments.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">
          How do I monetize my content?
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          You can monetize your content by setting up subscriptions, accepting
          donations, or selling products directly to your audience. We offer
          various tools to help you maximize your revenue streams.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">
          What payment methods are supported?
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          We support major payment methods including credit cards, PayPal, and
          digital wallets. You can easily manage your payments and withdrawals
          through our user-friendly dashboard.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">
          Is there a free plan?
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Yes, we offer a free plan that allows you to explore our platform and
          create content with limited features. You can upgrade anytime to
          access premium tools and features.
        </p>
      </div>
    </section>
  );
};
