import { useApiRates } from "../../../useApiRates";
import {
  InformationLoader,
  LoadingCircle,
  LoadingText,
} from './styled';

export const Loader = () => {
  const ratesData = useApiRates();
  const status = ratesData.status;

  return (
    <InformationLoader>
      {status === "loading..." ? 
      <> 
        <LoadingCircle /> 
        <LoadingText>
          Updating data from the European Central Bank
        </LoadingText> 
      </> : ""}
      {status === "error" ? 
      <LoadingText>
        Something went wrong. 
        Please check your internet connection and try again later.
      </LoadingText>
      : ""}
    </InformationLoader>
)};