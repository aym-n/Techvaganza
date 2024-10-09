import PageLayout from "../../../Components/PageLayout";

export default function RegisterHome() {
  return (
    <PageLayout
      title={"Event Registration"}
      imgUrl={"/common/register.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Register", path: "/Register" },
      ]}
    >
      <div className="px-4 md:px-10 py-4 md:py-10 font-playfair bg-background ShadowLarge">
        <p className="font-semibold font-figtree text-center textShadow-md text-4xl md:text-5xl text-gray-800 mb-3 overflow-visible">
          Event Registrations are closed
        </p>
      </div>
    </PageLayout>
  );
}
