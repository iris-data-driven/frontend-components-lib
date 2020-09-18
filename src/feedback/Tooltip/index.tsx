import React, { FC } from 'react';

import { Span, ReactTooltip } from './styles';

import { TooltipProps } from './types';

/**
 * For the tooltip to work, the target element must have the properties 'data-tip' and 'data-for={id}'
 */

const Tooltip: FC<TooltipProps> = ({ id, text, type }) => (
  <>
    <ReactTooltip id={id} data-type={type}>
      <Span type="p3">{text}</Span>
    </ReactTooltip>
  </>
);

Tooltip.defaultProps = {
  type: 'default',
};

export default Tooltip;
