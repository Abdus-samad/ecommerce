import React, { useState } from 'react';
import { CenterModal, ModalTitle, ModalCloseTarget } from 'react-spring-modal';

export function Center() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open center modal</button>
      <CenterModal isOpen={isOpen} onDismiss={() => setOpen(false)}>
        <ModalTitle>My Center Modal</ModalTitle>
        <ModalCloseTarget>
          <button>Close</button>
        </ModalCloseTarget>
      </CenterModal>
    </>
  );
}

import 'react-spring-modal/styles.css';