import { useApiRates } from "../../../useApiRates";
import {
  InformationLoader,
  CircleLoading,
  LoadingText,
} from './styled';

export const Loader = () => {
  const ratesData = useApiRates();

  return (
    <InformationLoader>
      {ratesData.state === "loading..." ? 
      <> 
        <CircleLoading /> 
        <LoadingText>
          Updating data from the European Central Bank
        </LoadingText> 
      </> : ""}
      {ratesData.state === "error" ? 
      <LoadingText>
        Something went wrong. Please check your internet connection and try again later.
      </LoadingText>
      : ""}
    </InformationLoader>
)};