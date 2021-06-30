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
      {ratesData.state === "loading..." ? <> <CircleLoading /> <LoadingText>Updating data from the European Central Bank</LoadingText> </> : ""}
      {ratesData.state === "error" ? (<LoadingText>Probably there is no internet. Check the network cables, modem or router</LoadingText>) : ""}
    </InformationLoader>
)};