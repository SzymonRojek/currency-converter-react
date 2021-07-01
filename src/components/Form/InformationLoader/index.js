import { useApiRates } from "../../../useApiRates";
import {
  InformationLoader,
  CircleLoading,
  LoadingText,
} from './styled';

export const Loader = () => {
  const ratesData = useApiRates();
  const state = ratesData.state;
  return (
    <InformationLoader>
      {state === "loading..." ? 
      <> 
        <CircleLoading /> 
        <LoadingText>
          Updating data from the European Central Bank
        </LoadingText> 
      </> : ""}
      {state === "error" ? 
      <LoadingText>
        Something went wrong. Please check your internet connection and try again later.
      </LoadingText>
      : ""}
    </InformationLoader>
)};