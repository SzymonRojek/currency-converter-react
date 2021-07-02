import {
  InformationLoader,
  LoadingCircle,
  LoadingText,
} from './styled';

export const Loader = () => (
  <InformationLoader>
    <LoadingCircle /> 
    <LoadingText>
      Updating data from the European Central Bank
    </LoadingText> 
  </InformationLoader>
);