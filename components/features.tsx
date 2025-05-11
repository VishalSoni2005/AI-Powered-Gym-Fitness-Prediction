import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      {/* Background elements */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true">
        <Image
          className="max-w-none opacity-70"
          src={BlurredShapeGray || "/placeholder.svg"}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 right-0 -z-10 -mb-40 translate-x-[10%] opacity-60"
        aria-hidden="true">
        <Image
          className="max-w-none"
          src={BlurredShape || "/placeholder.svg"}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-teal-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-teal-200/50">
              <span className="inline-flex bg-linear-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-teal-300),var(--color-gray-50),var(--color-emerald-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Elevate your experience with our premium features
            </h2>
            <p className="text-lg text-gray-400">
              Discover how our innovative solutions can transform your workflow,
              boost productivity, and deliver exceptional results with minimal
              effort.
            </p>
          </div>

          {/* Main feature image */}
          <div
            className="flex justify-center pb-4 md:pb-12"
            data-aos="fade-up">
            <Image
              className="max-w-none rounded-lg shadow-xl"
              src={FeaturesImage || "/placeholder.svg"}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>

          {/* Feature items grid */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {/* Feature 1 */}
            <article className="group transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                <svg
                  className="h-6 w-6 fill-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                  <path
                    fillOpacity=".48"
                    d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                Intuitive Dashboard
              </h3>
              <p className="text-gray-400">
                Access all your important metrics and tools in one place with
                our beautifully designed, user-friendly dashboard.
              </p>
            </article>

            {/* Feature 2 */}
            <article className="group transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                <svg
                  className="h-6 w-6 fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    fillOpacity=".48"
                    d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z"
                  />
                  <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
                </svg>
              </div>
              <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                Seamless Integration
              </h3>
              <p className="text-gray-400">
                Connect with your favorite tools and platforms effortlessly,
                creating a unified workflow that saves time and reduces
                friction.
              </p>
            </article>

            {/* Feature 3 */}
            <article className="group transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                <svg
                  className="h-6 w-6 fill-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                  <path
                    fillOpacity=".48"
                    d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                Intelligent Automation
              </h3>
              <p className="text-gray-400">
                Let our AI-powered system handle repetitive tasks, allowing you
                to focus on what truly matters for your business growth.
              </p>
            </article>

            {/* Feature 4 */}
            <article className="group transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                <svg
                  className="h-6 w-6 fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    fillOpacity=".48"
                    d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                  />
                  <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                  <path
                    d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                    opacity=".48"
                  />
                  <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
                </svg>
              </div>
              <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                Real-time Analytics
              </h3>
              <p className="text-gray-400">
                Make data-driven decisions with our comprehensive analytics
                suite that provides actionable insights in real-time.
              </p>
            </article>

            {/* Feature 5 */}
            <article className="group transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
                <svg
                  className="h-6 w-6 fill-teal-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    fillOpacity=".48"
                    d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  />
                  <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
                </svg>
              </div>
              <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                Advanced Security
              </h3>
              <p className="text-gray-400">
                Rest easy knowing your data is protected with enterprise-grade
                security measures and compliance with industry standards.
              </p>
            </article>

            {/* Feature 6 */}
            <article className="group transition-all duration-300 hover:-translate-y-1">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                <svg
                  className="h-6 w-6 fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path
                    fillOpacity=".48"
                    d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                  />
                  <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
                </svg>
              </div>
              <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                24/7 Support
              </h3>
              <p className="text-gray-400">
                Get help whenever you need it with our dedicated support team,
                comprehensive documentation, and active community.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
