import {
  HelpCircle,
  ChevronDown,
} from "lucide-react";

function Faq() {

  const faqs = [

    {
      question:
        "How do I place an order?",

      answer:
        "Browse products, add items to cart and proceed to checkout to place your order.",
    },

    {
      question:
        "Which payment methods are supported?",

      answer:
        "Credit Card, Debit Card, UPI and Net Banking are supported.",
    },

    {
      question:
        "How can I track my order?",

      answer:
        "Go to Orders page to track your current order status.",
    },

    {
      question:
        "Can I cancel my order?",

      answer:
        "Yes, orders can be cancelled before shipping.",
    },

    {
      question:
        "How do I contact support?",

      answer:
        "Visit the Contact page or email support@shopflow.com.",
    },

    {
      question:
        "Is ShopFlow secure?",

      answer:
        "Yes. ShopFlow uses JWT authentication and secure APIs.",
    },

  ];

  return (

    <div className="space-y-14">

      {/* HEADER */}

      <div>

        <h1 className="text-6xl font-bold">

          Frequently Asked Questions

        </h1>

        <p
          className="
          mt-5
          text-xl
          text-gray-500
        "
        >

          Find answers to common questions.

        </p>

      </div>

      {/* FAQ LIST */}

      <div className="space-y-8">

        {

          faqs.map(

            (faq, index) => (

              <div
                key={index}
                className="
                rounded-[40px]
                border border-white/20
                bg-white/15
                backdrop-blur-2xl
                shadow-xl
                p-10
              "
              >

                <div className="flex items-center gap-4">

                  <HelpCircle
                    className="text-blue-500"
                  />

                  <h1 className="text-2xl font-bold">

                    {faq.question}

                  </h1>

                  <ChevronDown
                    className="ml-auto text-gray-400"
                  />

                </div>

                <p
                  className="
                  mt-8
                  text-gray-600
                  leading-8
                "
                >

                  {faq.answer}

                </p>

              </div>

            )

          )

        }

      </div>

      {/* SUPPORT CARD */}

      <div
        className="
        rounded-[50px]
        border border-white/20
        bg-gradient-to-r
        from-blue-500
        to-cyan-400
        text-white
        shadow-2xl
        p-16
        text-center
      "
      >

        <h1 className="text-5xl font-bold">

          Still Need Help?

        </h1>

        <p className="text-xl mt-8">

          Our support team is available 24×7.

        </p>

        <button
          className="
          mt-10
          px-10
          py-5
          rounded-full
          bg-white
          text-blue-500
          text-xl
          font-semibold
        "
        >

          Contact Support

        </button>

      </div>

    </div>

  );

}

export default Faq;