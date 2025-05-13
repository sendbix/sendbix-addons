import React from 'react';
import { ColorPickerField } from '../../../components/Form';
import { useFocusIdx } from 'sendbix-builder';

export function Color({ title = t('Color') }: { title?: string; inline?: boolean }) {
  const { focusIdx } = useFocusIdx();

  return (
    <ColorPickerField
      label={title}
      name={`${focusIdx}.attributes.color`}
    />
  );
}
