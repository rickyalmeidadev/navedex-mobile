import React, { createContext, useContext, useRef, useCallback, useState } from 'react';
import { Alert } from '../components';

const AlertContext = createContext(() => {});

const defaultOptions = {
  type: 'info',
  title: 'Atenção',
  message: 'Tem certeza?',
  cancel: 'Cancelar',
  confirm: 'Confirmar',
  onConfirm: async () => {},
};

const AlertProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

  const shouldPersist = useRef(false);

  const alert = useCallback(providedOptions => {
    setOptions({ ...defaultOptions, ...providedOptions });
    setIsOpen(state => {
      if (state) {
        shouldPersist.current = true;
      }
      return true;
    });
  }, []);

  const onCancel = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onConfirm = useCallback(async () => {
    if (typeof options.onConfirm === 'function') {
      setIsLoading(true);
      await options.onConfirm();
      setIsLoading(false);
    }

    if (!shouldPersist.current) {
      setIsOpen(false);
    }

    shouldPersist.current = false;
  }, [options]);

  const { type, title, description, cancel, confirm } = options;

  return (
    <AlertContext.Provider value={alert}>
      <Alert
        isOpen={isOpen}
        isLoading={isLoading}
        onCancel={onCancel}
        onConfirm={onConfirm}
        type={type}
        title={title}
        description={description}
        cancel={cancel}
        confirm={confirm}
      />
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => useContext(AlertContext);

export { AlertProvider, useAlert };
