import ErrorComponent from "@/components/ErrorComponent";

const Error = () => {
  return (
    <div>
      <ErrorComponent />
    </div>
  );
};

export default Error;
Error.getLayout = function (page: any) {
  return <> {page}</>;
};
