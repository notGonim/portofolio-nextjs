import { FunctionComponent } from "react";
import { IServices } from "../types";

const ServiceCard: FunctionComponent<{ service: IServices }> = ({
  service: { Icon, about, title },
}) => {
  return (
    <div>
      <Icon />
      <div className="">
        <h4>{title}</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
