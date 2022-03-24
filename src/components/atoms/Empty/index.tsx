import React, { VFC } from 'react';

import './index.scss';

type Props = {
  title: string;
  body: string;
};

const Empty: VFC<Props> = (props: Props) => {
  return (
    <div className="emptyCard">
      <p className="emptyCard__icon">(;-;)</p>
      <h1>{props.title}</h1>
      <p className="emptyCard__body">{props.body}</p>
    </div>
  );
};

export default Empty;
