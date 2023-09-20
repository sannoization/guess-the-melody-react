// @flow
import * as React from 'react';
import {FC} from 'react';
import {Cell} from "./Cell/Cell";
import {PICTURES} from "./Cell/constants";

type Props = {

};
export const Table: FC = () => {
  return (
      <>
      <Cell isAnswerTour={false} type={PICTURES.EMOJI} />
      <Cell isAnswerTour={false} type={PICTURES.GOOGLE_TRANSLATE} />
      <Cell isAnswerTour={true} type={PICTURES.GOOGLE_TRANSLATE} />
      <Cell isAnswerTour={true} type={PICTURES.EMOJI} />
      </>
  );
};