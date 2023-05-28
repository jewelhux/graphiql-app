import React, { FC } from 'react';

type Props = {
  class: string;
};

const Docs: FC<Props> = (props: Props) => (
  <iframe
    className={props.class}
    style={{ width: '100%', height: '540px' }}
    src="/docs/index.html"
    title="GraphQL documentation"
  ></iframe>
);

export default Docs;
