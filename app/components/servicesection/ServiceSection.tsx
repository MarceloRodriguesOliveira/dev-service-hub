import Label from "../label/Label";
import LabelText from "../label/LabelText";

export default function ServiceSection() {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-5 lg:gap-10 flex-wrap md:flex-nowrap lg:flex-wrap md:justify-normal">
      <Label text="Services" />
      <LabelText>
        At our digital marketing agency, we offer a range of services to
        <br className="hidden lg:inline-block" /> help businesses grow and
        succeed online. These services include:
      </LabelText>
    </div>
  );
}
