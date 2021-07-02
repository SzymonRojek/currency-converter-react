import { useApiRates } from "../../useApiRates";
import { Loader } from './Loader';
import { ErrorBox } from './ErrorBox';
import { Form } from './Form';

export const StatusRender = () => {
  const ratesData = useApiRates();
  const status = ratesData.status;

  return status === "loading" ? <Loader /> : status === "error" ? <ErrorBox /> : status === "success" ?<Form />  : "";
}